import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'

const VerifyEmail = () => {
  const [verified, setVerified] = React.useState(true)

  return (
    <div className="min-h-screen/85 md:bg-lightgray bg-white px-0 md:px-16 py-0 md:py-12">
      <Row>
        {verified ? (
          <>
            <Col
              className="md:bg-white bg-primary flex h-screen justify-center items-center rounded-xl w-3/5"
              sm={24}
              md={12}
            >
              <div className="w-2/3">
                <div className="md:flex-col-reverse text-white text-4xl flex items-center">
                  <h1 className="md:text-black text-white text-center">Tài khoản của bạn đã xác thực thành công</h1>
                  <CheckOutlined className="text-green" />
                </div>
                <div className="flex justify-center items-center text-white" style={{ marginTop: '1.75rem' }}>
                  <Link href="/user/complete-profile">Tiếp tục</Link>
                  <ArrowRightOutlined style={{ marginLeft: '6px' }} />
                </div>
              </div>
            </Col>
            <Col className="h-screen bg-white w-2/5 flex items-center justify-center hidden" xs={0} sm={12}>
              <Image priority src="/images/email-successfully-verified.svg" width={604} height={558} />
            </Col>
          </>
        ) : (
          <>
            <Col
              className="md:bg-white bg-primary flex h-screen justify-center items-center rounded-xl w-3/5"
              sm={24}
              md={12}
            >
              <div className="w-2/3">
                <h1 className="md:text-black text-white text-4xl" style={{ marginBottom: '1.5rem' }}>
                  Xác nhận email của bạn
                </h1>
                <p className="md:text-black text-white text-xl" style={{ marginBottom: '0.75rem' }}>
                  Vui lòng kiểm tra email và làm theo hướng dẫn để xác thực tài khoản.
                </p>
                <p className="md:text-black text-white">
                  Nếu không nhận được email, nhấn vào
                  <Link href="#"> gửi lại</Link>
                </p>
                <div className="flex justify-center items-center text-white" style={{ marginTop: '40px' }}>
                  <ArrowLeftOutlined style={{ marginRight: '6px' }} />
                  <Link href="#">Quay lại đăng ký</Link>
                </div>h
              </div>
            </Col>
            <Col className="bg-white flex h-screen justify-center hidden" xs={0} sm={12}>
              <Image priority src="/images/check-your-mail.svg" width={564} height={621} />
            </Col>
          </>
        )}
      </Row>
    </div>
  )
}

export default VerifyEmail
