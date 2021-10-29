import * as React from 'react'
import * as Yup from 'yup'
import Image from 'next/image'
import Link from 'next/link'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button } from '../../../components/button'
import { authService } from '../../../services/AuthService'

const CreateAccount = () => {
  const validationSchema = Yup.object({
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

  const onSubmit = async values => {
    const { fullname, email, password } = values
    await authService.register(email, password, fullname)
  }

  return (
    <div className="flex h-screen" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: 0, bottom: 0 }}>
        <Image priority src="/images/create-new-account.svg" width={813} height={625} />
      </div>
      <div className="bg-primary h-screen rounded-xl" style={{ width: '50%' }}></div>
      <div className="bg-white h-screen flex flex-col justify-center items-center" style={{ width: '50%' }}>
        <div className="flex flex-col justify-center items-center" style={{ width: '80%' }}>
          <h1 className="text-4xl" style={{ marginBottom: '3.5rem' }}>
            Tham gia SheCodes Mentorship ngay hôm nay!
          </h1>
          <div style={{ width: '80%' }}>
            <Formik
              initialValues={{ fullname: '', email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div style={{ display: 'grid', rowGap: '2.5rem' }}>
                  <Field name="fullname" type="text" placeholder="Họ và tên" />
                  <ErrorMessage name="fullname" />
                  <Field name="email" type="email" placeholder="Nhập email của bạn" />
                  <ErrorMessage name="email" />
                  <Field name="password" type="password" placeholder="Nhập mật khẩu của bạn" />
                  <ErrorMessage name="password" />
                </div>
                <Button variant="contained" type="submit" style={{ marginTop: '2.5rem', marginBottom: '0.75rem' }}>
                  Đăng ký
                </Button>
              </Form>
            </Formik>
          </div>
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
