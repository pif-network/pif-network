import axios from 'axios'

import AuthService from './AuthService'
import TokenService from './TokenService'
import UserService from './UserService'
import setupInterceptorsTo from './Interceptors'

  const instance = axios.create({
    baseURL: '/api',
    headers: {
      'Content-Type': 'application/json',
    },
  })


export { AuthService, TokenService, UserService }
export default setupInterceptorsTo(instance)
