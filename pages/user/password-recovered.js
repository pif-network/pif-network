import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Row, Col, Input } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import { authService } from '../../services/AuthService'
import { useState } from 'react'

export default function PasswordRecovery() {
  const [password, setPassword] = useState(null)
  const [recovered, setRecovered] = useState(false)
  const router = useRouter()

  const handleInputChange = event => {
    setPassword(event.target.value)
  }

  const requestNewPassword = () => {
    // TODO: Contact with BE to proceed next step
    // authService.passwordChange(password)
    // .then(response => {
    //   setRecovered(current => !current);
    //   console.log(response);
    // })
    // .catch(e => {
    //   console.log(e);
    // });
    setRecovered(current => !current)
  }

  return (
    <>
      <Head>
        <title>Password Recovery</title>
      </Head>
      {recovered ? (
        <Row>
          <Col className="bg-secondary flex h-screen justify-center items-center" span={12}>
            <Image
              priority
              src="/images/password-recovery-icon.png"
              className=""
              width={527}
              height={366}
              alt="A drawing of a girl with red hair, red shirt, black jean standing on a laptop. The laptop has security notification."
            />
          </Col>
          <Col className="bg-white flex h-screen justify-center items-start" span={12}>
            <div className="mt-40">
              <CheckOutlined className="text-5xl text-green-500 flex items-center justify-center" />
              <h1 className="pt-6 pb-4 text-4xl text-center font-medium leading-12 tracking-wide">
                Mật khẩu của bạn đã được khôi phục!
              </h1>
              <div className="mt-6 flex items-center justify-center">
                <button>Đăng Nhập</button>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="bg-primary flex h-screen justify-center items-center" span={12}>
            <Image
              priority
              src="/images/new-password-icon.png"
              className=""
              width={527}
              height={366}
              alt="A drawing of a girl with red hair, blue shirt, black jean standing on a laptop. The laptop has security notification."
            />
          </Col>
          <Col className="bg-white flex h-screen justify-center items-start" span={12}>
            <div className="mt-40 w-96">
              <h1 className="pt-1 pb-4 text-4xl font-medium tracking-wide">Khôi phục mật khẩu</h1>
              <p className="font-normal text-base leading-7 max-w-6xl mx-auto">
                Hãy nhập mật khẩu mới cho tài khoản của bạn
              </p>
              <Input.Password
                className="mt-6 h-12 border border-primary hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nhập mật khẩu mới"
                onChange={handleInputChange}
                value={password}
              />
              <div className="mt-6 flex items-center justify-center">
                <button onClick={requestNewPassword}>Khôi phục mật khẩu</button>
              </div>
            </div>
          </Col>
        </Row>
      )}
    </>
  )
}
