import { http, TokenService, UserService } from '~/services'
import {
  ChangePassword,
  EmailVerificationResponse,
  Login,
  Register,
  ResetPassword,
  VerifyEmail,
} from '~/lib/types/service'

// TODO: Check what is the required params from BE
const register: Register = async (email, password, name = '') => {
  const response = await http.post('/mentees', {
    email,
    name,
    password,
  })

  return response
}

const login: Login = async (email, password) => {
  const requestAuthResponse = await http.post('/mentees/auth', {
    email,
    password,
  })
  const token = requestAuthResponse.data
  TokenService.setToken(token)

  const requestUserResponse = await http.get('/mentee/me')
  const user = requestUserResponse.data
  UserService.setUser(user)
}

const logout = () => {
  TokenService.setToken(null)
  UserService.setUser(null)
}

const requestPasswordReset: ResetPassword = async email => {
  const response = await http.post('/mentees/auth/password_reset_request', {
    email,
  })

  return response
}

// TODO: check if BE compare the two password
const requestPasswordChange: ChangePassword = async (
  password,
  passwordConfirmation,
) => {
  const response = await http.post('/mentees/auth/password_change', {
    password: password,
    password2: passwordConfirmation,
  })

  return response
}

const requestEmailVerification: VerifyEmail = async token => {
  const response: EmailVerificationResponse = await http.get(
    `/mentees/auth/email_confirmation/${token}`,
  )
  const status = response.status
  const message = response.data.message
  let hasVerifiedSuccess = false

  status === 400 ? (hasVerifiedSuccess = false) : true

  return { hasVerifiedSuccess, message }
}

const AuthService = {
  register,
  login,
  logout,
  requestPasswordReset,
  requestPasswordChange,
  requestEmailVerification,
}

export default AuthService
