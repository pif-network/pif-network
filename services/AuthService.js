import http from '../http-common'
import authHeader from './AuthHeader'

const forgotPassword = email => {
  return http.post('/mentees/auth/password_reset_request', {
    email: email,
  })
}

// TODO: check if BE compare the two password
const passwordChange = password => {
  return http.post(
    '/mentees/auth/password_change',
    {
      password: password,
      password2: password,
    },
    {
      headers: authHeader(),
    },
  )
}

// TODO: Check what is the required params from BE
const register = (email, password, name, phone = '') => {
  return http.post('/mentees', {
    email,
    password,
    name,
    phone,
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
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    })
    .catch(error => {
      return error.response.data.message
    })
}

// BE doesn't have an official logout function
const logout = () => {
  localStorage.removeItem('user')
}

export default {
  register,
  login,
  logout,
  forgotPassword,
  passwordChange,
}
