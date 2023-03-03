import { BehaviorSubject } from 'rxjs';

import { Fields, Offers, User } from '~/lib/types/user';
import { ENDPOINT } from '~/shared/constant';
import { APIResponse } from '~/lib/types/service';

import http from '.';
import { Review } from '~/features/mentor/Review';

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

const updateProfile = async <TData extends Partial<User<'Mentee' | 'Mentor'>>>(
  updateData: TData
): Promise<void> => {
  const response: APIResponse<User<'Mentee' | 'Mentor'>> = await http.patch(
    ENDPOINT.UPDATE_USER_PROFILE,
    updateData
  );
  const newUser = response.data.data;

  setUser(newUser);
};

const getUserById = async (id: string | string[] | undefined) => {
  return (await http.get(`${ENDPOINT.GET_USER_BY_ID}${id}`)) as APIResponse<
    User<'Mentor'>
  >;
};

const getAllReviewsByMentorId = async (id: string) => {
  return (await http.get(`${ENDPOINT.GET_ALL_REVIEWS}${id}`)) as APIResponse<
    Review[]
  >;
};

const getMentors = async (body: {
  [key: string]: string | number | Fields[] | Offers[];
}) => {
  return (await http.post(ENDPOINT.GET_ALL_MENTOR, body)) as APIResponse<
    User<'Mentor'>[]
  >;
};

const menteePostReview = async (data: Review) => {
  return (await http.post(ENDPOINT.POST_REVIEW, data)) as APIResponse;
};

const UserService = {
  get currentUser() {
    return userSubject.value;
  },
  onUser: () => userSubject.asObservable(),
  setUser,
  updateProfile,
  getMentors,
  getUserById,
  getAllReviewsByMentorId,
};

export default UserService;
