import { useRouter } from 'next/router'
// import MentorProfile from '../../features/mentors/detail/index'
import UserService from '../../services/UserService'
import TokenService from '../../services/TokenService'
import Link from 'next/link'
import { GithubFilled, LinkedinFilled, FacebookOutlined, CalendarOutlined, ProjectFilled } from '@ant-design/icons'
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Modal } from 'antd'

const MentorProfilePage = () => {
  const { query } = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const user = TokenService.getCurrentUser()

  const checkAuth = () => {
    if (user) {
      setIsModalVisible(false)
    } else {
      setIsModalVisible(true)
    }
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const initialMentorState = {
    id: null,
    avatar_url: '',
    bio: '',
    domain_knowledge: '',
    name: '',
    fb_url: '',
    github_url: '',
  }

  const [mentor, setMentor] = useState(initialMentorState)

  const getMentor = id => {
    UserService.getMentorById(id)
      .then(response => {
        setMentor(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getMentor(query.id)
  }, [query.id])

  return (
    <>
      <Head>
        <title>Mentor Profile</title>
      </Head>

      <section className="min-h-screen-85 overflow-hidden min-w-screen">
        <div className="bg-primary text-white float-none md:float-left w-full md:w-2/12 h-48 md:min-h-screen">
          <div className="relative">
            <div className="flex justify-center -translate-y-0 sm:-translate-y-1/4 md:-translate-y-0 md:translate-x-1/2">
              <img
                src={`${mentor.avatar_url}`}
                className="rounded-full mt-48 w-56 h-56 md:w-56 sm:w-46"
                alt="Mentor profile picture"
              />
            </div>{' '}
          </div>
        </div>

        <div className="float-none md:float-right w-full md:w-10/12 min-h-screen border-t border-gray-100">
          <button
            onClick={checkAuth}
            className="mt-36 md:mt-20 ml-32 md:mr-24 float-none md:float-right py-3 px-4 rounded bg-primary text-white hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
          >
            Đặt lịch hẹn
          </button>

          <Modal
            title="Thông báo"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <button
                onClick={handleCancel}
                className="bg-white border border-primary text-primary hover:bg-extralightviolet hover:text-primary focus:dimviolet text-center px-3 pt-1 py-2 rounded"
              >
                Quay trở lại
              </button>,
              <button
                onClick={handleOk}
                className="ml-4 px-3 pt-1 py-2 rounded bg-primary text-white hover:bg-violet hover:text-white focus:bg-violet"
              >
                OK
              </button>,
            ]}
          >
            <p>
              Vui lòng
              <Link href="/login">
                <a> đăng nhập </a>
              </Link>
              /
              <Link href="/user/create-account">
                <a> đăng ký </a>
              </Link>
              trước khi đặt lịch
            </p>
          </Modal>

          <div className="relative">
            <div className="md:mt-40 mt-8 w-4/5 md:ml-56 ml-8">
              <h1 className="pt-1 pb-4 text-2xl md:text-6xl md:leading-20 md:font-medium">{mentor.name}</h1>
              <h5 className="text-base md:text-2xl md:leading-8 pt-4 pb-6">{mentor.exp && mentor.exp[0].name}</h5>
              <div className="pb-4">
                <Link href={`${mentor.linkedin_url}`}>
                  <a>
                    <LinkedinFilled className="text-3xl text-primary mr-3" />
                  </a>
                </Link>
                <Link href={`${mentor.github_url}`}>
                  <a>
                    <GithubFilled className="text-3xl text-primary mr-3" />
                  </a>
                </Link>
                <Link href={`${mentor.fb_url}`}>
                  <a>
                    <FacebookOutlined className="text-3xl text-primary" />
                  </a>
                </Link>
              </div>
              <hr />
              <p className="pt-3 pb-5 text-base leading-6">{mentor.bio}</p>
              <ul className="mb-6 w-full rounded-lg">
                <li>
                  <ProjectFilled className="text-3xl text-primary" />
                  <span className="ml-2">Lĩnh vực mentor: {mentor.domain_knowledge}</span>
                </li>
                <li>
                  <CalendarOutlined className="text-3xl text-primary" />
                  <span className="ml-2">Thời gian mentor</span>
                </li>
              </ul>
              <hr />
              <h5 className="text-2xl leading-8 pt-4 pb-4">Kiến thức chuyên môn </h5>
              <div className="pb-6">
                {mentor.offers &&
                  mentor.offers.split(' ').map((offer, index) => (
                    <span
                      key={index}
                      className="text-sm font-bold inline-block py-3 px-3 rounded-2xl bg-lightgray last:mr-0 mr-2"
                    >
                      {offer}
                    </span>
                  ))}
              </div>
              <hr />
              <h5 className="text-2xl leading-8 pt-4">Sở thích </h5>
              <div className="pt-4 pb-6">
                {mentor.hobbies &&
                  mentor.hobbies.split(', ').map((hobby, index) => (
                    <span
                      key={index}
                      className="text-sm font-bold inline-block py-3 px-3 rounded-2xl bg-lightgray last:mr-0 mr-2"
                    >
                      {hobby}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MentorProfilePage
