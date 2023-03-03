import axios from 'axios';

import AuthService from './AuthService';
import TokenService from './TokenService';
import UserService from './UserService';
import setupInterceptorsTo from './Interceptors';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
});

TokenService.onCurrentToken.subscribe(token => {
  instance.defaults.headers.common['authorization'] = token?.accessToken;
  instance.defaults.headers.common['refresh-token'] = token?.refreshToken;
});

export { AuthService, TokenService, UserService };
export default setupInterceptorsTo(instance);
