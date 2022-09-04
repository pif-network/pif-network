import http, { TokenService, UserService } from '~/services';
import {
  APIResponse,
  ChangePasswordParams,
  LogInParams,
  RegisterParams,
} from '~/lib/types/service';
import { User } from '~/lib/types/user';
import { ENDPOINT } from '~/shared/constant';

const register = async ({ name, email, password, role }: RegisterParams) => {
  const response: APIResponse<User<typeof role>> = await http.post(
    ENDPOINT.REGISTER,
    {
      name,
      email,
      password,
      role,
    }
  );

  return response;
};

const logIn = async ({ email, password }: LogInParams) => {
  const responseLogInRequest: APIResponse<User<'Mentor' | 'Mentee'>> =
    await http.post(ENDPOINT.LOGIN, {
      email,
      password,
    });

  const token = {
    /** Since this request succeeded... */
    accessToken: responseLogInRequest.headers['Authorization'] as string,
    refreshToken: responseLogInRequest.headers['Refresh-Token'] as string,
  };

  TokenService.setToken(token);

  /** Set tokens for all up-coming request. */
  http.defaults.headers.common['Authorization'] = `Bearer ${token.accessToken}`;
  http.defaults.headers.common['Refresh-Token'] = token.refreshToken;

  const responseUserRequest: APIResponse<User<'Mentee' | 'Mentor'>> =
    await http.get(ENDPOINT.GET_CURRENT_USER);
  const user = responseUserRequest.data.data;
  UserService.setUser(user);

  return user;
};

const logOut = async () => {
  TokenService.setToken(null);
  UserService.setUser(null);
};

const requestPasswordReset = async (email: string) => {
  const response: APIResponse = await http.post(ENDPOINT.RESET_PASSWORD, {
    email,
  });

  return response;
};

const requestPasswordChange = async ({
  password,
  passwordConfirmation,
}: ChangePasswordParams) => {
  const response: APIResponse = await http.post(ENDPOINT.CHANGE_PASSWORD, {
    password: password,
    password2: passwordConfirmation,
  });

  return response;
};

const requestEmailVerification = async (
  token: string | string[] | undefined
) => {
  const response: APIResponse = await http.get(
    `${ENDPOINT.VERIFY_EMAIL}${token}`
  );
  const status = response.status;
  const message = response.data.message;
  let hasVerifiedSuccess = false;

  status === 200 ? (hasVerifiedSuccess = true) : false;

  return { hasVerifiedSuccess, message };
};

const AuthService = {
  register,
  logIn,
  logOut,
  requestPasswordReset,
  requestPasswordChange,
  requestEmailVerification,
};

export default AuthService;
