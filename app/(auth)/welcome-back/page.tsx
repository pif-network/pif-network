'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

import { getErrorMessage } from '~/lib/types/service';
import {
  Link,
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
import { GoogleFill } from '~/components/ui/svgs/icons';
import { FormInput } from '../user/complete-profile/components';
import { INTERNAL_PATH } from '~/shared/constant';

import { Alert } from 'antd';
import { useSignIn } from '@clerk/nextjs';
import type { OAuthStrategy } from '@clerk/types';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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

  const shouldSubmitButtonDisable =
    !form.formState.isDirty || !form.formState.isValid;

  const onSubmit = async () => {
    console.log('Submitting..');

    if (!isLoaded) {
      return;
    }
    try {
      const v = form.watch();
      console.log(v);
      const result = await signIn.create({
        identifier: v.email,
        password: v.password,
      });

      if (result.status === 'complete') {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push(INTERNAL_PATH.COMPLETE_PROFILE);
      } else {
        console.log(result);
      }
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setErrorMessage(errorMessage);
    }
  };

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
              {form.formState.isSubmitting ? (
                <div className="w-full flex justify-center items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                </div>
              ) : (
                <Button
                  className="w-full h-[42px] text-[16px]"
                  type="submit"
                  disabled={shouldSubmitButtonDisable}
                >
                  Đăng nhập
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
