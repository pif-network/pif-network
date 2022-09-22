import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AuthService } from '~/services';
import { getErrorMessage } from '~/lib/types/service';
import { Link, Input as FormikInput, Button } from '~/components/ui';
import { INTERNAL_URI } from '~/shared/constant';
import { FormikProvider, useFormik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { Row, Col, Divider, Alert } from 'antd';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from "next-auth/next"

import { authOptions } from "~/pages/api/auth/[...nextauth]";



const Login = () => {

  const [message, setMessage] = useState<string | undefined>('');
  const [shouldRegisterWithEmail, setShouldRegisterWithEmail] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const validationSchema = object().shape({
    email: string().required('Hãy nhập Email').email('Email không hợp lệ'),
    password: string()
      .required('Hãy nhập mật khẩu')
      .min(6, 'Mật khẩu phải có ít nhất 6 kí tự')
      .max(128, 'Mật khẩu không được vượt quá 128 kí tự'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (data, { setSubmitting }) => {
      try {
        setMessage('');

        const user = await AuthService.logIn(data);

        if (!user?.birthday) {
          router.push('/user/complete-profile');
        }

        const returnUrl = (router.query?.returnUrl as string) || '/';
        router.push(returnUrl);
      } catch (error) {
        const errorMessage = getErrorMessage(error);

        switch (errorMessage) {
          case "Mentee's not found":
            setMessage('Email không tồn tại');
            break;
          case "Mentee has's not confirm their email.":
            setMessage('Kiểm tra email của bạn và xác nhận tài khoản');
            break;
          case 'Wrong password.':
            setMessage('Mật khẩu không đúng');
            break;
          case undefined:
            setMessage('Đã có lỗi xảy ra. Vui lòng thử lại.');
            break;
          default:
            setMessage(errorMessage);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Welcome back!</title>
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
              <h1 className="text-center font-lora word-[-0.23rem] text-sub-heading md:text-heading text-primary-900 font-semi-bold">
                Đăng nhập vào <br /> &#60;product_name&#62;
              </h1>

              <div className="mb-5" />

              <h3 className="text-center text-black font-manrope word-[0rem] text-body">
                Chào mừng bạn quay trở lại!
              </h3>

              <div className="mb-8" />

              { /* https://next-auth.js.org/v3/getting-started/client#specifying-a-callbackurl */}
              <div className="grid place-items-center">
                <Button
                  content="Đăng nhập với Google"
                  fillType="outlined"
                  size="medium"
                  className="max-w-md w-full border-[1px] border-gray-600/50 text-[18px] md:text-sub-heading"
                  onClick={() => signIn('google', {callbackurl: `${window.location.origin}/`})}
                />
              </div>

              <div className="grid place-items-center">
                <Button
                  content="Đăng xuat"
                  fillType="outlined"
                  size="medium"
                  className="max-w-md w-full border-[1px] border-gray-600/50 text-[18px] md:text-sub-heading"
                  onClick={() => signOut()}
                />
              </div>


              <div className="mb-2" />

              <Divider plain>HOẶC</Divider>

              <div className="mb-2" />

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
                        content="Đăng nhập"
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

              <div className="mt-4 mb-4 text-center font-manrope font-regular text-body-sm">
                Chưa có tài khoản?{' '}
                <span>
                  <Link href={INTERNAL_URI.REGISTER}>Đăng ký.</Link>
                </span>
              </div>
            </section>
          </Col>
        </Row>
      </article>
    </>
  );
};



export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  if(session) {
    return { 
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return { 
    props: { 
      session,
    },
  };
  
}



export default Login;
