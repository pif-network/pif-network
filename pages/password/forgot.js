import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, Input } from 'antd';
import { CheckOutlined } from '@ant-design/icons'
import Button from '../../components/common/Button'
import { authService } from '../../services';
import { useState } from 'react';

export default function ForgotPassword() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState(null);

  const handleInputChange = event => {
    setEmail(event.target.value);
  };

  const requestResetPassword = () => {
    authService.forgotPassword(email)
    .then(response => {
      setSent(current => !current);
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    });
  }

  return (
    <>
      <Head>
        <title>Forgot Password</title>
      </Head>
      <Row>
      <Col className="bg-primary flex h-screen justify-center items-center" span={12}>
        <Image
          priority
          src="/images/new-password-icon.png"
          className=""
          width={527}
          height={366}
          alt="A drawing of a girl with red hair, red shirt, black jean standing on a laptop. The laptop has security notification."
          />
      </Col>
      <Col className="bg-white flex h-screen justify-center items-start" span={12}>
          {sent ?
            <div className="mt-40 w-9/12">
              <CheckOutlined className="text-5xl text-green-500 flex items-center justify-center"/>
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
            :
            <div className="mt-40 w-96">
              <h1 className="pt-1 pb-4 text-4xl font-medium tracking-wide">Bạn quên mật khẩu?</h1>
              <p className="font-normal text-base leading-7 max-w-6xl mx-auto">Chúng tôi sẽ gửi email kèm theo hướng dẫn đặt lại mật khẩu cho bạn. </p>
              <Input
                className="mt-6 h-12 border border-primary hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nhập email của bạn"
                type="email"
                name="email"
                onChange={handleInputChange}
                value={email}
              />
              <div className="mt-6 flex items-center justify-center">
                <Button onClick={requestResetPassword}>Gửi email cho tôi</Button>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <Link href="/login">
                  <a>← Quay lại đăng nhập</a>
                </Link>
              </div>
            </div>
          }
      </Col>
      </Row>
    </>
  )
}
