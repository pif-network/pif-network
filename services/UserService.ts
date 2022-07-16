import { BehaviorSubject } from 'rxjs'

import { Mentee, Mentor, User } from '~/lib/types/user'
import { ENDPOINT } from '~/shared/constant'
import { APIResponse } from '~/lib/types/service'

import http from '.'

const localUser = JSON.parse(
  (typeof window === 'object' && localStorage.getItem('user')) || '""',
)
const userSubject = new BehaviorSubject<User | null>(
  localUser ? localUser : null,
)

/**
 * Next-ed user will automatically be placed in localStorage.
 */
userSubject.subscribe(
  u =>
    typeof window === 'object' &&
    localStorage.setItem('user', JSON.stringify(u)),
)

const setUser = (user: User | null) => {
  userSubject.next(user)
}

const updateProfile = async <T>(updateData: T): Promise<void> => {
  const response: APIResponse<Mentee> = await http.put(
    ENDPOINT.UPDATE_USER_PROFILE,
    updateData,
  )
  const newUser = response.data.data

  setUser(newUser)
}

const getMentorById = async (id: string | string[] | undefined) => {
  const response: APIResponse<Mentor> = await http.get(
    `${ENDPOINT.GET_MENTOR_BY_ID}${id}`,
  )

  return response
}

const getAllMentors = async () => {
  const response: APIResponse<Mentor[]> = await http.get(
    ENDPOINT.GET_ALL_MENTOR,
  )

  return response
}

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
