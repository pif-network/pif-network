import React, { useState, useEffect } from 'react'
import { ProjectFilled, UserOutlined } from '@ant-design/icons'
import Link from 'next/link'
import UserService from '../../services/UserService'

const MentorList = () => {
  const [mentors, setMentors] = useState(null)

  useEffect(() => {
    UserService.getAllMentors().then(
      response => {
        setMentors(response.data)
      },
      error => {
        const message = (error.response && error.response.data) || error.message || error.toString()
        console.log(message)
      },
    )
  }, [])

  return (
    <div className="min-h-screen-85 overflow-hidden flex">
      <div className="overflow-hidden w-screen my-3 bg-white">
        <div className="bg-primary h-108 w-screen text-white text-center pt-16 px-20 lg:px-32">
          <h3 className="text-2xl lg:text-5xl text-white leading-8 lg:leading-16 font-normal">
            Tìm một người mentor tin tưởng và đồng cảm với bạn cùng SheCodes Vietnam
          </h3>
          <p className="pt-6 text-white font-normal text-sm lg:text-2xl	leading-4 lg:leading-10">
            Là mentee tại SheCodes Vietnam, bạn có thể kết nối và học hỏi từ các mentor có nhiều kinh nghiệm trong việc
            học tập và phát triển nghề nghiệp ở lĩnh vực công nghệ
          </p>
        </div>
        <div className="p-8 lg:p-24">
          <div className="flex flex-wrap">
            {mentors &&
              mentors.map(mentor => (
                <Link href={`mentors/${mentor.id}`}>
                  <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2 lg:p-8">
                    <a href="" className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                      <div className="relative pt-0 lg:pt-40 pb-40 lg:pb-84 overflow-hidden">
                        <img
                          className="absolute inset-0 h-full w-full object-cover"
                          src={`${mentor.avatar_url}`}
                          alt=""
                        />
                        <div className="opacity-0 hover:opacity-100 duration-500 absolute text-white inset-4 z-10 flex flex-col justify-end">
                          <h5 className="mb-0 lg:mb-2 text-white font-medium text-base lg:text-xl leading-6">
                            {mentor.name}
                          </h5>
                          <p className="text-sm leading-5 mb-0 lg:mb-2">Nơi làm việc</p>
                          <ul className="hidden lg:block mb-2 w-full rounded-lg">
                            <li>
                              <UserOutlined className="text-3xl text-white" />
                              <span className="ml-2">Chức vụ</span>
                            </li>
                            <li>
                              <ProjectFilled className="text-3xl text-white" />
                              <span className="ml-2">{mentor.offers}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </a>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="">
          <div className="flex justify-center mx-2 mb-4">
            <h2 className="text-xl lg:text-4xl text-center font-normal leading-5 lg:leading-10">
              Đội ngũ SheCodes mentors đã và đang làm việc tại các công ty nào?
            </h2>
          </div>
          <div className="flex flex-wrap px-12 lg:px-108">
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2 lg:p-8">
              <img src="/images/Microsoft_logo.png" alt="Microsoft Logo" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2 lg:p-8">
              <img src="/images/Amazon_logo.png" alt="Amazon Logo" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2 lg:p-8">
              <img src="/images/Google_logo.png" alt="Google Logo" />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2 lg:p-8">
              <img src="/images/Ohmni_logo.svg" alt="Ohmni Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorList
