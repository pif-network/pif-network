import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AuthService, TokenService, UserService } from '~/services';
import { getErrorMessage } from '~/lib/types/service';
import { Link, Input as FormikInput, Button, Divider } from '~/components/ui';
import { GoogleFill } from '~/components/ui/svgs/Icons';
import { INTERNAL_PATH } from '~/shared/constant';
import { BrandIdentifierLayoutSlot } from './components';

import { FormikProvider, useFormik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { Alert } from 'antd';

const Login = () => {
  const router = useRouter();
  const { status, id, at, rt } = router.query;

  const checkIfRegisterWithGoogleSuccessfully = async (id: string) => {
    try {
      const user = await UserService.getUserById(id);

      UserService.setUser(user.data.data);

      const token = {
        accessToken: at as string,
        refreshToken: rt as string,
      };

      TokenService.setToken(token);

      router.push(INTERNAL_PATH.HOME);
    } catch (error) {
      console.log(error);
    }
  };

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  useEffect(() => {
    if (typeof id === 'string') {
      checkIfRegisterWithGoogleSuccessfully(id);
      window.history.pushState(null, '', location.href.split('?')[0]);
    } else if (typeof status === 'string') {
      setErrorMessage('Email has not been registered.');
      window.history.pushState(null, '', location.href.split('?')[0]);
    }
  }, [id, status]);

  const validationSchema = object().shape({
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
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async ({ email, password }, { setSubmitting }) => {
      console.log('Submitting..');
      try {
        setErrorMessage('');

        await AuthService.logIn(email, password);
        const user = UserService.currentUser;
        console.log(user);

        console.log(router.query.returnUrl);
        // if (!user?.location) router.push('/user/complete-profile');
        // else {
        //   const returnUrl = (router.query?.returnUrl as string) || '/';
        //   router.push(returnUrl);
        // }
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        console.log('error: ', errorMessage);

        switch (errorMessage) {
          case "Mentee's not found":
            setErrorMessage('Email không tồn tại');
            break;
          case "Mentee has's not confirm their email.":
            setErrorMessage('Kiểm tra email của bạn và xác nhận tài khoản');
            break;
          case 'Wrong password.':
            setErrorMessage('Mật khẩu không đúng');
            break;
          case undefined:
            setErrorMessage('Đã có lỗi xảy ra. Vui lòng thử lại.');
            break;
          default:
            setErrorMessage(errorMessage);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Đăng nhập</title>
      </Head>

      <BrandIdentifierLayoutSlot>
        {/* Page title */}
        <h1 className="-ml-[2px] text-left font-lora word-[-0.23rem] text-sub-heading md:text-heading">
          <span className="text-black font-regular">Đăng nhập</span>
        </h1>

        <div className="-mb-2" />

        <div className="mt-3 mb-4 text-left font-manrope font-regular text-body-sm">
          Chưa có tài khoản?{' '}
          <span className="text-primary-800">
            <Link href={INTERNAL_PATH.REGISTER}>Đăng ký.</Link>
          </span>
        </div>

        <div className="min-w-[375px]" />

        <div className="mb-4" />

        <FormikProvider value={formik}>
          <Form className="max-w-sm flex flex-col">
            {errorMessage && (
              <Alert
                className="mt-2 mb-6 font-manrope"
                message={errorMessage}
                type="error"
                showIcon
              />
            )}
            <Field name="email" type="email" as={FormikInput} />
            <Field name="password" type="password" as={FormikInput} />
            <div className="mt-8 flex items-center justify-center">
              {formik.isSubmitting ? (
                <div className=" flex justify-center items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                </div>
              ) : (
                <Button
                  className={`w-full h-[46px] flex items-center justify-center rounded-lg ${
                    !(formik.isValid && formik.dirty)
                      ? 'bg-primary-800/40 border-primary-800/60'
                      : ''
                  } text-[19px] md:text-sub-heading`}
                  type="submit"
                  fillType="filled"
                  size="medium"
                  content="Đăng nhập"
                  // disabled={formik.isValid && formik.dirty}
                />
              )}
            </div>

            <Divider>Hoặc đăng nhập với</Divider>

            <Button
              className="max-w-md w-full h-[42px] flex items-center justify-center border-[1px] border-gray-600/50 text-[18px] md:text-sub-heading rounded-lg"
              external
              href="http://localhost:8080/api/auth/google?action=login"
              type="button"
              fillType="outlined"
              size="medium"
              content={
                <>
                  <GoogleFill className="pr-2" /> Google
                </>
              }
            />
          </Form>
        </FormikProvider>
      </BrandIdentifierLayoutSlot>
    </>
  );
};

export default Login;
