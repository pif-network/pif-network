export type UserRole = 'Mentor' | 'Mentee';

interface BaseMentee {}
interface BaseMentor {
  scopes: string[];
  fields: string[];
  offers: string[];
}

interface BaseUser<R extends UserRole> {
  id: number;
  userId: number;
  avatar?: string;
  /** to satisfy tsc */
  avatarUrl?: string;
  name: string;
  birthday?: Date;
  email: string;
  phone?: string;
  description?: string;
  school?: string;
  location: string;
  github?: string;
  linkedin?: string;
  bookingUrl: string;
  exp?: {
    title: string;
    workspace: string;
  };
  isActive?: boolean;
  isConfirmed?: boolean;
  method?: string;
  readonly role: R;
  memberSince: Date;
  updatedAt: Date;
  createdAt: Date;
}

export type User<R extends UserRole> = R extends 'Mentor'
  ? BaseUser<'Mentor'> & BaseMentor
  : BaseUser<'Mentee'> & BaseMentee;

/** to satisfy tsc */
export interface Mentee {
  [key: string]: any;
}
export interface Mentor {
  [key: string]: any;
}
