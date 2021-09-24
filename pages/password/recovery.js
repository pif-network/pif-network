import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Input } from 'antd';
import Button from '../../components/common/Button'
import { CheckOutlined } from '@ant-design/icons'

export default function PasswordRecovery() {
  return (
    <>
      <Head>
        <title>Password Recovery</title>
      </Head>
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
            <CheckOutlined className="text-5xl text-green-500 flex items-center justify-center"/>
            <h1 className="pt-6 pb-4 text-4xl text-center font-medium leading-12 tracking-wide">Mật khẩu của bạn đã được khôi phục!</h1>
            <div className="mt-6 flex items-center justify-center">
              <Button>Đăng Nhập</Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}
