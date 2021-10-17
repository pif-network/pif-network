import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Row, Col, Input } from "antd";
import { authService } from "../services/AuthService";
import { useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const requestLogin = () => {
    authService
      .login(email, password)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="h-screen/85 md:bg-lightgray sm:bg-white md:px-16 md:py-12 sm:p-0">
        <Row>
          <Col
            className="bg-primary hidden md:flex h-screen/75 justify-center items-center "
            xs={0}
            sm={12}
          >
            <Image
              priority
              src="/images/log-in-page.svg"
              className=""
              width={476}
              height={525}
            />
          </Col>
          <Col
            className="bg-white flex h-screen/75 justify-center items-start"
            sm={12}
          >
            <div className="md:mt-32 sm:mt-8 w-92 mx-4">
              <h1 className="pt-1 pb-4 text-4xl font-medium tracking-wide">
                Chào mừng bạn quay trở lại!
              </h1>
              <Input
                className="mt-6 h-12 border border-primary hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nhập email của bạn"
                type="email"
                name="email"
                onChange={handleEmailChange}
                value={email}
              />
              <Input.Password
                className="mt-6 h-12 border border-primary hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                name="password"
                onChange={handlePasswordChange}
                value={password}
              />
              <div className="pt-4 flex items-center justify-between">
                <div>
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    className="mr-1 checked:bg-primary checked:border-transparent"
                  />{" "}
                  <label for="remember" className="text-sm text-grey-dark">
                    Ghi nhớ tôi
                  </label>
                </div>
                <Link href="/user/forgot-password">
                  <a className="inline-block align-baseline font-normal text-sm text-blue hover:text-blue-darker">
                    Quên Mật khẩu?
                  </a>
                </Link>
              </div>

              <div className="mt-9 flex items-center justify-center">
                <button
                  className="py-3 px-4 md:w-1/3 sm:w-full rounded bg-primary text-white hover:bg-purple focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                  onClick={requestLogin}
                >
                  Đăng Nhập
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center">
                Không có tài khoản?{" "}
                <span>
                  <Link href="/user/create-account">
                    <a className="pl-1">Tạo tài khoản ngay</a>
                  </Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
