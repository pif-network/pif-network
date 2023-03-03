import type { AxiosError, AxiosInstance } from 'axios';

import {
  ApiErrorResponse,
  APIResponse,
  getErrorMessage,
  Token,
} from '~/lib/types/service';
import AuthService from './AuthService';
import TokenService from './TokenService';

interface RequestsRequireRefreshAccessTokenQueue
  extends Array<{
    resolve: (token: Token['accessToken']) => void;
    reject: (reason?: unknown) => void;
  }> {}

const resolveRequestsRequireRefreshAccessTokenQueue = (
  token: Token['accessToken'],
  queue: RequestsRequireRefreshAccessTokenQueue
) => {
  queue.forEach(p => {
    p.resolve(token);
  });

  queue = [];
};

const declineRequestsRequireRefreshAccessTokenQueue = (
  error: ApiErrorResponse,
  queue: RequestsRequireRefreshAccessTokenQueue
) => {
  queue.forEach(p => {
    p.reject(error);
  });

  queue = [];
};

let isRefreshing = false;
const setIsRefreshing = (newState: boolean) => {
  isRefreshing = newState;
};

const setupInterceptorsTo = (instance: AxiosInstance): AxiosInstance => {
  if (!instance.interceptors)
    throw new Error(`Invalid axios instance: ${instance}`);

  const queue: RequestsRequireRefreshAccessTokenQueue = [];

  const onResponse = (response: APIResponse): APIResponse => {
    return response;
  };

  const onResponseError = async (
    errorResponse: AxiosError<any, { _hasRetried: boolean }>
  ): Promise<AxiosError | APIResponse> => {
    console.log(errorResponse);
    const { config: originalRequestConfig, response } = errorResponse;

    if (
      !response || // Service unavailable.
      response?.data?.message !== 'jwt expired.' ||
      !originalRequestConfig || // If there is no original request config, it's not an error we can handle.
      originalRequestConfig?.data?._hasRetried
    ) {
      return Promise.reject(errorResponse);
    }

    /**
     * This function adds access token to the queued requests,
     * mark them as retried, and retries them
     * @param token Newly refreshed access token.
     * @returns
     */
    const authenticateQueuedRequest = async (token: Token['accessToken']) => {
      const newConfig = {
        ...originalRequestConfig,
        headers: {
          Authorization: token,
        },
        data: {
          _hasRetried: true,
        },
      };

      return await instance.request(newConfig);
    };

    // Queue current request if refreshing
    if (isRefreshing) {
      try {
        const requestQueuing = new Promise(
          (resolve: (token: Token['accessToken']) => void, reject) => {
            queue.push({ resolve, reject });
          }
        );
        return await authenticateQueuedRequest(await requestQueuing);
      } catch (error) {
        // Failed to refresh access token, reject all queued requests.
        return Promise.reject(error);
      }
    }

    try {
      setIsRefreshing(true);
      const newAccessToken = await TokenService.refreshAccessToken();
      resolveRequestsRequireRefreshAccessTokenQueue(newAccessToken, queue);
      return await instance.request(originalRequestConfig);
    } catch (error) {
      declineRequestsRequireRefreshAccessTokenQueue(
        error as ApiErrorResponse,
        queue
      );
      const errorMessage = getErrorMessage(error);
      console.log(errorMessage);
      await AuthService.logOut();
      return Promise.reject(error);
    } finally {
      setIsRefreshing(false);
    }
  };

  instance.interceptors.response.use(onResponse, onResponseError);
  return instance;
};

export default setupInterceptorsTo;
