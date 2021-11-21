import { BehaviorSubject } from 'rxjs'

export default function authHeader() {
  // const user = JSON.parse(localStorage.getItem('user'))
  const userSubject = new BehaviorSubject(process.browser && JSON.parse(localStorage.getItem('user')))
  const user = userSubject.value
  if (user && user.access_token) {
    return { Authorization: 'Bearer ' + user.access_token }
  } else {
    return {}
  }
}
