import * as React from 'react'
import * as Yup from 'yup'
import Link from 'next/link'
import Image from 'next/image'
import { FieldArray, FormikProvider, useFormik } from 'formik'
import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons'
import UserService from '../../../services/UserService'
import { Col, Input, Row, Tooltip, Button } from 'antd'
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
            router.push('/')
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
        <Col className="bg-white flex min-h-screen/75 justify-center items-start" sm={12}>
          <div className="flex flex-col justify-center items-center mt-4 w-9/12">
            <h1 className="pt-6 pb-6 text-4xl font-medium leading-12 tracking-wide">
              Hoàn thành profile để mentor hiểu rõ hơn về bạn!
            </h1>
            <div>
              <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                  {message && <div className="mt-4 text-red-500 flex items-center justify-center">{message}</div>}
                  <div style={{ display: 'grid', rowGap: '1rem' }}>
                    <Input
                      name="date_of_birth"
                      type="date"
                      placeholder="Ngày/tháng/năm sinh"
                      onChange={formik.handleChange}
                      value={formik.values.date_of_birth}
                    />
                    {formik.errors.date_of_birth ? (
                      <div className="text-red-500">{formik.errors.date_of_birth}</div>
                    ) : null}
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Số điện thoại"
                      onChange={formik.handleChange}
                      value={formik.values.phone}
                    />
                    {formik.errors.phone ? <div className="text-red-500">{formik.errors.phone}</div> : null}
                    <FieldArray
                      name="school"
                      render={arrayHelpers => (
                        <div>
                          {formik.values.school.map((value, index) => (
                            <div key={index} style={{ marginBottom: '1rem' }}>
                              <Input.Group compact>
                                <Input
                                  name={`school[${index}].name`}
                                  value={formik.values.school[index].name}
                                  onChange={formik.handleChange}
                                  style={{ width: '43.5%', marginRight: '1rem' }}
                                  placeholder="Trường học"
                                />
                                <Input
                                  name={`school[${index}].major`}
                                  value={formik.values.school[index].major}
                                  onChange={formik.handleChange}
                                  style={{ width: '43.5%', marginRight: '1rem' }}
                                  placeholder="Ngành học"
                                />
                                <Tooltip title="Xóa trường học này">
                                  <Button
                                    icon={<DeleteOutlined />}
                                    style={{ border: 'none', boxShadow: '0' }}
                                    onClick={() => arrayHelpers.remove(index)}
                                  />
                                </Tooltip>
                              </Input.Group>
                            </div>
                          ))}
                          <button
                            className="rounded bg-white hover:text-violet focus:text-violet underline"
                            onClick={() => arrayHelpers.push({ name: '', major: '' })}
                          >
                            Thêm trường học
                          </button>
                        </div>
                      )}
                    />
                    {formik.errors.school ? <div className="text-red-500">{formik.errors.school}</div> : null}
                    <FieldArray
                      name="exp"
                      render={arrayHelpers => (
                        <div>
                          {formik.values.exp.map((value, index) => (
                            <div key={index} style={{ marginBottom: '1rem' }}>
                              <Input.Group compact>
                                <Input
                                  name={`exp[${index}].name`}
                                  value={formik.values.exp[index].name}
                                  onChange={formik.handleChange}
                                  style={{ width: '43.5%', marginRight: '1rem' }}
                                  placeholder="Công ty"
                                />
                                <Input
                                  name={`exp[${index}].position`}
                                  value={formik.values.exp[index].position}
                                  onChange={formik.handleChange}
                                  style={{ width: '43.5%', marginRight: '1rem' }}
                                  placeholder="Công việc"
                                />
                                <Tooltip title="Xóa công việc này">
                                  <Button
                                    style={{ border: 'none', boxShadow: '0' }}
                                    icon={<DeleteOutlined />}
                                    onClick={() => arrayHelpers.remove(index)}
                                  />
                                </Tooltip>
                              </Input.Group>
                            </div>
                          ))}
                          <button
                            className="rounded bg-white hover:text-violet focus:text-violet underline"
                            onClick={() => arrayHelpers.push({ name: '', position: '' })}
                          >
                            Thêm kinh nghiệm
                          </button>
                        </div>
                      )}
                    />
                    {formik.errors.exp ? <div className="text-red-500">{formik.errors.exp}</div> : null}
                  </div>
                  <div className="pt-4">
                    <Input
                      type="checkbox"
                      name="agreed"
                      id="agreed"
                      className="mr-1 checked:bg-primary checked:border-transparent"
                      onChange={formik.handleChange}
                    />{' '}
                    <label htmlFor="agreed" className="text-sm text-grey-dark">
                      Tôi đã đọc và đồng ý với các &nbsp;
                      <Link href="#">điều khoản dịch vụ và chính sách bảo mật</Link>
                    </label>
                    {formik.errors.agreed ? <div className="text-red-500">{formik.errors.agreed}</div> : null}
                  </div>
                  <div className="mt-8 flex items-center justify-center">
                    <button
                      className="py-3 px-4 md:w-28 w-full rounded bg-primary text-white hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
                      type="submit"
                    >
                      {loading ? (
                        <div className="flex justify-center items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        </div>
                      ) : (
                        <>Hoàn thành</>
                      )}
                    </button>
                  </div>
                </form>
              </FormikProvider>
            </div>
            <div className="flex items-center pt-4 pb-4">
              <ArrowLeftOutlined style={{ marginRight: '6px' }} />
              <Link href="#">Quay lại trang chủ</Link>
            </div>
          </div>
        </Col>
        <Col
          className="bg-gradient-to-b from-primary via-primary to-lightviolet hidden md:flex min-h-screen/75 justify-center items-center "
          xs={0}
          sm={12}
        >
          <Image priority src="/images/complete-your-profile.svg" width={580} height={480} />
        </Col>
      </Row>
    </div>
  )
}

export default CompleteProfile
