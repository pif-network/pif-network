import { FIELD_METADATA, OFFER_METADATA, USER_ROLE } from '~/shared/constant';
import type { valueof } from '../';

export type UserRole = valueof<typeof USER_ROLE>;

export type Fields = keyof typeof FIELD_METADATA;
export type Offers = keyof typeof OFFER_METADATA;

interface BaseUser<R extends UserRole> {
  id: string;
  registeringMethod: string;
  email: string;
  password: string;
  name: string;
  gender: string;
  readonly role: R;
  schoolName: string;
  major: string;
  title: string;
  workplace: string;
  location: string;
  description: string;
  linkedin: string;
  github: string;
  avatarUrl: string;
  isActive: boolean;
  hasConfirmedEmail: boolean;
  createdAt: string;
  updatedAt: string;
}

interface BaseMentee extends BaseUser<'Mentee'> {}
interface BaseMentor extends BaseUser<'Mentor'> {
  userId: string;
  bookingUrl: string;
  fields: Fields[];
  offers: Offers[];
}

export type User<R extends UserRole> = R extends 'Mentor'
  ? BaseMentor
  : BaseMentee;

/** to satisfy tsc */
export interface Mentee {
  [key: string]: any;
}
export interface Mentor {
  [key: string]: any;
}
