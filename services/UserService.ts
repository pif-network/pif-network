import { BehaviorSubject } from 'rxjs';

import { User } from '~/lib/types/user';
import { ENDPOINT } from '~/shared/constant';
import { APIResponse } from '~/lib/types/service';

import http from '.';

const localUser = JSON.parse(
  (typeof window === 'object' && localStorage.getItem('user')) || '""'
);
const userSubject = new BehaviorSubject<User<'Mentee' | 'Mentor'> | null>(
  localUser ? localUser : null
);

/**
 * Next-ed user will automatically be placed in localStorage.
 */
userSubject.subscribe(
  u =>
    typeof window === 'object' &&
    localStorage.setItem('user', JSON.stringify(u))
);

const setUser = (user: User<'Mentee' | 'Mentor'> | null) => {
  userSubject.next(user);
};

const updateProfile = async <T>(updateData: T): Promise<void> => {
  const response: APIResponse<User<'Mentee' | 'Mentor'>> = await http.put(
    ENDPOINT.UPDATE_USER_PROFILE,
    updateData
  );
  const newUser = response.data.data;

  setUser(newUser);
};

const getMentorById = async (id: string | string[] | undefined) => {
  return await http.get( `${ENDPOINT.GET_MENTOR_BY_ID}${id}`) as APIResponse<User<'Mentor'>> 
};

const getAllMentors = async () => {
   return await http.post( ENDPOINT.GET_ALL_MENTOR, {}) as APIResponse<User<'Mentor'>[]> 
};

const UserService = {
  get currentUser() {
    return userSubject.value;
  },
  onUser: () => userSubject.asObservable(),
  setUser,
  updateProfile,
  getAllMentors,
  getMentorById,
};

export default UserService;
