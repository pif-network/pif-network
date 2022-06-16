import { useState, useEffect, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

import { UserService } from '~/services'
import { Mentor } from '~/lib/types/user'
import { getErrorMessage } from '~/lib/types/service'

import { PopupWidget } from 'react-calendly'
import {
  GithubFilled,
  LinkedinFilled,
  FacebookOutlined,
  ProjectFilled,
} from '@ant-design/icons'
import { Modal } from 'antd'

interface Calendly {
  shouldCalendlyWidgetOpen: boolean
  url: string
}

const MentorProfilePage = () => {
  const [toggleAuthRequestModal, setToggleAuthRequestModal] = useState(false)
  const [calendlyProps, setCalendlyProps] = useState<Calendly>({
    shouldCalendlyWidgetOpen: false,
    url: '',
  })
  const [mentor, setMentor] = useState<Mentor>({
    id: 0,
    name: '',
    bio: '',
    exp: [],
    domainKnowledge: '',
    avatarUrl: '',
    fbUrl: '',
    githubUrl: '',
    linkedinUrl: '',
    bookingUrl: '',
  })
  const { query, isReady, push } = useRouter()

  const getCurrentMentor = async (
    id: string | string[] | undefined,
  ): Promise<void> => {
    try {
      const getMentorResponse = await UserService.getMentorById(id)
      const mentor = getMentorResponse.data

      setMentor(mentor)
    } catch (error) {
      const errorMessage = getErrorMessage(error)

      console.log(errorMessage)
    }
  }

  const handleOnBooking = async (event: MouseEvent<HTMLElement>) => {
    const currentUser = await UserService.currentUser
    const url = mentor.bookingUrl

    if (!currentUser) {
      setToggleAuthRequestModal(true)
    } else {
      setToggleAuthRequestModal(false)
      setCalendlyProps(p => {
        return {
          ...p,
          shouldCalendlyWidgetOpen: true,
          url,
        }
      })
    }
  }

  const handleRequestAuthModalOnOk = () => {
    setToggleAuthRequestModal(false)
  }

  const handleRequestAuthModalOnCancel = () => {
    setToggleAuthRequestModal(false)
  }

  useEffect(() => {
    if (!isReady) return

    getCurrentMentor(query.id)
  }, [isReady, query.id])

  return (
    <>
      <Head>
        <title>Mentor Profile</title>
      </Head>

      <section className="min-h-screen overflow-hidden min-w-screen">
        <div className="bg-primary text-white float-none md:float-left w-full md:w-2/12 h-48 md:h-270">
          <div className="relative">
            <div className="flex justify-center -translate-y-0 sm:-translate-y-1/4 md:-translate-y-0 md:translate-x-1/2">
              <img
                src={`${mentor.avatarUrl}`}
                className="rounded-full mt-48 w-56 h-56 md:w-56 sm:w-46"
                alt="Mentor profile picture"
              />
            </div>{' '}
          </div>
        </div>

        <div className="float-none md:float-right w-full md:w-10/12 min-h-screen border-t border-gray-100">
          <button
            onClick={handleOnBooking}
            className="mt-36 md:mt-20 ml-32 md:mr-24 float-none md:float-right py-3 px-4 rounded bg-primary text-white hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
          >
            Đặt lịch hẹn
          </button>

          {/* 
              Modal to request authentication if !user
          */}
          <Modal
            title="Thông báo"
            visible={toggleAuthRequestModal}
            onOk={handleRequestAuthModalOnOk}
            onCancel={handleRequestAuthModalOnCancel}
            footer={[
              <button
                onClick={() => push('/login')}
                className="bg-white border border-primary text-primary hover:bg-extralightviolet hover:text-primary focus:dimviolet text-center px-3 pt-1 py-2 rounded"
              >
                Đăng ký
              </button>,
              <button
                onClick={() => push('/user/create-account')}
                className="ml-4 px-3 pt-1 py-2 rounded bg-primary text-white hover:bg-violet hover:text-white focus:bg-violet"
              >
                Đăng nhập
              </button>,
            ]}
          >
            <p>Vui lòng đăng nhập trước khi đặt lịch</p>
          </Modal>

          {/* 
              Calendly widget
          */}
          {calendlyProps.shouldCalendlyWidgetOpen && (
            <PopupWidget
              // rootElement={document.getElementById('root')!}
              text=""
              url={calendlyProps.url}
            />
          )}

          <div className="relative">
            <div className="md:mt-40 mt-8 w-4/5 md:ml-56 ml-8">
              <h1 className="pt-1 pb-4 text-2xl md:text-6xl md:leading-20 md:font-medium">
                {mentor.name}
              </h1>
              <h5 className="text-base md:text-2xl md:leading-8 pt-4 pb-6">
                {mentor.exp[0]?.name}
              </h5>
              <div className="pb-4">
                {mentor.linkedinUrl && (
                  <Link href={`${mentor.linkedinUrl}`}>
                    <a>
                      <LinkedinFilled className="text-3xl text-primary mr-3" />
                    </a>
                  </Link>
                )}
                {mentor.githubUrl && (
                  <Link href={`${mentor.githubUrl}`}>
                    <a>
                      <GithubFilled className="text-3xl text-primary mr-3" />
                    </a>
                  </Link>
                )}
                {mentor.fbUrl && (
                  <Link href={`${mentor.fbUrl}`}>
                    <a>
                      <FacebookOutlined className="text-3xl text-primary" />
                    </a>
                  </Link>
                )}
              </div>
              <hr />
              <ul className="pt-4 mb-6 w-full rounded-lg">
                <li>
                  <ProjectFilled className="text-3xl text-primary" />
                  <span className="ml-2">
                    Lĩnh vực mentor: {mentor.domainKnowledge}
                  </span>
                </li>
              </ul>
              <hr />
              {/* <h5 className="text-2xl leading-8 pt-4 pb-4">
                Kiến thức chuyên môn{' '}
              </h5> */}
              {/* <div className="pb-6">{mentor.offers}</div> */}
              {/* <hr /> */}
              {/* <h5 className="text-2xl leading-8 pt-4">Sở thích </h5> */}
              {/* <div className="pt-4 pb-6">
                {mentor.hobbies &&
                  mentor.hobbies.split(', ').map((hobby, index) => (
                    <span
                      key={index}
                      className="text-sm font-bold inline-block py-3 px-3 rounded-2xl bg-lightgray last:mr-0 mr-2"
                    >
                      {hobby}
                    </span>
                  ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MentorProfilePage
