import http, { TokenService, UserService } from '~/services';
import {
  APIResponse,
  IChangePassword,
  ILogIn,
  IRegister,
} from '~/lib/types/service';
import { User } from '~/lib/types/user';
import { ENDPOINT } from '~/shared/constant';
import axios from 'axios';

const register: IRegister = async (email, password, role) => {
  return (await http.post(ENDPOINT.REGISTER, {
    email,
    password,
    role,
  })) as APIResponse<User<typeof role>>;
};

const logIn: ILogIn = async (email, password) => {
  const responseLogInRequest: APIResponse<User<'Mentor' | 'Mentee'>> =
    await http.post(ENDPOINT.LOGIN, {
      email,
      password,
    });

  const token = {
    /** Since this request succeeded... */
    accessToken: responseLogInRequest.headers['authorization'] as string,
    refreshToken: responseLogInRequest.headers['refresh-token'] as string,
  };

  TokenService.setToken(token);

  const responseUserRequest: APIResponse<User<'Mentee' | 'Mentor'>> =
    await http.get(ENDPOINT.GET_CURRENT_USER);

  const user = responseUserRequest.data.data;
  UserService.setUser(user);
};

const logOut = () => {
  TokenService.setToken(null);
  UserService.setUser(null);
};

const requestPasswordReset = async (email: string) => {
  return (await http.post(ENDPOINT.RESET_PASSWORD, { email })) as APIResponse;
};

const verifyResetPasswordReqquest = async (token: string) => {
  return (await http.get(`${ENDPOINT.RESET_PASSWORD}/${token}`)) as APIResponse;
};

const requestPasswordChange: IChangePassword = async (
  currentPassword,
  newPassword,
  newPasswordConfirmation
) => {
  console.log(http.defaults.headers);
  // return await http.post(ENDPOINT.CHANGE_PASSWORD, {
  //   currentPassword,
  //   newPassword,
  //   passwordConfirmation
  // });
  return await http({
    method: 'POST',
    url: ENDPOINT.CHANGE_PASSWORD,
    data: {
      currentPassword,
      newPassword,
      newPasswordConfirmation,
    },
  });
};

const requestEmailVerification = async (
  token: string | string[] | undefined
) => {
  return (await http.get(`${ENDPOINT.VERIFY_EMAIL}${token}`)) as APIResponse;
};

const AuthService = {
  register,
  logIn,
  logOut,
  requestPasswordReset,
  verifyResetPasswordReqquest,
  requestPasswordChange,
  requestEmailVerification,
};

export default AuthService;
