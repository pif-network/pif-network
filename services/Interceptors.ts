import axios from 'axios'
import TokenService from './TokenService'

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

instance.interceptors.request.use(
  config => {
    const token = TokenService.currentToken

    if (token) {
      config.headers!['Authorization'] = 'Bearer ' + token
    }

    return config
  },
  error => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  res => {
    return res
  },
  async err => {
    const originalConfig = err.config

    if (originalConfig.url !== '/mentees/auth' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true
        // TokenService.removeUser()

        // BUG It sill uses the old access token in the headers
        // originalConfig.headers['Authorization'] = 'Bearer ' + TokenService.getLocalRefreshToken()
        // try {
        //   const rs = await instance.post('/mentees/auth/token_refresh', null, {
        //     headers: {
        //       Authorization: 'Bearer ' + TokenService.getLocalRefreshToken(),
        //     },
        //   })

        //   const { accessToken } = rs.data
        //   TokenService.updateLocalAccessToken(accessToken)

        //   return instance(originalConfig)
        // } catch (_error) {
        //   return Promise.reject(_error)
        // }
      }
    }

    return Promise.reject(err)
  },
)

export default instance
