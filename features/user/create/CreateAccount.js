import { Input } from "antd"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

const CreateAccount = () => {
  return (
    <div className="flex h-screen" style={{ position: "relative" }}>
      <div style={{ position: "absolute", left: 0, bottom: 0 }}>
        <Image
          priority
          src="/images/create-new-account.svg"
          width={813}
          height={625}
        />
      </div>
      <div
        className="bg-primary h-screen rounded-xl"
        style={{ width: "50%" }}
      ></div>
      <div
        className="bg-white h-screen flex flex-col justify-center items-center"
        style={{ width: "50%" }}
      >
        <div
          className="flex flex-col justify-center items-center"
          style={{ width: "80%" }}
        >
          <h1 className="text-4xl" style={{ marginBottom: "3.5rem" }}>
            Tham gia SheCodes Mentorship ngay hôm nay!
          </h1>
          <div style={{ display: "grid", rowGap: "2.5rem", width: "80%" }}>
            <Input type="text" placeholder="Họ và tên" />
            <Input type="email" placeholder="Nhập email của bạn" />
            <Input type="password" placeholder="Nhập mật khẩu của bạn" />
          </div>
          <button
            className="bg-primary"
            style={{ marginTop: "2.5rem", marginBottom: "0.75rem" }}
          >
            Đăng ký
          </button>
          <p>
            Đã có tài khoản?
            <Link href="/login"> Đăng nhập</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreateAccount
