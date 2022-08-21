import { RoleChoosingPopover } from './components';

import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AuthService } from '~/services';
import { getErrorMessage } from '~/lib/types/service';
import { Link, Input as FormikInput, Button } from '~/components/ui';
import { INTERNAL_URI } from '~/shared/constant';

import { object, string } from 'yup';
import { Field, Form, FormikProvider, useFormik } from 'formik';

import { Row, Col, Alert, Divider } from 'antd';
import { UserRole } from '~/lib/types/user';

const CreateAccount = () => {
  const [message, setMessage] = useState('');
  const [shouldRegisterWithEmail, setShouldRegisterWithEmail] = useState(false);
  const [role, setRole] = useState<UserRole>();
  const router = useRouter();

  const validationSchema = object().shape({
    name: string()
      .min(2, 'Tên không được ngắn hơn 2 ký tự.')
      .max(40, 'Tên không được dài quá 40 ký tự.')
      .required('Vui lòng nhập tên của bạn.'),
    email: string()
      .min(6, 'Email không được ngắn hơn 6 ký tự.')
      .max(50, 'Email không được dài quá 50 ký tự.')
      .email('Địa chỉ email không hợp lệ.')
      .required('Vui lòng nhập địa chỉ email.'),
    password: string()
      .min(6, 'Password không được ngắn hơn 6 ký tự.')
      .max(128, 'Password không được dài quá 128 ký tự.')
      .required('Vui lòng nhập mật khẩu.'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async data => {
      if (role) {
        setMessage('');
        try {
          await AuthService.register({ ...data, role });
          router.push(INTERNAL_URI.COMPLETE_PROFILE);
        } catch (error) {
          const errorMessage = getErrorMessage(error);
          console.log(errorMessage);

          switch (errorMessage) {
            case 'Email is already taken':
              setMessage('Email này đã được dùng đăng ký tài khoản.');
              break;
            case undefined:
              setMessage('Đã có lỗi xảy ra. Vui lòng thử lại.');
              break;
            default:
              setMessage(errorMessage);
          }
        }
      } else {
        setMessage('Hãy chọn vai trò của bạn.');
      }
    },
  });

  return (
    <div className="bg-[#fafafa]">
      <Head>
        <title>Registering to &#60;product_name&#62;</title>
      </Head>

      <article className="grid place-items-center xl:inline mx-2 md:mx-6 lg:mx-12 xl:mx-24 px-0 md:px-16 py-0 md:py-12">
        <Row className="" align="middle" justify="center">
          <Col
            className="max-w-2xl h-full mt-10 ml-12"
            xs={0}
            sm={0}
            md={0}
            lg={0}
            xl={12}
          >
            <Image
              priority
              src="/images/create-new-account.svg"
              width={813}
              height={625}
            />
          </Col>

          {/* Right */}
          <Col className="" lg={24} xl={10}>
            <section
              className="md:max-w-lg m-1 md:m-8 py-12 px-8 md:px-16 bg-white rounded-xl"
              style={{
                boxShadow: '1.47608px 3.42451px 33.0643px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Page title */}
              <h1 className="text-center font-lora word-[-0.23rem] text-sub-heading md:text-heading">
                <span className="text-black font-regular">
                  Chào mừng bạn đến với
                </span>
                <br />
                <span className="text-primary-900 font-semi-bold">
                  &#60;product_name&#62;!
                </span>
              </h1>

              <div className="mb-5" />

              <div className="grid place-items-center">
                <h4 className="text-center text-black font-manrope word-[0rem] text-body-md md:text-body">
                  Vui lòng lựa chọn vị trí mà bạn muốn đăng ký.
                </h4>

                <div className="mb-5" />

                <h4 className="text-center text-black/50 font-manrope word-[0rem] text-body-sm">
                  Bằng việc đăng ký, tôi đồng ý với{' '}
                  <Link external href="#">
                    Terms of Use
                  </Link>{' '}
                  và{' '}
                  <Link external href="#">
                    Prvacy policy
                  </Link>
                  .
                </h4>
              </div>

              <div className="mb-6 md:mb-8" />

              <div className="flex justify-center space-x-4">
                <RoleChoosingPopover
                  role="Mentor"
                  onClick={() => setRole('Mentor')}
                />
                <RoleChoosingPopover
                  role="Mentee"
                  onClick={() => setRole('Mentee')}
                />
              </div>

              <div className="mb-8" />

              <div className="grid place-items-center">
                <Button
                  content="Đăng ký với Google"
                  fillType="outlined"
                  size="medium"
                  className="max-w-md w-full border-[1px] border-gray-600/50 text-[18px] md:text-sub-heading"
                />
              </div>

              <div className="mb-2" />

              <Divider plain>HOẶC</Divider>

              {!shouldRegisterWithEmail && (
                <div className="flex items-start">
                  <Button
                    content="Đăng ký với email"
                    fillType="outlined"
                    size="medium"
                    className="max-w-md w-full border-[1px] border-gray-600/50 text-[18px] md:text-sub-heading"
                    onClick={() => setShouldRegisterWithEmail(true)}
                  />
                </div>
              )}

              <div className="mb-2" />

              {shouldRegisterWithEmail && (
                <FormikProvider value={formik}>
                  <Form className="max-w-md">
                    {message && (
                      <Alert
                        className="mt-2 mb-6 font-manrope"
                        message={message}
                        type="error"
                        showIcon
                      />
                    )}
                    <Field
                      name="name"
                      type="name"
                      placeholder="Nhập họ và tên của bạn"
                      as={FormikInput}
                    />
                    <Field
                      name="email"
                      type="email"
                      placeholder="Nhập email của bạn"
                      as={FormikInput}
                    />
                    <Field
                      name="password"
                      type="password"
                      placeholder="Nhập mật khẩu của bạn"
                      as={FormikInput}
                    />
                    <div className="mt-8 flex items-center justify-center">
                      {formik.isSubmitting ? (
                        <div className=" flex justify-center items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                        </div>
                      ) : (
                        <Button
                          content="Tạo tài khoản ngay"
                          type="submit"
                          fillType="filled"
                          size="medium"
                          className={`w-full rounded-lg ${
                            !(formik.isValid && formik.dirty)
                              ? '!bg-primary-800/60'
                              : ''
                          } text-[19px] md:text-sub-heading`}
                          disabled={formik.isValid && formik.dirty}
                        />
                      )}
                    </div>
                  </Form>
                </FormikProvider>
              )}

              <div className="mt-4 mb-4 text-center font-manrope font-regular text-body-sm">
                Đã có tài khoản?{' '}
                <span>
                  <Link href={INTERNAL_URI.LOGIN}>Đăng nhập.</Link>
                </span>
              </div>
            </section>
          </Col>
        </Row>
      </article>
    </div>
  );
};

export default CreateAccount;
