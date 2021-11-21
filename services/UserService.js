import http from '../http-common'
import authHeader from './AuthHeader'

const getCurrentUser = () => {
  return http.get('/mentees/me', {
    headers: authHeader(),
  })
}

const updateProfile = data => {
  return http.put('/mentees/me', data, {
    headers: authHeader(),
  })
}

const getAllMentors = () => {
  return http.get('/mentors', {
    headers: authHeader(),
  })
}

export default {
  getCurrentUser,
  updateProfile,
  getAllMentors,
}
