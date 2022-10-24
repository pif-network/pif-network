import { BehaviorSubject } from "rxjs";

import {
  APIResponse,
  Token
}                   from "~/lib/types/service";
import { ENDPOINT } from "~/shared/constant";
import http         from ".";

const localToken = JSON.parse(
  (typeof window === "object" && localStorage.getItem("token")) || "\"\""
);
const tokenSubject = new BehaviorSubject<Token | null>(
  localToken ? localToken : null
);

/**
 * next-ed token will automatically be placed in localStorage
 */
tokenSubject.subscribe(
  t =>
    typeof window === "object" &&
    localStorage.setItem("token", JSON.stringify(t))
);

const setToken = (token: Token | null) => {
  tokenSubject.next(token);
};

/**
 * This function should only be called in the context of
 * expired access token.
 *
 * So there are two scenarios:
 * 1. The token is successfully refreshed.
 * 2. The token is expired, and we need to refresh it.
 *
 */
const refreshAccessToken = async () => {
  const response: APIResponse = await http.get(ENDPOINT.REFRESH_ACCESS_TOKEN);
  const newAccessToken = response.headers["Authorization"] 
  
  if (!newAccessToken) {
    throw new Error("Failed to refresh access token");
  }

  /**
   *  This function is not going to be called
   *  if there is no token at all.
   */
  const currentTokens = TokenService.currentToken as Token;
  
  const newTokens = {
    ...currentTokens,
    accessToken: newAccessToken
  };
  
  TokenService.setToken(newTokens);

  return newAccessToken;
};

const TokenService = {
  get currentToken() {
    return tokenSubject.value;
  },
  onCurrentToken: tokenSubject.asObservable(),
  setToken,
  refreshAccessToken
};

export default TokenService;
