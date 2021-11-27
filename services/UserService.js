import http from './Interceptors'

const getCurrentUser = () => {
  return http.get('/mentees/me')
}

const updateProfile = data => {
  return http.put('/mentees/me', data)
}

const getAllMentors = () => {
  return http.get('/mentors')
}

const getMentorById = id => {
  return http.get(`/mentors/${id}`)
}

const bookMentorById = id => {
  return http.post('/requests', {
    mentor_id: id,
  })
}
export default {
  getCurrentUser,
  updateProfile,
  getAllMentors,
  getMentorById,
  bookMentorById,
}
