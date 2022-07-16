import { BehaviorSubject } from 'rxjs'

import { APIResponse, Token } from '~/lib/types/service'
import { ENDPOINT } from '~/shared/constant'
import http from '.'

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

const refreshAccessToken = async () => {
  const response: APIResponse = await http.get(ENDPOINT.REFRESH_ACCESS_TOKEN)
  const newAccessToken = response.headers['Authorization'] as string
  /** Place new token in all up-coming requests' header */
  http.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`

  /** Request error will be handle at place of use. */
  const currentTokens = TokenService.currentToken as Token
  const newTokens = {
    ...currentTokens,
    accessToken: newAccessToken,
  }
  TokenService.setToken(newTokens)

  return newAccessToken
}

const TokenService = {
  get currentToken() {
    return tokenSubject.value
  },
  onCurrentToken: tokenSubject.asObservable(),
  setToken,
  refreshAccessToken,
}

export default TokenService
