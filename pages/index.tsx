import { useState, useEffect } from 'react'
import Head from 'next/head'

import { UserService } from '~/services'
import { Mentor } from '~/lib/types/user'
import { getErrorMessage } from '~/lib/types/service'
import { Skeleton, Hero, Benefits, Values, Feedback, Button } from '~/components/ui'
import { MentorCard } from '~/components/mentor'
import { FlagLine } from '~/components/ui/svgs/Icons'

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

        {/* <Button small={true} variant="neutral" type="filled">
          <span>Button</span>
        </Button>

        <Button small={true} variant="neutral" type="outlined">
          <span>Button</span>
        </Button>

        <Button small={true} variant="neutral" type="filled">
          <div className='inline-flex'>
            <div>
              Button 
            </div>
            <div>
              <FlagLine colour='white'></FlagLine>
            </div>
          </div>
        </Button>
        
        <Button small={true} variant="neutral" type="outlined">
          <div className='inline-flex'>
            <div>
              Button 
            </div>
            <div>
              <FlagLine colour='black'></FlagLine>
            </div>
          </div>
        </Button>

        <Button small={false} variant="neutral" type="filled">
          <span>Button</span>
        </Button>

        <Button small={false} variant="neutral" type="filled">
          <span>Button &#10095;</span>
        </Button>

        <Button small={false} variant="neutral" type="outlined">
          <span>Button</span>
        </Button>

        <Button small={false} variant="neutral" type="outlined">
          <div className='inline-flex'>
            <div>
              Button 
            </div>
            <div>
              <FlagLine colour='black'></FlagLine>
            </div>
          </div>
        </Button>

        <Button small={false} variant="primary" type="outlined">
          <span>Button</span>
        </Button> */}
  
        
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
