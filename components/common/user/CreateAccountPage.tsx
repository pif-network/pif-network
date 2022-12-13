import { RoleChoosingPopover } from './components';

import { useState, MouseEvent } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AuthService } from '~/services';
import { getErrorMessage } from '~/lib/types/service';
import { Button, Input as FormikInput, Link } from '~/components/ui';
import { INTERNAL_URI, USER_ROLE } from '~/shared/constant';

import { object, string } from 'yup';
import { Field, Form, FormikProvider, useFormik } from 'formik';

import { Alert, Col, Divider, Row } from 'antd';
import { UserRole } from '~/lib/types/user';
import { GoogleFill } from '~/components/ui/svgs/Icons';

const CreateAccount = () => {
  const [message, setMessage] = useState('');
  const [role, setRole] = useState<UserRole | undefined>(undefined);
  const router = useRouter();

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
    onSubmit: async ({ email, password }) => {
      if (role) {
        setMessage('');
        try {
          const newUser = await AuthService.register(email, password, role);
          console.log(newUser);
          // router.push(INTERNAL_URI.COMPLETE_PROFILE);
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
    <>
      <Head>
        <title>Đăng ký</title>
      </Head>

      <section className="md:max-w-lg m-1 md:m-8 py-12 px-8 md:px-16 rounded-xl">
        <h1 className="-ml-[2px] text-left font-lora word-[-0.23rem] text-sub-heading md:text-heading">
          <span className="text-black font-regular">Chào mừng bạn.</span>
        </h1>

        <div className="-mb-2" />

        <div className="mt-3 mb-4 text-left font-manrope font-regular text-body-sm">
          Đã có tài khoản?{' '}
          <span className="text-primary-400">
            <Link href={INTERNAL_URI.LOGIN}>Đăng nhập.</Link>
          </span>
        </div>

        <div className="mb-9" />

        <div className="grid place-items-start">
          <h4 className="text-center text-black font-manrope word-[0rem] text-body-md md:text-body">
            Vui lòng lựa chọn vị trí mà bạn muốn đăng ký.
          </h4>

          <div className="mb-2" />

          <h4 className="text-left text-gray-400 font-manrope word-[0rem] text-caption">
            Bằng việc đăng ký, tôi đồng ý với{' '}
            <Link external href="#">
              Terms of Use
            </Link>{' '}
            và{' '}
            <Link external href="#">
              Privacy policy
            </Link>
            .
          </h4>
        </div>

        <div className="mb-6 md:mb-8" />

        <div className="flex justify-start space-x-4">
          <RoleChoosingPopover
            userType={USER_ROLE.MENTOR}
            onClick={() => setRole(USER_ROLE.MENTOR)}
            disabled={role ? role !== USER_ROLE.MENTOR : undefined}
          />
          <RoleChoosingPopover
            userType={USER_ROLE.MENTEE}
            onClick={() => setRole(USER_ROLE.MENTEE)}
            disabled={role ? role !== USER_ROLE.MENTEE : undefined}
          />
        </div>

        <div className="mb-8" />

        {role && (
          <>
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
                <Field name="email" type="email" as={FormikInput} />
                <Field name="password" type="password" as={FormikInput} />
                <div className="mt-8 flex items-center justify-center">
                  {formik.isSubmitting ? (
                    <div className=" flex justify-center items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                    </div>
                  ) : (
                    <Button
                      content="Đăng ký"
                      type="submit"
                      fillType="filled"
                      size="medium"
                      className={`w-full rounded-lg ${
                        !(formik.isValid && formik.dirty)
                          ? '!bg-primary-800/60 border-primary-800/60'
                          : ''
                      } text-[19px] md:text-sub-heading`}
                      // disabled={formik.isValid && formik.dirty}
                    />
                  )}
                </div>

                <div className="mb-2" />

                <Divider plain>Hoặc đăng ký với</Divider>

                <Button
                  content={
                    <>
                      <GoogleFill className="pr-2" /> Google
                    </>
                  }
                  fillType="outlined"
                  size="medium"
                  className="max-w-md w-full h-[42px] flex items-center justify-center border-[1px] border-gray-600/50 text-[18px] md:text-sub-heading"
                />
              </Form>
            </FormikProvider>
          </>
        )}
      </section>
    </>
  );
};

export default CreateAccount;
