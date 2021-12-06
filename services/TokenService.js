import { BehaviorSubject } from 'rxjs'

const getLocalRefreshToken = () => {
  const tokenSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('token')))
  const token = tokenSubject.value
  return token?.refresh_token
}

const getLocalAccessToken = () => {
  const tokenSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('token')))
  const token = tokenSubject.value
  return token?.access_token
}

const getLocalUserToken = () => {
  const tokenSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('token')))
  const token = tokenSubject.value
  return token?.user_token
}
const updateLocalAccessToken = updatedToken => {
  let tokenSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('token')))
  let token = tokenSubject.value
  token.access_token = updatedToken
  localStorage.setItem('token', JSON.stringify(token))
}

const setToken = token => {
  console.log(JSON.stringify(token))
  localStorage.setItem('token', JSON.stringify(token))
}

const setUser = user => {
  console.log(JSON.stringify(user))
  localStorage.setItem('user', JSON.stringify(user))
}

const getCurrentUser = () => {
  const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')))
  const user = userSubject.value
  return user
}

const removeUser = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token')
}

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  getLocalUserToken,
  updateLocalAccessToken,
  setToken,
  getCurrentUser,
  setUser,
  removeUser,
}

export default TokenService
