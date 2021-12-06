import Image from 'next/image'
import homepageImg from '../public/images/mashead.svg'
import section1_1 from '../public/images/section1_1.svg'
import section1_2 from '../public/images/section1_2.svg'
import section1_3 from '../public/images/section1_3.svg'
import section1_4 from '../public/images/section1_4.svg'
import Microsoft_logo from '../public/images/Microsoft_logo.png'
import Amazon_logo from '../public/images/Amazon_logo.png'
import Google_logo from '../public/images/Google_logo.png'
import Ohmni_logo from '../public/images/Ohmni_logo.svg'
import { Button } from '../components/button/Button'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import UserService from '../services/UserService'
import TokenService from '../services/TokenService'
import { ProjectFilled, UserOutlined } from '@ant-design/icons'

function HomePage() {
  const [mentors, setMentors] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const user = TokenService.getCurrentUser()
    if (!user) {
      router.push('/')
    }

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
    <>
      <Head>
        <title>Homepage</title>
      </Head>

      <div>
        {/* [x] MastHead  */}
        <div className="p-20 bg-gradient-to-b from-purple-600 to-purple-900 " id="background">
          <div className="container mx-auto">
            <div className="flex xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row align-baseline">
              <div id="hompageText" className="flex flex-col py-5 m-5">
                <h1 className="text-white font-semibold text-4xl md:text-left sm:text-center xs:text-center">
                  SheCodes Mentorship
                </h1>
                <p className="text-white md:text-left sm:text-center xs:text-center py-5">
                  SheCodes Mentorship mang đến cho các bạn nữ cơ hội được tư vấn và hướng dẫn từ các cá nhân có nhiều
                  kiến thức, kinh nghiệm cũng như kỹ năng trong lĩnh vực công nghệ.
                </p>
                <div className="flex justify-center py-5 md:justify-start lg:justify-start">
                  <Link href="/user/create-account">
                    <a className="inline-block mr-4 bg-white border border-primary text-primary hover:bg-extralightviolet hover:text-primary focus:dimviolet text-center px-3 pt-1 py-2 rounded">
                      Tham gia ngay
                    </a>
                  </Link>
                </div>
              </div>

              <Image src={homepageImg} alt="homepageImg" width={500} />
            </div>
          </div>
        </div>
        {/* Mentors' picture  */}
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
                          {/* {mentor.exp && <p className="text-sm leading-5 mb-0 lg:mb-2">{mentor.exp[0].name}</p>} */}

                          <ul className="hidden lg:block mb-2 w-full rounded-lg">
                            {/* {mentor.exp && (
                                <li>
                                  <UserOutlined className="text-3xl text-white" />
                                  <span className="ml-2">{mentor.exp[0].position}</span>
                                </li>
                              )} */}

                            <li>
                              <ProjectFilled className="text-3xl text-white" />
                              <span className="ml-2">{mentor.domain_knowledge}</span>
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
        {/* [x] Section 2  */}
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-10 bg-purple-800 p-1 m-5"></div>
          </div>

          <div className="flex justify-center">
            <h2 className="text-2xl text-center p-5">Những lợi ích mà SheCodes Mentorship đem lại</h2>
          </div>

          <div>
            <div className="flex flex-wrap align-baseline sm:flex-wrap p-5">
              <div className="flex-col sm mx-auto flex justify-center p-5">
                <Image src={section1_1} alt="section1_1" width={150} />
                <p className="text-center break-normal">
                  Lựa chọn mentor 1-1 có trải nghiệm <br />
                  và background phù hợp với nhu cầu của bạn
                </p>
              </div>

              <div className="sm mx-auto flex-col flex justify-center p-5">
                <Image src={section1_2} alt="section1_2" width={150} />
                <p className="text-center">
                  Nhận lời khuyên về lộ trình hướng nghiệp <br />
                  cũng như các kỹ năng cần chuẩn bị...
                </p>
              </div>

              <div className="sm mx-auto flex-col flex justify-center p-5">
                <Image src={section1_3} alt="section1_3" width={150} />
                <p className="text-center">
                  Được chia sẻ về cách tự học và phát triển <br />
                  trong lĩnh vực mà bạn mong muốn
                </p>
              </div>

              <div className="sm mx-auto flex-col flex justify-center p-5">
                <Image src={section1_4} alt="section1_4" width={150} />
                <p className="text-center">
                  Liên lạc với mentor một cách linh hoạt, <br />
                  không ràng buộc về thời gian
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* [x] Section 3  */}
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-10 bg-purple-800 p-1 m-5"></div>
          </div>

          <div className="flex justify-center">
            <h2 className="text-2xl text-center p-5">
              Đội ngũ SheCodes mentors đã và đang làm việc tại các công ty nào?
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-baseline mx-auto px-20">
            <div className="flex justify-center py-5 mx-5">
              <Image src={Microsoft_logo} alt="Microsoft_logo" />
            </div>
            <div className="flex justify-center py-5 mx-5">
              <Image src={Google_logo} alt="Google_logo" />
            </div>
            <div className="flex justify-center py-5 mx-5">
              <Image src={Amazon_logo} alt="Amazon_logo" />
            </div>
            <div className="flex justify-center py-5 mx-5">
              <Image src={Ohmni_logo} alt="Ohmni_logo" />
            </div>
          </div>
        </div>
        <div className="m-10"></div>
        <div className="border"></div>
      </div>
    </>
  )
}

export default HomePage
