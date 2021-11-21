import http from '../http-common'
import authHeader from './AuthHeader'
import axios from 'axios'

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

const getMentorById = id => {
  return axios.get(`http://localhost:3000/api/mentors/${id}`, {
    headers: authHeader(),
  })
}

export default {
  getCurrentUser,
  updateProfile,
  getAllMentors,
  getMentorById,
}
