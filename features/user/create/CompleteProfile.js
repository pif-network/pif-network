import * as React from 'react'
import * as Yup from 'yup'
import Link from 'next/link'
import Image from 'next/image'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from '../../../components/button'
import { authService } from '../../../services/AuthService'

const CompleteProfile = () => {
  const validationSchema = Yup.object({
    birthday: Yup.string().required('Vui lòng nhập ngày sinh'),
    phone: Yup.string()
      .min(10, 'Số điện thoại bao gồm 10 ký số')
      .max(10, 'Số điện thoại bao gồm 10 ký số')
      .required('Vui lòng nhập số điện thoại'),
    school: Yup.string()
      .max(50, 'Công ty/Trường học không được dài quá 50 ký tự')
      .required('Vui lòng nhập tên trường học/công ty'),
    exp: Yup.string()
      .max(50, 'Công việc/ngành học không được dài quá 50 ký tự')
      .required('Vui lòng nhập công việc/ngành học'),
    agreed: Yup.boolean().test('checked', 'Vui lòng chọn "Đồng ý" khi hoàn tất đăng ký', (value, context) => value),
  })

  const onSubmit = async values => {
    const { agreed, ...rest } = values
    console.log('pressed')
    if (agreed) {
      await authService.updateProfile(rest)
    }
  }

  return (
    <div className="flex h-screen" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', right: '5%', top: '20%' }}>
        <Image priority src="/images/complete-your-profile.svg" width={580} height={480} />
      </div>
      <div className="bg-white flex h-screen justify-center items-center" style={{ width: '50%' }}>
        <div className="flex flex-col justify-center items-center" style={{ width: '90%' }}>
          <h1 className="text-4xl" style={{ lineHeight: '56px', marginBottom: '3rem' }}>
            Hoàn thành profile để mentor hiểu rõ hơn về bạn!
          </h1>
          <div>
            <Formik
              initialValues={{
                birthday: '',
                phone: '',
                school: '',
                exp: '',
                agreed: false,
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div style={{ display: 'grid', rowGap: '2.25rem' }}>
                  <Field name="birthday" type="date" placeholder="Ngày/tháng/năm sinh" />
                  <ErrorMessage name="birthday" />
                  <Field name="phone" type="tel" placeholder="Số điện thoại" />
                  <ErrorMessage name="phone" />
                  <Field name="school" type="text" placeholder="Công ty/trường học" />
                  <ErrorMessage name="school" />
                  <Field name="exp" type="text" placeholder="Công việc/ngành học" />
                  <ErrorMessage name="exp" />
                </div>
                <div className="flex justify-start items-center" style={{ width: '80%', margin: '1.25rem 0' }}>
                  <Field name="agreed" type="checkbox" />
                  <p style={{ marginLeft: '0.5rem' }}>
                    Tôi đã đọc và đồng ý với các &nbsp;
                    <Link href="#">điều khoản dịch vụ và chính sách bảo mật</Link>
                  </p>
                </div>
                <div style={{ marginBottom: '1.25rem' }}>
                  <ErrorMessage name="agreed" />
                </div>
                <Button variant="contained" type="submit">
                  Hoàn thành
                </Button>
              </Form>
            </Formik>
          </div>
          <div className="flex items-center" style={{ marginTop: '0.75rem' }}>
            <ArrowLeftOutlined style={{ marginRight: '6px' }} />
            <Link href="#">Quay lại trang chủ</Link>
          </div>
        </div>
      </div>
      <div className="bg-primary flex h-screen rounded-xl" style={{ width: '50%' }}></div>
    </div>
  )
}

export default CompleteProfile
