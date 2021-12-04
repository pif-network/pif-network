import * as React from 'react'
import * as Yup from 'yup'
import Link from 'next/link'
import Image from 'next/image'
import { FieldArray, FormikProvider, useFormik } from 'formik'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from '../../../components/button'
import UserService from '../../../services/UserService'
import { Col, Input, Row } from 'antd'
import { useRouter } from 'next/router'

const CompleteProfile = () => {
  const router = useRouter()
  const [message, setMessage] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const validationSchema = Yup.object().shape({
    date_of_birth: Yup.string().required('Vui lòng nhập ngày sinh'),
    phone: Yup.string()
      .min(10, 'Số điện thoại bao gồm 10 ký số')
      .max(10, 'Số điện thoại bao gồm 10 ký số')
      .required('Vui lòng nhập số điện thoại'),
    school: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().max(50, 'Tên trường học không được dài quá 50 ký tự'),
        major: Yup.string().max(50, 'Tên ngành học không được dài quá 50 ký tự'),
      }),
    ),
    exp: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().max(50, 'Tên công ty không được dài quá 50 ký tự'),
        position: Yup.string().max(50, 'Tên công việc không được dài quá 50 ký tự'),
      }),
    ),
    agreed: Yup.boolean().test('checked', 'Vui lòng chọn "Đồng ý" khi hoàn tất đăng ký', (value, context) => value),
  })

  const formik = useFormik({
    initialValues: {
      date_of_birth: '',
      phone: '',
      school: [
        {
          name: '',
          major: '',
        },
      ],
      exp: [
        {
          name: '',
          position: '',
        },
      ],
      agreed: false,
    },
    validationSchema,
    onSubmit: data => {
      setMessage('')
      setLoading(true)
      const { agreed, ...rest } = data
      if (agreed) {
        UserService.updateProfile(rest)
          .then(() => {
            router.push('/login')
          })
          .catch(error => {
            const resMessage =
              (error.response && error.response.data && error.response.data.message) ||
              error.message ||
              error.toString()
            setMessage(resMessage)
            setLoading(false)
            console.log(resMessage)
          })
      }
    },
  })

  return (
    <div className="min-h-screen/85 md:bg-lightgray bg-white px-0 md:px-16 py-0 md:py-12">
      <Row>
        <Col className="bg-white flex h-screen justify-center items-center w-1/2" xs={24} sm={24} md={12}>
          <div className="flex flex-col justify-center items-center" style={{ width: '90%' }}>
            <h1 className="text-4xl" style={{ lineHeight: '56px', marginBottom: '3rem' }}>
              Hoàn thành profile để mentor hiểu rõ hơn về bạn!
            </h1>
            <div>
              <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                  {message && <div className="mt-4 text-red-500 flex items-center justify-center">{message}</div>}
                  <div style={{ display: 'grid', rowGap: '2.25rem' }}>
                    <Input
                      name="date_of_birth"
                      type="date"
                      placeholder="Ngày/tháng/năm sinh"
                      onChange={formik.handleChange}
                      value={formik.values.date_of_birth}
                    />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Số điện thoại"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                    <FieldArray
                      name="school"
                      render={arrayHelpers => (
                        <div>
                          {formik.values.school.map((value, index) => (
                            <div key={index} style={{ marginBottom: '1rem' }}>
                              <Input
                                name={`school[${index}].name`}
                                value={formik.values.school[index].name}
                                onChange={formik.handleChange}
                                style={{ marginBottom: '0.75rem' }}
                                placeholder="Trường học"
                              />
                              <Input
                                name={`school[${index}].major`}
                                value={formik.values.school[index].major}
                                onChange={formik.handleChange}
                                placeholder="Ngành học"
                              />
                              <Button variant="text" onClick={() => arrayHelpers.remove(index)} type="button">
                                X
                              </Button>
                            </div>
                          ))}
                          <Button variant="contained" onClick={() => arrayHelpers.push({ name: '', major: '' })}>
                            Add school
                          </Button>
                        </div>
                      )}
                    />
                    <FieldArray
                      name="exp"
                      render={arrayHelpers => (
                        <div>
                          {formik.values.exp.map((value, index) => (
                            <div key={index} style={{ marginBottom: '1rem' }}>
                              <Input
                                name={`exp[${index}].name`}
                                value={formik.values.exp[index].name}
                                onChange={formik.handleChange}
                                style={{ marginBottom: '0.75rem' }}
                                placeholder="Công ty"
                              />
                              <Input
                                name={`exp[${index}].position`}
                                value={formik.values.exp[index].position}
                                onChange={formik.handleChange}
                                placeholder="Công việc"
                              />
                              <Button variant="text" onClick={() => arrayHelpers.remove(index)} type="button">
                                X
                              </Button>
                            </div>
                          ))}
                          <Button variant="contained" onClick={() => arrayHelpers.push({ name: '', position: '' })}>
                            Add experience
                          </Button>
                        </div>
                      )}
                    />
                  </div>
                  <div className="flex justify-start items-center" style={{ width: '80%', margin: '1.25rem 0' }}>
                    <Input name="agreed" type="checkbox" onChange={formik.handleChange} value={formik.values.agreed} />
                    <p style={{ marginLeft: '0.5rem' }}>
                      Tôi đã đọc và đồng ý với các &nbsp;
                      <Link href="#">điều khoản dịch vụ và chính sách bảo mật</Link>
                    </p>
                  </div>
                  <Button variant="contained" type="submit">
                    {loading ? (
                      <div className=" flex justify-center items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      </div>
                    ) : (
                      <>Hoàn thành</>
                    )}
                  </Button>
                </form>
              </FormikProvider>
            </div>
            <div className="flex items-center" style={{ marginTop: '0.75rem' }}>
              <ArrowLeftOutlined style={{ marginRight: '6px' }} />
              <Link href="#">Quay lại trang chủ</Link>
            </div>
          </div>
        </Col>
        <div className="bg-primary flex h-screen rounded-xl w-1/2" xs={0} sm={12}>
          <Image priority src="/images/complete-your-profile.svg" width={580} height={480} />
        </div>
      </Row>
    </div>
  )
}

export default CompleteProfile
