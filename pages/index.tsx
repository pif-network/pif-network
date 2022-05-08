import { useState, useEffect } from 'react'
import Head from 'next/head'

import { UserService } from '~/services'
import { Mentor } from '~/lib/types/user'
import { getErrorMessage } from '~/lib/types/service'
import { Skeleton, Hero, Benefits, Values, Feedback } from '~/components/ui'
import { MentorCard } from '~/components/mentor'

const HomePage = () => {
  const [mentors, setMentors] = useState<Mentor[]>()

  useEffect(() => {
    const getAllMentors = async () => {
      try {
        const mentors = await UserService.getAllMentors()
        setMentors(mentors)
      } catch (error) {
        const errorMessage = getErrorMessage(error)
        console.log(errorMessage)
      }
    }

    getAllMentors()
  }, [])

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <div>
        <Hero />
        <Benefits />
        <Values />

        {/* <div className="p-8 lg:p-24">
          <div className="flex flex-wrap">
            {mentors ? (
              mentors.map(mentor => <MentorCard mentor={mentor} />)
            ) : (
              <Skeleton />
            )}
          </div>
        </div> */}

        <Feedback />
      </div>
    </>
  )
}

export default HomePage
