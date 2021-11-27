import { BehaviorSubject } from 'rxjs'

const getLocalRefreshToken = () => {
  const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')))
  const user = userSubject.value
  return user?.refresh_token
}

const getLocalAccessToken = () => {
  const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')))
  const user = userSubject.value
  return user?.access_token
}

const updateLocalAccessToken = token => {
  let userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')))
  let user = userSubject.value
  user.access_token = token
  localStorage.setItem('user', JSON.stringify(user))
}

const setUser = user => {
  console.log(JSON.stringify(user))
  localStorage.setItem('user', JSON.stringify(user))
}

const removeUser = () => {
  localStorage.removeItem('user')
}

const TokenService = {
  getLocalRefreshToken,
  getLocalAccessToken,
  updateLocalAccessToken,
  setUser,
  removeUser,
}

export default TokenService
