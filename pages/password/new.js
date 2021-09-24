import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Input } from 'antd'
import Button from '../../components/common/Button'

export default function NewPassword() {
  return (
    <>
      <Head>
        <title>New Password</title>
      </Head>
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
            <p className="font-normal text-base leading-7 max-w-6xl mx-auto">Hãy nhập mật khẩu mới cho tài khoản của bạn</p>
            <Input.Password className="mt-6 h-12 border border-primary hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Nhập mật khẩu mới" />
            <div className="mt-6 flex items-center justify-center">
              <Button>Khôi phục mật khẩu</Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}
