import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, Input } from 'antd';
import Button from '../../components/common/Button'

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <Row>
        <Col className="bg-primary h-screen text-white" span={12}>Icon</Col>
        <Col className="bg-white flex h-screen justify-center items-start" span={12}>
          <div className="mt-40 w-96">
            <h1 className="pt-1 pb-4 text-4xl font-medium tracking-wide">Bạn quên mật khẩu?</h1>
            <p className="font-normal text-base leading-7 max-w-6xl mx-auto">Chúng tôi sẽ gửi email kèm theo hướng dẫn đặt lại mật khẩu cho bạn. </p>
            <Input className="mt-6 h-12 border border-primary hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Nhập email của bạn" />
            <div className="mt-6 flex items-center justify-center">
              <Button>Gửi email cho tôi</Button>
            </div>
            <div className="mt-4 flex items-center justify-center">
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
