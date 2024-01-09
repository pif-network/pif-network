import {
  FIELD_METADATA,
  GENDER_OPTION,
  OFFER_METADATA,
  USER_ROLE,
} from '~/shared/constant';
import type { valueof } from '../';

import { z } from 'zod';

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

export const userSchema = z.object({
  role: z.enum([USER_ROLE.MENTEE, USER_ROLE.MENTOR]),
  name: z.string().min(2).max(50),
  gender: z.enum([GENDER_OPTION.MALE.value, GENDER_OPTION.FEMALE.value]),
  description: z.string().min(2).max(500),
  schoolName: z.string().min(2).max(50),
  major: z.string().min(2).max(50),
  title: z.string().min(2).max(50),
  workplace: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  githubUrl: z.string().min(2).max(50),
  linkedinUrl: z.string().min(2).max(50),
  fields: z.array(z.string()),
  offers: z.array(z.string()),
  bookingUrl: z.string().min(2).max(50),
});
