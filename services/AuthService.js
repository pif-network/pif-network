import http from './Interceptors'
import TokenService from './TokenService'

const forgotPassword = email => {
  return http.post('/mentees/auth/password_reset_request', {
    email: email,
  })
}

// TODO: check if BE compare the two password
const passwordChange = password => {
  return http.post('/mentees/auth/password_change', {
    password: password,
    password2: password,
  })
}

// TODO: Check what is the required params from BE
const register = (email, password, name = '') => {
  return http.post('/mentees', {
    email,
    password,
    name,
  })
}

const login = (email, password) => {
  return http
    .post('/mentees/auth', {
      email,
      password,
    })
    .then(response => {
      if (response.data.access_token) {
        TokenService.setToken(response.data)
      }
      return http.get('/mentees/me')
    })
    .then(response => {
      if (response.data.name) {
        TokenService.setUser(response.data)
      }
      return response.data
    })
}

const verifyEmail = token => {
  return http.get(`/mentees/auth/email_confirmation/${token}`)
}

// BE doesn't have an official logout function
const logout = () => {
  TokenService.removeUser()
}

export default {
  register,
  login,
  logout,
  forgotPassword,
  passwordChange,
  verifyEmail,
}
