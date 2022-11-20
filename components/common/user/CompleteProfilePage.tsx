import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { UserService } from '~/services';
import { getErrorMessage } from '~/lib/types/service';
import { User } from '~/lib/types/user';
import { Input as FormikInput } from '~/components/ui';

import { Field, FieldArray, Form, FormikProvider, useFormik } from 'formik';
import { object, string, array } from 'yup';

import { ArrowLeftOutlined, DeleteOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip, Button, Input } from 'antd';
import Head from 'next/head';

const CompleteProfile = () => {
  const router = useRouter();
  const [message, setMessage] = useState('');

  const validationSchema = object().shape({
    dateOfBirth: string().required('Vui lòng nhập ngày sinh'),
    phone: string()
      .min(10, 'Số điện thoại bao gồm 10 ký số')
      .max(10, 'Số điện thoại bao gồm 10 ký số')
      .required('Vui lòng nhập số điện thoại'),
    school: array().of(
      object().shape({
        name: string().max(50, 'Tên trường học không được dài quá 50 ký tự'),
        major: string().max(50, 'Tên ngành học không được dài quá 50 ký tự'),
      })
    ),
    exp: array().of(
      object().shape({
        name: string().max(50, 'Tên công ty không được dài quá 50 ký tự'),
        position: string().max(50, 'Tên công việc không được dài quá 50 ký tự'),
      })
    ),
  });

  const formik = useFormik({
    initialValues: {
      dateOfBirth: '',
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
    },
    validationSchema,
    onSubmit: async values => {
      try {
        setMessage('');
        await UserService.updateProfile(values);

        router.push('/');
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        setMessage(errorMessage);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Complete Profile</title>
      </Head>

      <div className="min-h-screen/85 md:bg-lightgray bg-white px-0 md:px-16 py-0 md:py-12">
        <Row>
          <Col
            className="bg-white flex min-h-screen/75 justify-center items-start"
            sm={12}
          >
            <div className="flex flex-col justify-center items-center mt-4 w-9/12">
              <h1 className="pt-6 pb-6 text-4xl font-medium leading-12 tracking-wide">
                Hoàn thành profile để mentor hiểu rõ hơn về bạn!
              </h1>
              <div>
                <FormikProvider value={formik}>
                  <Form>
                    {message && (
                      <div className="mt-4 text-red-500 flex items-center justify-center">
                        {message}
                      </div>
                    )}
                    <div style={{ display: 'grid', rowGap: '1rem' }}>
                      <Field
                        name="dateOfBirth"
                        type="date"
                        placeholder="Ngày, tháng, năm sinh"
                        as={FormikInput}
                      />
                      <Field
                        name="phone"
                        type="tel"
                        placeholder="Số điện thoại"
                        as={FormikInput}
                      />
                      <FieldArray
                        name="school"
                        render={arrayHelpers => (
                          <div>
                            {formik.values.school.map((_, index) => (
                              <div key={index} style={{ marginBottom: '1rem' }}>
                                <Input.Group compact>
                                  <Field
                                    name={`school[${index}].name`}
                                    style={{
                                      width: '43.5%',
                                      marginRight: '1rem',
                                    }}
                                    placeholder="Trường học"
                                    as={FormikInput}
                                  />
                                  <Field
                                    name={`school[${index}].name`}
                                    style={{
                                      width: '43.5%',
                                      marginRight: '1rem',
                                    }}
                                    placeholder="Chuyên ngành"
                                    as={FormikInput}
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
                              onClick={() =>
                                arrayHelpers.push({ name: '', major: '' })
                              }
                            >
                              Thêm trường học
                            </button>
                          </div>
                        )}
                      />
                      <FieldArray
                        name="exp"
                        render={arrayHelpers => (
                          <div>
                            {formik.values.exp.map((value, index) => (
                              <div key={index} style={{ marginBottom: '1rem' }}>
                                <Input.Group compact>
                                  <Field
                                    name={`exp[${index}].name`}
                                    style={{
                                      width: '43.5%',
                                      marginRight: '1rem',
                                    }}
                                    placeholder="Công ty"
                                    as={FormikInput}
                                  />
                                  <Field
                                    name={`exp[${index}].position`}
                                    style={{
                                      width: '43.5%',
                                      marginRight: '1rem',
                                    }}
                                    placeholder="Vị trí"
                                    as={FormikInput}
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
                              onClick={() =>
                                arrayHelpers.push({ name: '', position: '' })
                              }
                            >
                              Thêm kinh nghiệm
                            </button>
                          </div>
                        )}
                      />
                    </div>
                    <div className="mt-8 flex items-center justify-center">
                      <button
                        className="py-3 px-4 md:w-28 w-full rounded bg-primary text-white hover:bg-violet focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
                        type="submit"
                      >
                        {formik.isSubmitting ? (
                          <div className="flex justify-center items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          </div>
                        ) : (
                          <>Hoàn thành</>
                        )}
                      </button>
                    </div>
                  </Form>
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
            <Image
              priority
              src="/images/complete-your-profile.svg"
              width={580}
              height={480}
              alt="Complete Profile"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CompleteProfile;
