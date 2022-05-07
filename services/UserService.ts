import { BehaviorSubject } from 'rxjs'

import { http } from '~/services'
import { Mentor, User } from '~/lib/types/user'

const localUser = JSON.parse(
  (typeof window !== undefined && localStorage.getItem('user')) || '""',
)
const userSubject = new BehaviorSubject<User | null>(
  localUser ? localUser : null,
)

/**
 * Next-ed user will automatically be placed in localStorage.
 */
userSubject.subscribe(
  u =>
    typeof window !== undefined &&
    localStorage.setItem('user', JSON.stringify(u)),
)

const setUser = (user: User | null) => {
  userSubject.next(user)
}

const updateProfile = async <T>(updateData: T): Promise<void> => {
  const response = await http.put('/mentees/me', updateData)
  const newUser = response.data

  setUser(newUser)
}

const getMentorById = (id: string | string[] | undefined) => {
  return http.get(`/mentors/${id}`)
}

const getAllMentors = async (): Promise<Mentor[]> => {
  const response = await http.get('/mentors')
  const mentors = response.data

  return mentors
}

// const bookMentorById = id => {
//   return http.post('/requests', {
//     mentor_id: id,
//   })
// }

const UserService = {
  get currentUser() {
    return userSubject.value
  },
  onUser: () => userSubject.asObservable(),
  setUser,
  updateProfile,
  getAllMentors,
  getMentorById,
}

export default UserService
