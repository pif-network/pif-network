import { BehaviorSubject } from 'rxjs'
import { Token } from '~/lib/types/service'

const localToken = JSON.parse(
  (typeof window === 'object' && localStorage.getItem('token')) || '""',
)
const tokenSubject = new BehaviorSubject<Token | null>(
  localToken ? localToken : null,
)

/**
 * next-ed token will automatically be placed in localStorage
 */
tokenSubject.subscribe(
  t =>
    typeof window === 'object' &&
    localStorage.setItem('token', JSON.stringify(t)),
)

const setToken = (token: Token | null) => {
  tokenSubject.next(token)
}

const TokenService = {
  get currentToken() {
    return tokenSubject.value
  },
  onCurrentToken: tokenSubject.asObservable(),
  setToken,
}

export default TokenService
