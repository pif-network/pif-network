import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined } from '@ant-design/icons'

const VerifyEmail = () => {
  const [verified, setVerified] = React.useState(true)

  return verified ? (
    <div className="flex h-screen" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', right: 0, top: '10%' }}>
        <Image priority src="/images/email-successfully-verified.svg" width={604} height={558} />
      </div>
      <div className="bg-primary flex h-screen justify-center items-center rounded-xl" style={{ width: '60%' }}>
        <div style={{ width: '70%' }}>
          <div className="text-white text-4xl flex items-center">
            <h1 className="text-white text-center">Tài khoản của bạn đã xác thực thành công</h1>
            <CheckOutlined />
          </div>
          <div className="flex justify-center items-center text-white" style={{ marginTop: '1.75rem' }}>
            <Link href="/user/complete-profile">Tiếp tục</Link>
            <ArrowRightOutlined style={{ marginLeft: '6px' }} />
          </div>
        </div>
      </div>
      <div className="bg-white h-screen" style={{ width: '40%' }}></div>
    </div>
  ) : (
    <div className="flex h-screen" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', right: 0, bottom: 0 }}>
        <Image priority src="/images/check-your-mail.svg" width={564} height={621} />
      </div>
      <div className="bg-primary flex h-screen justify-center items-center rounded-xl" style={{ width: '60%' }}>
        <div style={{ width: '60%' }}>
          <h1 className="text-white text-4xl" style={{ marginBottom: '1.5rem' }}>
            Xác nhận email của bạn
          </h1>
          <p className="text-white text-xl" style={{ marginBottom: '0.75rem' }}>
            Vui lòng kiểm tra email và làm theo hướng dẫn để xác thực tài khoản.
          </p>
          <p className="text-white">
            Nếu không nhận được email, nhấn vào
            <Link href="#"> gửi lại</Link>
          </p>
          <div className="flex justify-center items-center text-white" style={{ marginTop: '40px' }}>
            <ArrowLeftOutlined style={{ marginRight: '6px' }} />
            <Link href="#">Quay lại đăng ký</Link>
          </div>
        </div>
      </div>
      <div className="bg-white flex h-screen justify-center" span={8}></div>
    </div>
  )
}

export default VerifyEmail
