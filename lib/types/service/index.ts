import { AxiosError, AxiosPromise, AxiosResponse } from 'axios'
import { Mentee } from '../user'

export interface Token {
  accessToken: string
  refreshToken: string
}

export interface APIResponse<T = unknown>
  extends AxiosResponse<{
    isError: boolean
    data: T
    message: string
  }> {}

export interface RegisterParams {
  email: string
  password: string
  name: string
}
export interface LogInParams {
  email: string
  password: string
}

export interface VerifyEmail {
  (): Promise<{
    hasVerifiedSuccess: boolean
    message: string
  }>
}

export interface ChangePasswordParams {
  password: string
  passwordConfirmation: string
}

/**
 * Error's type handling
 */

export interface ErrorResponse
  extends Omit<AxiosError<APIResponse>, 'response'> {
  response: {
    data: APIResponse
  }
}

const hasMessageError = (error: unknown): error is ErrorResponse => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  )
}

export const getErrorMessage = (error: unknown): string => {
  if (hasMessageError(error)) {
    const errorMessage = error.response.data.data.message
    return errorMessage
  }

  return 'Unknown error.'
}
