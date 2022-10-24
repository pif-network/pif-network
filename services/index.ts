import axios from 'axios';

import AuthService from './AuthService';
import TokenService from './TokenService';
import UserService from './UserService';
import setupInterceptorsTo from './Interceptors';

const instance = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    common: {
      'Refresh-Token': 'B' + TokenService.currentToken?.refreshToken,
    }
  }
});

export { AuthService, TokenService, UserService };
export default setupInterceptorsTo(instance);
