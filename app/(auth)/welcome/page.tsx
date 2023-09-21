'use client';

import { FormEvent, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

import { getErrorMessage } from '~/lib/types/service';
import { INTERNAL_PATH, USER_ROLE } from '~/shared/constant';
import {
  Button,
  Input as FormikInput,
  Link,
  Divider,
  BrandIdentifier,
} from '~/components/ui';
import {
  ChevronRight,
  GoogleFill,
  Home,
  SendingMailLine,
} from '~/components/ui/svgs/Icons';

import { number, object, string } from 'yup';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { Alert } from 'antd';
import { useSignUp } from '@clerk/nextjs';
import type { OAuthStrategy } from '@clerk/types';

const CreateAccount = () => {
  const [message, setMessage] = useState('');
  const su = useSignUp();
  const { signUp, setActive, isLoaded } = su;

  const signUpWith = (strategy: OAuthStrategy) => {
    return signUp!.authenticateWithRedirect({
      strategy,
      redirectUrl: '/sso-callback',
      redirectUrlComplete: INTERNAL_PATH.COMPLETE_PROFILE,
    });
  };

  const router = useRouter();

  const [isPendingEmailCodeVerification, setIsPendingEmailCodeVerification] =
    useState(false);

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
      if (!isLoaded) {
        return;
      }

      try {
        await signUp.create({
          emailAddress: email,
          password,
          redirectUrl: INTERNAL_PATH.COMPLETE_PROFILE,
        });

        await signUp.prepareEmailAddressVerification({
          strategy: 'email_code',
        });

        setIsPendingEmailCodeVerification(true);
      } catch (error: any) {
        console.error(JSON.stringify(error, null, 2));
      }
    },
  });

  return (
    <>
      <Head>
        <title>
          {isPendingEmailCodeVerification
            ? '❤️ Cảm ơn bạn đã đăng ký!'
            : 'Đăng ký'}
        </title>
      </Head>

      {!isPendingEmailCodeVerification && (
        <BrandIdentifier>
          <h1 className="-ml-[2px] text-left font-lora word-[-0.23rem] text-sub-heading md:text-heading text-black font-regular">
            Chào mừng bạn.
          </h1>

          <div className="-mb-2" />

          <div className="mt-3 mb-4 text-left font-manrope font-regular text-body-sm">
            Đã có tài khoản?{' '}
            <span className="text-primary-800">
              <Link href={INTERNAL_PATH.LOGIN}>Đăng nhập.</Link>
            </span>
          </div>

          <div className="mb-4" />

          <div className="grid place-items-start">
            <h4 className="text-left text-black font-manrope word-[0rem] text-body-md md:text-body">
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

          <FormikProvider value={formik}>
            <Form className="max-w-sm flex flex-col">
              {message && (
                <Alert
                  className="my-4 font-manrope"
                  message={message}
                  type="error"
                  showIcon
                />
              )}

              <Field name="email" type="email" as={FormikInput} />
              <Field name="password" type="password" as={FormikInput} />

              <div className="mb-2" />

              <div className="self-end font-manrope text-black text-caption">
                <Link href={INTERNAL_PATH.FORGOT_PASSWORD}>Quên mật khẩu?</Link>
              </div>

              <div className="mt-8 flex items-center justify-center">
                {formik.isSubmitting ? (
                  <div className=" flex justify-center items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                  </div>
                ) : (
                  <Button
                    className={`w-full ${
                      !(formik.isValid && formik.dirty)
                        ? 'bg-primary-800/40 border-primary-800/60'
                        : ''
                    } text-[19px]`}
                    type="submit"
                    // disabled={formik.isValid && formik.dirty}
                  >
                    <h4>Đăng nhập</h4>
                  </Button>
                )}
              </div>

              <Divider>Hoặc đăng ký với</Divider>

              <Button
                className="max-w-md w-full border-gray-600/50 text-[18px]"
                variant="outline"
                type="button"
                onClick={() => signUpWith('oauth_google')}
              >
                <GoogleFill className="pr-2" /> <span>Google</span>
              </Button>
            </Form>
          </FormikProvider>
        </BrandIdentifier>
      )}

      {isPendingEmailCodeVerification && <VerifyEmailCode su={su} />}
    </>
  );
};

export default CreateAccount;

const VerifyEmailCode = ({ su }: { su: ReturnType<typeof useSignUp> }) => {
  const formik = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema: object().shape({
      code: number().required(),
    }),
    onSubmit: async ({ code }) => {
      if (!su.isLoaded) {
        return;
      }

      try {
        const completeSignUp = await su.signUp.attemptEmailAddressVerification({
          code,
        });

        if (completeSignUp.status === 'complete') {
          console.log(completeSignUp);
          await su.setActive({ session: completeSignUp.createdSessionId });
        }

        if (completeSignUp.status !== 'complete') {
          console.log(JSON.stringify(completeSignUp, null, 2));
        }
      } catch (error: any) {
        console.error(JSON.stringify(error, null, 2));
      }
    },
  });

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="mb-7" />

      <SendingMailLine className="animate-appear w-40 h-20 lg:w-50 lg:h-24 -translate-x-6" />

      <div className="mb-10" />

      <div className="animate-appear-long flex flex-col justify-center items-center">
        <h1 className="-ml-[2px] font-lora font-semi-bold word-[-0.5rem] text-sub-heading md:text-heading text-black">
          Email xác nhận đã được gửi đi!
        </h1>

        <h4 className="text-black font-manrope word-[0rem] text-body-md lg:text-heading-sm">
          Vui lòng kiểm tra email, và làm theo hướng dẫn để{' '}
          <span className="inline-block">xác nhận tài khoản.</span>
        </h4>

        <FormikProvider value={formik}>
          <Form>
            <Field
              name="code"
              as={FormikInput}
              onChange={(event: FormEvent<HTMLInputElement>) => {
                formik.setFieldValue('code', event.currentTarget.value.trim());
              }}
            />

            <div className="mb-8" />

            <div className="w-[250px] flex gap-4">
              <Button
                // href={INTERNAL_PATH.HOME}
                className="border-primary-900/60"
                type="button"
                variant="outline"
              >
                <Home className="w-4 h-4" />
              </Button>
              <Button type="submit">Xác nhận</Button>
            </div>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};
