import * as React from 'react'
import MentorProfile from '../../features/mentors/detail/index'
import UserService from '../../services/UserService'

const MentorProfilePage = props => {
  const mentor = JSON.parse(props.mentor)
  return <>{mentor && MentorProfile(mentor)}</>
}

export async function getServerSideProps(context) {
  const mentor = await UserService.getMentorById(context.query.id)

  return {
    props: { mentor },
  }
}

export default MentorProfilePage
