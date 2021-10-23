import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Row, Col, Input } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import { authService } from '../../services/AuthService'
import { useState } from 'react'
import { Button } from '../../components/button/Button'

export default function ForgotPassword() {
  const [sent, setSent] = useState(false)
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleInputChange = event => {
    setEmail(event.target.value)
  }

  const requestResetPassword = () => {
    authService
      .forgotPassword(email)
      .then(response => {
        setSent(current => !current)
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
  }

  return (
    <>
      <div className="h-screen/85 md:bg-lightgray sm:bg-white md:px-16 md:py-12 sm:p-0">
        <Row>
          <Col
            className="bg-gradient-to-b from-primary via-primary to-lightviolet hidden md:flex h-screen/75 justify-center items-center "
            xs={0}
            sm={12}
          >
            <Image
              priority
              src="/images/forgot-password.svg"
              className=""
              width={476}
              height={525}
              alt="A drawing of a girl with red hair, in a business attire posing."
            />
          </Col>
          <Col className="bg-white flex h-screen/75 justify-center items-start" sm={12}>
            {sent ? (
              <div className="md:mt-40 sm:mt-8 w-9/12">
                <CheckOutlined className="text-5xl text-green-500 flex items-center justify-center" />
                <h1 className="pt-6 pb-4 text-4xl font-medium leading-12 tracking-wide">
                  Chúng tôi đã gửi email tới {email}
                </h1>
                <p className="pb-4 font-normal text-base leading-7 max-w-6xl mx-auto">
                  Hãy kiểm tra hộp thư rác nếu bạn không thấy email đó trong hộp thư đến.
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <Link href="/login">
                    <a>← Quay lại đăng nhập</a>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="md:mt-40 sm:mt-8 w-96 mx-4">
                <h1 className="pt-1 pb-4 text-4xl font-medium tracking-wide">Bạn quên mật khẩu?</h1>
                <p className="font-normal text-base leading-7 max-w-6xl mx-auto">
                  Chúng tôi sẽ gửi email kèm theo hướng dẫn đặt lại mật khẩu cho bạn.{' '}
                </p>
                <Input
                  className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nhập email của bạn"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={email}
                />
                <div className="mt-6 flex items-center justify-center">
                  <Button variant="contained" onClick={requestResetPassword}>
                    Gửi email cho tôi
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-center">
                  <Link href="/login">
                    <a>← Quay lại đăng nhập</a>
                  </Link>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </>
  )
}
