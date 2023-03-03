import { AxiosError, AxiosResponse } from 'axios';
import { User, UserRole } from '~/lib/types/user';

export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface IRegister {
  (email: string, password: string, role: UserRole): Promise<
    APIResponse<User<UserRole>>
  >;
}

export interface ILogIn {
  (email: string, password: string): Promise<void>;
}

export interface VerifyEmail {
  (): Promise<{
    hasVerifiedSuccess: boolean;
    message: string;
  }>;
}

export interface IChangePassword {
  (
    currentPassword: string,
    newPassword: string,
    newPasswordConfirmation: string
  ): Promise<APIResponse>;
}

/**
 * Extending AxiosResponse to add custom data object.
 */
export interface APIResponse<T = null>
  extends AxiosResponse<{
    isError: boolean;
    data: T;
    message: string;
    total?: number;
  }> {}

export interface ApiErrorResponse
  extends Omit<AxiosError<APIResponse>, 'response'> {
  response: APIResponse;
}

const hasMessageError = (error: unknown): error is ApiErrorResponse => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
};

export const getErrorMessage = (error: unknown): string => {
  if (hasMessageError(error)) {
    return (
      (error.response && error.response.data.message) ||
      'Something went wrong, please try again later.'
    );
  }

  return 'Something went wrong, please try again later.';
};
