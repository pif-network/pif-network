import { Input } from "antd"
import { ArrowLeftOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"
import * as React from "react"

const CompleteProfile = () => {
  return (
    <div className="flex h-screen" style={{ position: "relative" }}>
      <div style={{ position: "absolute", right: "5%", top: "20%" }}>
        <Image
          priority
          src="/images/complete-your-profile.svg"
          width={580}
          height={480}
        />
      </div>
      <div
        className="bg-white flex h-screen justify-center items-center"
        style={{ width: "50%" }}
      >
        <div
          className="flex flex-col justify-center items-center"
          style={{ width: "90%" }}
        >
          <h1
            className="text-4xl"
            style={{ lineHeight: "56px", marginBottom: "3rem" }}
          >
            Hoàn thành profile để mentor hiểu rõ hơn về bạn!
          </h1>
          <div style={{ display: "grid", rowGap: "2.25rem", width: "80%" }}>
            <Input type="date" placeholder="Ngày/tháng/năm sinh" />
            <Input type="tel" placeholder="Số điện thoại" />
            <Input type="text" placeholder="Công ty/trường học" />
            <Input type="text" placeholder="Công việc/ngành học" />
          </div>
          <div
            className="flex justify-start items-center"
            style={{ width: "80%", margin: "1.25rem 0" }}
          >
            <Input type="checkbox" style={{ width: "5%" }} />
            <p>
              Tôi đã đọc và đồng ý với các
              <Link href="#"> điều khoản dịch vụ và chính sách bảo mật</Link>
            </p>
          </div>
          <button className="bg-primary">Hoàn thành</button>
          <div className="flex items-center" style={{ marginTop: "0.75rem" }}>
            <ArrowLeftOutlined style={{ marginRight: "6px" }} />
            <Link href="#">Quay lại trang chủ</Link>
          </div>
        </div>
      </div>
      <div
        className="bg-primary flex h-screen rounded-xl"
        style={{ width: "50%" }}
      ></div>
    </div>
  )
}

export default CompleteProfile
