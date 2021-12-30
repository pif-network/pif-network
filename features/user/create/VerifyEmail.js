import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightOutlined, CheckOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import { useRouter } from 'next/router'
import AuthService from '../../../services/AuthService'

const VerifyEmail = () => {
  const { query } = useRouter()

  React.useEffect(() => {
    if (query.token) {
      AuthService.verifyEmail(query.token)
    }
  }, [query.token])

  return (
    <div className="min-h-screen/85 md:bg-lightgray bg-white px-0 md:px-16 py-0 md:py-12">
      <Row>
        <Col
          className="bg-white md:bg-primary flex h-screen justify-center items-center rounded-xl w-3/5"
          xs={24}
          sm={18}
        >
          <div className="w-2/3">
            <div className="md:flex-col-reverse text-white text-4xl flex items-center">
              <h1 className="text-black md:text-white text-center">Tài khoản của bạn đã xác thực thành công</h1>
              <CheckOutlined />
            </div>
            <div className="flex justify-center items-center text-black md:text-white mt-8">
              <Link href="/login">
                <a className="underline">Tiếp tục</a>
              </Link>
              <ArrowRightOutlined style={{ marginLeft: '6px' }} />
            </div>
          </div>
        </Col>
        <Col className="h-screen bg-white w-2/5 md:flex items-center justify-center hidden" xs={0} sm={6}>
          <div className="relative">
            <div className="flex justify-center -translate-x-1/2">
              <img src="/images/email-successfully-verified.svg" width={604} height={558} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default VerifyEmail
