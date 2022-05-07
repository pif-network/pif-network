import { AxiosPromise, AxiosResponse } from 'axios'
import { Mentee } from '../user'

export interface Token {
  accessToken: string
  refreshToken: string
}

export interface Register {
  (email: string, password: string, name: string): AxiosPromise<Mentee>
}
export interface Login {
  (email: string, password: string): Promise<void>
}

export interface VerifyEmail {
  (token: string | string[] | undefined): Promise<{
    hasVerifiedSuccess: boolean
    message: string
  }>
}
interface EmailVerificationResponsePayload {
  message: string
}
export interface EmailVerificationResponse
  extends AxiosResponse<EmailVerificationResponsePayload> {}

export interface ResetPassword {
  (email: string): AxiosPromise<string>
}
export interface ChangePassword {
  (password: string, passwordConfirmation: string): AxiosPromise<string>
}

/**
 * Error's type handling
 */

export interface ErrorResponse {
  response: {
    data: {
      error: string
      message: string
      statusCode: number
    }
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
    const errorMessage = error.response.data.message
    return errorMessage
  }

  return 'Unknown error.'
}
