import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Input } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import AuthService from '../../services/AuthService'
import { useState } from 'react'
import Head from 'next/head'

export default function PasswordRecovery() {
  const [password, setPassword] = useState(null)
  const [recovered, setRecovered] = useState(false)
  const [message, setMessage] = useState('')

  const handleInputChange = event => {
    setPassword(event.target.value)
  }

  const requestNewPassword = () => {
    AuthService.passwordChange(password)
      .then(response => {
        setRecovered(current => !current)
      })
      .catch(error => {
        const resMessage = error.response.data.message
        setMessage(resMessage)
      })
  }

  return (
    <>
      <Head>
        <title>Password Recovered</title>
      </Head>
      <div className="h-screen/85 md:bg-lightgray sm:bg-white md:px-16 md:py-12 sm:p-0">
        {recovered ? (
          <Row>
            <Col
              className="bg-gradient-to-b from-primary via-primary to-lightviolet hidden md:flex h-screen justify-center items-center"
              xs={0}
              sm={12}
            >
              <Image
                priority
                src="/images/password-recovery-icon.png"
                className=""
                width={527}
                height={366}
                alt="A drawing of a girl with red hair, red shirt, black jean standing on a laptop. The laptop has security notification."
              />
            </Col>
            <Col className="bg-white flex h-screen justify-center items-start" sm={12}>
              <div className="md:mt-40 sm:mt-8 mx-4">
                <CheckOutlined className="text-5xl text-green-500 flex items-center justify-center" />
                <h1 className="pt-6 pb-4 text-4xl text-center font-medium leading-12 tracking-wide">
                  Mật khẩu của bạn đã được khôi phục!
                </h1>
                <div className="mt-6 flex items-center justify-center">
                  <Link href="/login">
                    <a className="px-3 pt-1 py-2 rounded bg-primary text-white hover:bg-violet hover:text-white focus:bg-violet">
                      Đăng nhập
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <Row>
            <Col className="bg-primary hidden md:flex h-screen/75 justify-center items-center" xs={0} sm={12}>
              <Image
                priority
                src="/images/new-password-icon.png"
                className=""
                width={527}
                height={366}
                alt="A drawing of a girl with red hair, blue shirt, black jean standing on a laptop. The laptop has security notification."
              />
            </Col>
            <Col className="bg-white flex h-screen/75 justify-center items-start" sm={12}>
              <div className="md:mt-40 sm:mt-8 w-96 mx-4">
                {message && <div className="mt-4 text-red-500 flex items-center justify-center">{message}</div>}
                <h1 className="pt-1 pb-4 text-4xl font-medium tracking-wide">Khôi phục mật khẩu</h1>
                <p className="font-normal text-base leading-7 max-w-6xl mx-auto">
                  Hãy nhập mật khẩu mới cho tài khoản của bạn
                </p>
                <Input.Password
                  className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nhập mật khẩu mới"
                  onChange={handleInputChange}
                  value={password}
                />
                <div className="mt-6 flex items-center justify-center">
                  <button
                    className="py-3 px-4 md:w-44 w-full rounded bg-primary text-white hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
                    onClick={requestNewPassword}
                  >
                    Khôi phục mật khẩu
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </div>
    </>
  )
}
