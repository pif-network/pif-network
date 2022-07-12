import { useState } from 'react'
import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import {
  ErrorResponse,
  APIResponse,
  getErrorMessage,
} from '~/lib/types/service'
import AuthService from './AuthService'
import TokenService from './TokenService'

interface RequestsThatRequireRefreshAccessTokenQueue
  extends Array<{
    resolve: (token?: string) => void
    reject: (reason?: unknown) => void
  }> {}

let isRefreshing = false
const setIsRefreshing = (newState:boolean)=>{
	isRefreshing = newState
}

const setupInterceptorsTo = (instance: AxiosInstance): AxiosInstance => {
  if (!instance.interceptors)
    throw new Error(`Invalid axios instance: ${instance}`)

  let queue: RequestsThatRequireRefreshAccessTokenQueue = []

  const resolveQueue = (token?: string) => {
    queue.forEach(p => {
      p.resolve(token)
    })

    queue = []
  }
  const declineQueue = (error: ErrorResponse) => {
    queue.forEach(p => {
      p.reject(error)
    })

    queue = []
  }

  const onResponse = (response: APIResponse): APIResponse => {
    return response
  }

  const onResponseError = async (
    error: AxiosError<any, { _hasRetried: boolean }>,
  ): Promise<AxiosError | APIResponse> => {
    const { config: originalRequestConfig, response } = error

    /**
     * This function adds access token to the queued requests, mark them as retried, and retries them
     * @param token Newly refreshed access token.
     * @returns
     */
    const authenticateQueuedRequests = (token: string | undefined) => {
      let newConfig

      if (token) {
        newConfig = {
          ...originalRequestConfig,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: {
            _hasRetried: true,
          },
        }
      }

      return instance.request(newConfig || originalRequestConfig)
    }

    if (
      (response && response.status !== 401) ||
      originalRequestConfig.data?._hasRetried
    ) {
      return Promise.reject(error)
    }

    /** Queue all in-coming requests while refreshing */
    if (isRefreshing) {
      const requestsQueuing = new Promise(
        (resolve: (token?: string) => void, reject) => {
          queue.push({ resolve, reject })
        },
      )
      return authenticateQueuedRequests(await requestsQueuing)
    }

    let newAccessToken
    try {
      setIsRefreshing(true)
      newAccessToken = await TokenService.refreshAccessToken()
    } catch (error) {
      declineQueue(error as ErrorResponse)
      const errorMessage = getErrorMessage(error)

      switch (errorMessage) {
        case 'Token exprired!':
          AuthService.logOut()
          break
        default:
          break
      }

      throw error
    } finally {
      setIsRefreshing(false)
    }
    resolveQueue(newAccessToken)

    return Promise.reject(error)
  }

  instance.interceptors.response.use(onResponse, onResponseError)
  return instance
}

export default setupInterceptorsTo
