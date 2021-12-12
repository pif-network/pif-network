import Image from 'next/image'
import { Row, Col, Input } from 'antd'
import AuthService from '../services/AuthService'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Link } from '../components/link'
import Head from 'next/head'

export default function Login() {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(128, 'Password must not exceed 128 characters'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: data => {
      setMessage('')
      setLoading(true)
      AuthService.login(data.email, data.password)
        .then(() => {
          router.push('/')
        })
        .catch(error => {
          const resMessage =
            (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
          setMessage(resMessage)
          setLoading(false)
          console.log(resMessage)
        })
    },
  })

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div className="min-h-screen/85 md:bg-lightgray bg-white px-0 md:px-16 py-0 md:py-12">
        <Row>
          <Col
            className="bg-gradient-to-b from-primary via-primary to-lightviolet hidden md:flex h-screen/75 justify-center items-center "
            xs={0}
            sm={12}
          >
            <Image priority src="/images/log-in-page.svg" className="" width={476} height={525} />
          </Col>
          <Col className="h-screen/75 bg-white flex justify-center items-start" sm={24} md={12}>
            <div className="mt-8 md:mt-8 lg:mt-24 ml-8 md:ml-10 lg:ml-32 mr-2 md:mr-8 lg:mr-36">
              <h4 className="pb-4 text-2xl lg:text-4xl font-medium tracking-wide leading-10">
                Chào mừng bạn <br /> quay trở lại!
              </h4>
              <form onSubmit={formik.handleSubmit}>
                {message && <div className="mt-4 text-red-500 flex items-center justify-center">{message}</div>}
                <Input
                  className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nhập email của bạn"
                  type="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <div className="text-red-500">{formik.errors.email ? formik.errors.email : null}</div>
                <Input.Password
                  className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nhập mật khẩu của bạn"
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <div className="text-red-500">{formik.errors.password ? formik.errors.password : null}</div>
                <div className="pt-4 flex items-center justify-between">
                  <div>
                    <input
                      type="checkbox"
                      name="remember"
                      id="remember"
                      className="mr-1 checked:bg-primary checked:border-transparent"
                    />{' '}
                    <label htmlFor="remember" className="text-sm text-grey-dark">
                      Ghi nhớ tôi
                    </label>
                  </div>
                  <Link
                    className="inline-block align-baseline font-normal text-sm hover:text-primary hover:underline"
                    href="/user/forgot-password"
                  >
                    Quên Mật khẩu?
                  </Link>
                </div>

                <div className="mt-8 flex items-center justify-center">
                  <button
                    className="py-3 px-4 md:w-28 w-full rounded bg-primary text-white hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
                    type="submit"
                  >
                    {loading ? (
                      <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      </div>
                    ) : (
                      <>Đăng Nhập</>
                    )}
                  </button>
                </div>
              </form>
              <div className="mt-4 mb-4">
                Không có tài khoản?{' '}
                <span>
                  <Link href="/user/create-account">Tạo tài khoản ngay</Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
