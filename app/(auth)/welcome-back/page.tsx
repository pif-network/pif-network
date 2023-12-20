'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

import { getErrorMessage } from '~/lib/types/service';
import {
  Link,
  Input as FormikInput,
  Button,
  Divider,
  BrandIdentifier,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  InputLabel,
  Form,
} from '~/components/ui';
import { GoogleFill } from '~/components/ui/svgs/Icons';
import { INTERNAL_PATH } from '~/shared/constant';

import { FormikProvider, useFormik, Field } from 'formik';
import { object, string } from 'yup';
import { Alert } from 'antd';
import { useSignIn } from '@clerk/nextjs';
import type { OAuthStrategy } from '@clerk/types';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormInput } from '../user/complete-profile/components';

const Login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn!.authenticateWithRedirect({
      strategy,
      redirectUrl: '/sso-callback',
      redirectUrlComplete: INTERNAL_PATH.COMPLETE_PROFILE,
    });
  };

  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

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
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(128),
  });
  const formDefaultValues = {
    email: '',
    password: '',
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: formDefaultValues,
    mode: 'onChange',
  });

  const onSubmit = async () => {
    console.log('Submitting..');

    if (!isLoaded) {
      return;
    }
    try {
      const v = form.watch();
      console.log(v);
      // const result = await signIn.create({
      //   identifier: v.email,
      //   password:v.password,
      // });
      //
      // if (result.status === 'complete') {
      //   console.log(result);
      //   await setActive({ session: result.createdSessionId });
      // router.push('/');
      // } else {
      // console.log(result);
      // }
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setErrorMessage(errorMessage);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async ({ email, password }, { setSubmitting }) => {
      console.log('Submitting..');

      if (!isLoaded) {
        return;
      }

      try {
      } catch (err: any) {
        console.error('error', err.errors[0].longMessage);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Đăng nhập</title>
      </Head>

      <BrandIdentifier>
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

        <Form {...form}>
          <form
            className="max-w-sm flex flex-col"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {errorMessage && (
              <Alert
                className="mt-2 mb-6 font-manrope"
                message={errorMessage}
                type="error"
                showIcon
              />
            )}
            <FormField
              name="email"
              render={({ field }) => {
                return (
                  <FormItem>
                    <InputLabel name="Email" />
                    <FormControl>
                      <FormInput
                        className="w-full"
                        placeholder="dev@pif-network.com"
                        formTriggerBlur={field.onBlur}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <InputLabel name="Password" />
                    <FormControl>
                      <FormInput
                        className="w-full"
                        placeholder="dev@pif-network.com"
                        formTriggerBlur={field.onBlur}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
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

            <Divider>Hoặc đăng nhập với</Divider>

            <Button
              className="max-w-md w-full border-gray-600/50 text-[18px]"
              variant="outline"
              type="button"
              onClick={() => signInWith('oauth_google')}
            >
              <GoogleFill className="pr-2" /> <span>Google</span>
            </Button>
          </form>
        </Form>
      </BrandIdentifier>
    </>
  );
};

export default Login;
