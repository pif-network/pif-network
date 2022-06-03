export interface Mentor {
  id: number
  name: string
  bio: string
  domainKnowledge: string
  avatarUrl: string
  fbUrl: string
  githubUrl: string
  linkedinUrl: string
  bookingUrl: string
  exp: {
    name: string
    position: string
    startDate?: string
    endDate?: string
  }[]
}

export interface Mentee {
  id: number
  name: string
  email: string
  memberSince: string
  hasConfirmedEmail: boolean
  avatarUrl: string
  isActive: boolean

  dateOfBirth: string
  phone: string
  school: {
    name: string
    major: string
  }[]
  exp: {
    name: string
    position: string
  }[]
}

// export type User = Mentor | Mentee
export type User = Mentee
