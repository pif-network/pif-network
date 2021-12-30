import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import Head from 'next/head'

const ConfirmEmail = () => {
  return (
    <>
      <Head>
        <title>Confirm Email</title>
      </Head>
      <div className="min-h-screen/85 md:bg-lightgray bg-white px-0 md:px-16 py-0 md:py-12">
        <Row>
          <Col
            className="bg-white md:bg-primary flex h-screen-85 justify-center items-center rounded-xl w-3/5"
            xs={24}
            sm={18}
          >
            <div className="w-2/3">
              <h1 className="text-black md:text-white text-4xl mb-6">Xác nhận email của bạn</h1>
              <p className="text-black md:text-white text-xl mb-3">
                Vui lòng kiểm tra email và làm theo hướng dẫn để xác thực tài khoản.
              </p>
              <p className="text-black md:text-white">
                Nếu không nhận được email, hãy kiểm tra hòm thư rác hoặc spam
                {/* nhấn vào
                <Link href="#"> gửi lại</Link> */}
              </p>
              <div className="flex justify-center items-center text-black md:text-white mt-10 mb-4">
                <ArrowLeftOutlined style={{ marginRight: '6px' }} />
                <Link href="/user/create-account">Quay lại đăng ký</Link>
              </div>
            </div>
          </Col>
          <Col className="bg-white h-screen justify-center hidden md:flex" xs={0} sm={6}>
            <div className="relative">
              <div className="flex justify-center translate-y-1/2 -translate-x-1/2">
                <Image priority src="/images/check-your-mail.svg" width={564} height={621} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ConfirmEmail
