import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Input } from 'antd';
import Button from '../../components/common/Button'
import { CheckOutlined } from '@ant-design/icons'

export default function EmailSent() {
  return (
    <>
      <Head>
        <title>Email Sent</title>
      </Head>
      <Row>
        <Col className="bg-primary flex h-screen justify-center items-center" span={12}>
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
          <div className="mt-40 w-9/12">
            <CheckOutlined className="text-5xl text-green-500 flex items-center justify-center"/>
            <h1 className="pt-6 pb-4 text-4xl font-medium leading-12 tracking-wide">
              Chúng tôi đã gửi email tới abc@gmail.com
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
        </Col>
      </Row>
    </>
  )
}
