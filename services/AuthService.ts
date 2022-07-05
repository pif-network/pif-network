import http, { TokenService, UserService } from '~/services'
import {
  APIResponse,
  ChangePasswordParams,
  LogInParams,
  RegisterParams,
} from '~/lib/types/service'
import { ENDPOINT } from '~/shared/constant'
import { Mentee } from '~/lib/types/user'

const register = async ({ email, password, name = '' }: RegisterParams) => {
  const response: APIResponse = await http.post(ENDPOINT.REGISTER, {
    email,
    name,
    password,
  })

  return response
}

const logIn = async ({ email, password }: LogInParams) => {
  const responseLogInRequest: APIResponse = await http.post(ENDPOINT.LOGIN, {
    email,
    password,
  })

  const token = {
    /** Since this request succeeded... */
    accessToken: responseLogInRequest.headers['Authorization'] as string,
    refreshToken: responseLogInRequest.headers['Refresh-Token'] as string,
  }

  TokenService.setToken(token)

  /** Set tokens for all up-coming request. */
  http.defaults.headers.common['Authorization'] = `Bearer ${token.accessToken}`
  http.defaults.headers.common['Refresh-Token'] = token.refreshToken

  const responseUserRequest: APIResponse<Mentee> = await http.get(
    ENDPOINT.GET_CURRENT_USER,
  )
  const user = responseUserRequest.data.data
  UserService.setUser(user)

  return user
}

const logOut = async () => {
  const response: APIResponse = await http.post(ENDPOINT.LOGOUT)
  TokenService.setToken(null)
  UserService.setUser(null)

  return response
}

const requestPasswordReset = async (email: string) => {
  const response: APIResponse = await http.post(ENDPOINT.RESET_PASSWORD, {
    email,
  })

  return response
}

const requestPasswordChange = async ({
  password,
  passwordConfirmation,
}: ChangePasswordParams) => {
  const response: APIResponse = await http.post(ENDPOINT.CHANGE_PASSWORD, {
    password: password,
    password2: passwordConfirmation,
  })

  return response
}

const requestEmailVerification = async (
  token: string | string[] | undefined,
) => {
  const response: APIResponse = await http.get(
    `${ENDPOINT.VERIFY_EMAIL}${token}`,
  )
  const status = response.status
  const message = response.data.message
  let hasVerifiedSuccess = false

  status === 200 ? (hasVerifiedSuccess = true) : false

  return { hasVerifiedSuccess, message }
}

const AuthService = {
  register,
  logIn,
  logOut,
  requestPasswordReset,
  requestPasswordChange,
  requestEmailVerification,
}

export default AuthService
