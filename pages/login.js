import Image from 'next/image'
import { Row, Col, Input } from 'antd'
import AuthService from '../services/AuthService'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { Link } from '../components/link'
import Head from 'next/head'
import TokenService from '../services/TokenService'

export default function Login() {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Hãy nhập Email').email('Email không hợp lệ'),
    password: Yup.string()
      .required('Hãy nhập mật khẩu')
      .min(6, 'Mật khẩu phải có ít nhất 6 kí tự')
      .max(128, 'Mật khẩu không được vượt quá 128 kí tự'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setMessage('')
        setLoading(true)
        await AuthService.login(values.email, values.password)
          .then(() => {
            const user = TokenService.getCurrentUser()
            if (user && user.date_of_birth) {
              router.push('/')
            } else {
              router.push('/user/complete-profile')
            }
          })
          .catch(error => {
            setSubmitting(false)
            setLoading(false)
            const resMessage = error.response.data.message
            switch (resMessage) {
              case "Mentee's not found":
                setMessage('Email không tồn tại')
                setErrors({ email: 'Email không tồn tại' })
              case "Mentee has's not confirm their email.":
                setMessage('Hãy xác nhận email để đăng nhập')
                setErrors({ email: 'Hãy xác nhận email để đăng nhập' })
              case 'Wrong password.':
                setMessage('Mật khẩu không đúng')
                setError({ password: 'Mật khẩu không đúng' })
              default:
                setMessage(resMessage)
                setErrors({ email: resMessage })
            }
          })
      } catch (e) {
        throw e
      }
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
