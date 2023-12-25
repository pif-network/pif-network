'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

import { getErrorMessage } from '~/lib/types/service';
import { INTERNAL_PATH, USER_ROLE } from '~/shared/constant';
import {
  Button,
  Link,
  Divider,
  BrandIdentifier,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  InputLabel,
} from '~/components/ui';
import { FormInput } from '../user/complete-profile/components';
import {
  ChevronRight,
  GoogleFill,
  Home,
  SendingMailLine,
} from '~/components/ui/svgs/icons';

import { useSignUp } from '@clerk/nextjs';
import type { OAuthStrategy } from '@clerk/types';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const CreateAccount = () => {
  const [errorMessage, setErrorMessage] = useState('');
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

      await signUp.create({
        emailAddress: v.email,
        password: v.password,
        redirectUrl: INTERNAL_PATH.COMPLETE_PROFILE,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      });

      setIsPendingEmailCodeVerification(true);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setErrorMessage(errorMessage);
    }
  };

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

          <Form {...form}>
            <form
              className="max-w-sm flex flex-col"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* {errorMessage && ( */}
              {/*   <Alert */}
              {/*     className="my-4 font-manrope" */}
              {/*     message={errorMessage} */}
              {/*     type="error" */}
              {/*     showIcon */}
              {/*   /> */}
              {/* )} */}

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

              <div className="mb-2" />

              <div className="self-end font-manrope text-black text-caption">
                <Link href={INTERNAL_PATH.FORGOT_PASSWORD}>Quên mật khẩu?</Link>
              </div>

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
                    Đăng ký
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
            </form>
          </Form>
        </BrandIdentifier>
      )}

      {isPendingEmailCodeVerification && <VerifyEmailCode su={su} />}
    </>
  );
};

export default CreateAccount;

const VerifyEmailCode = ({ su }: { su: ReturnType<typeof useSignUp> }) => {
  const schema = z.object({
    code: z.string(),
  });
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      code: '',
    },
    mode: 'onChange',
  });
  const onSubmit = async () => {
    const v = form.watch();
    if (!su.isLoaded) {
      return;
    }

    try {
      const completeSignUp = await su.signUp.attemptEmailAddressVerification(v);

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
  };

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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="code"
              render={({ field }) => {
                return (
                  <FormItem>
                    <InputLabel name="Password" />
                    <FormControl>
                      <FormInput
                        className="w-full"
                        placeholder="000000"
                        formTriggerBlur={field.onBlur}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
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
          </form>
        </Form>
      </div>
    </div>
  );
};
