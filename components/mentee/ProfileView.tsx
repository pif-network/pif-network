import Head from 'next/head'
import Link from 'next/link'

import { Mentee } from '~/lib/types/user'

import { Row, Col } from 'antd'
import {
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons'

const MenteeProfileView = ({ currentUser }: { currentUser: Mentee | null }) => {
  return (
    <>
      <Head>
        <title>My Profle</title>
      </Head>

      <div className="min-h-screen-85 overflow-hidden flex">
        <div className="overflow-hidden w-screen my-3 bg-white">
          <div className="bg-primary md:h-48 sm:h-40 w-screen">
            {currentUser?.avatarUrl ? (
              <div className="ml-4 md:ml-24 translate-y-2/3 md:translate-y-1/3 ">
                <img
                  src={`${currentUser?.avatarUrl}`}
                  className="rounded-full w-32 h-32 md:w-56 md:h-56"
                  alt="My profile picture"
                />
              </div>
            ) : (
              <div className="ml-4 md:ml-24 translate-y-2/3 md:translate-y-1/3 ">
                <img
                  src="/images/sample_profile.png"
                  className="rounded-full w-32 h-32 md:w-56 md:h-56"
                  alt="My profile picture"
                />
              </div>
            )}
          </div>
          <div className="ml-4 md:ml-92 mb-7 md:mb-16 mt-12 md:mt-0 pt-2">
            <h3 className="text-4xl font-bold leading-14">
              {currentUser?.name}
            </h3>
            <h6 className="text-xl font-semibold text-primary leading-7">
              {currentUser?.school[0]?.name}
            </h6>
          </div>
          <Row className="border-t border-gray-200 py-3">
            <Col sm={0} md={8} className="hidden md:block">
              <div className="pl-24">
                <div className="bg-secondary w-9/12 lg:w-1/2 rounded-lg pl-3 pb-2 mb-4">
                  <h6 className="text-white text-xl font-medium leading-7">
                    Thông tin cá nhân
                  </h6>
                </div>
                <Link href="/">
                  <a>
                    <div className="mt-1 flex items-center">
                      <ArrowLeftOutlined className="text-base w-8 h-8 bg-lightgray rounded-full" />
                      <span className="ml-4 text-xl font-semibold leading-7">
                        Quay lại trang chủ
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            </Col>
            <Col className="border-l border-gray-200" sm={24} md={10}>
              <div className="pl-6">
                <div className="mb-10">
                  <h6 className="mb-2 text-xl font-semibold leading-7">
                    Tổng quan về bạn
                  </h6>
                  <ul className="w-full rounded-lg">
                    {currentUser?.dateOfBirth && (
                      <li className="flex items-center">
                        <CalendarOutlined className="text-base text-primary w-8 h-8 bg-lightgray rounded-full" />
                        <span className="ml-4 text-base leading-5">
                          {currentUser.dateOfBirth}
                        </span>
                      </li>
                    )}
                    {currentUser?.email && (
                      <li className="mt-1 flex items-center">
                        <MailOutlined className="text-base text-primary w-8 h-8 bg-lightgray rounded-full" />
                        <span className="ml-4 text-base leading-5">
                          {currentUser.email}
                        </span>
                      </li>
                    )}
                    {currentUser?.phone && (
                      <li className="mt-1 flex items-center">
                        <PhoneOutlined className="text-base text-primary w-8 h-8 bg-lightgray rounded-full" />
                        <span className="ml-4 text-base leading-5">
                          {currentUser.phone}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
                <hr />
                <div className="mt-3 mb-7">
                  <h6 className="mb-2 text-xl font-semibold leading-7">
                    Nơi học tập
                  </h6>
                  <ul className="list-disc list-outside ml-6">
                    {currentUser?.school &&
                      currentUser.school.map((school, index) => (
                        <li key={index} className="text-primary">
                          <span className="text-black font-semibold text-base leading-5">
                            {school.name}
                          </span>
                          <br />
                          <p className="text-black font-normal text-base leading-5">
                            {school.major}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
                <hr />
                <div className="mt-3 mb-16">
                  <h6 className="mb-2 text-xl font-semibold leading-7">
                    Nơi làm việc
                  </h6>
                  <ul className="list-disc list-outside ml-6">
                    {currentUser?.exp &&
                      currentUser.exp.map((exp, index) => (
                        <li key={index} className="text-primary">
                          <span className="text-black font-semibold text-base leading-5">
                            {exp.name}
                          </span>
                          <br />
                          <p className="text-black font-normal text-base leading-5">
                            {exp.position}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default MenteeProfileView
