import { useState } from 'react'
import * as Yup from 'yup'
import Image from 'next/image'
import { Row, Col, Input } from 'antd'
import { useFormik } from 'formik'
import AuthService from '../../../services/AuthService'
import { useRouter } from 'next/router'
import { Link } from '../../../components/link'

const CreateAccount = () => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const validationSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, 'Tên không được ngắn hơn 2 ký tự')
      .max(40, 'Tên không được dài quá 40 ký tự')
      .required('Vui lòng nhập tên của bạn'),
    email: Yup.string()
      .min(6, 'Email không được ngắn hơn 6 ký tự')
      .max(50, 'Email không được dài quá 50 ký tự')
      .email('Địa chỉ email không hợp lệ')
      .required('Vui lòng nhập địa chỉ email'),
    password: Yup.string()
      .min(6, 'Password không được ngắn hơn 6 ký tự')
      .max(128, 'Password không được dài quá 128 ký tự')
      .matches()
      .required('Vui lòng nhập mật khẩu'),
  })

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: data => {
      setMessage('')
      setLoading(true)
      AuthService.register(data.email, data.password, data.fullname)
        .then(() => {
          router.push('/login')
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
    <div className="min-h-screen/85 md:bg-lightgray bg-white px-0 md:px-16 py-0 md:py-12">
      <Row>
        <Col
          className="bg-gradient-to-b from-primary via-primary to-lightviolet hidden md:flex h-screen/75 justify-center items-center"
          xs={0}
          sm={12}
        >
          <Image priority src="/images/create-new-account.svg" width={813} height={625} />
        </Col>
        <Col className="h-screen/75 bg-white flex justify-center items-start" sm={24} md={12}>
          <div className="mt-8 md:mt-8 lg:mt-24 ml-8 md:ml-10 lg:ml-32 mr-2 md:mr-8 lg:mr-36">
            <h4 className="pb-4 text-2xl lg:text-4xl font-medium tracking-wide leading-10">
              Tham gia SheCodes Mentorship ngay hôm nay!
            </h4>
            <form onSubmit={formik.handleSubmit}>
              {message && <div className="mt-4 text-red-500 flex items-center justify-center">{message}</div>}
              <Input
                className="mt-6 h-12 border border-primary hover:border-violet-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Nhập họ và tên của bạn"
                type="fullname"
                name="fullname"
                onChange={formik.handleChange}
                value={formik.values.fullname}
              />
              <div className="text-red-500">{formik.errors.fullname ? formik.errors.fullname : null}</div>
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
                    <>Đăng ký</>
                  )}
                </button>
              </div>
            </form>
            <div className="mt-4 mb-4 text-center">
              Đã có tài khoản?{' '}
              <span>
                <Link href="/login"> Đăng nhập</Link>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default CreateAccount
