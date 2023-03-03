import { useEffect, useState } from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { AuthService, TokenService, UserService } from '~/services';
import { getErrorMessage } from '~/lib/types/service';
import { INTERNAL_PATH } from '~/shared/constant';
import { Button, Input as FormikInput, Link } from '~/components/ui';
import {
  ChevronRight,
  Home,
  SendingMailLine,
} from '~/components/ui/svgs/Icons';
import { BrandIdentifierLayoutSlot } from '~/components/common/user/components';

import { object, string } from 'yup';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { Alert } from 'antd';
import Modal from 'antd/lib/modal/Modal';

const ForgotPasswordPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!UserService.currentUser) router.push(INTERNAL_PATH.LOGIN);
    if (UserService.currentUser?.registeringMethod === 'google')
      router.push(INTERNAL_PATH.HOME);
  }, []);

  const checkIfRegisterWithGoogleSuccessfully = async (
    tokenFromUrl: string
  ) => {
    try {
      const response = await AuthService.verifyResetPasswordReqquest(
        tokenFromUrl
      );

      const token = {
        accessToken: response.headers['authorization'] as string,
        refreshToken: response.headers['refresh-token'] as string,
      };

      console.log(token);

      TokenService.setToken(token);

      // axios.defaults.headers.common['authorization'] = token.accessToken;
      // axios.defaults.headers.common['refresh-token'] = token.refreshToken;

      router.push(INTERNAL_PATH.CHANGE_PASSWORD);
    } catch (error) {
      console.log(error);
    }
  };

  const { token } = router.query;

  useEffect(() => {
    if (typeof token === 'string') {
      checkIfRegisterWithGoogleSuccessfully(token);
      window.history.pushState(null, '', location.href.split('?')[0]);
    }
  }, [token]);

  const [message, setMessage] = useState('');
  const [
    isResetPasswordEmailSentSuccessfullyModalOpen,
    setIsResetPasswordEmailSentSuccessfullyModalOpen,
  ] = useState(false);

  const validationSchema = object().shape({
    email: string()
      .min(6, 'Email không được ngắn hơn 6 ký tự.')
      .max(50, 'Email không được dài quá 50 ký tự.')
      .email('Địa chỉ email không hợp lệ.')
      .required('Vui lòng nhập địa chỉ email.'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async ({ email }) => {
      setMessage('');
      try {
        await AuthService.requestPasswordReset(email);
        setIsResetPasswordEmailSentSuccessfullyModalOpen(true);
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
    },
  });

  return (
    <>
      <Head>
        <title>Quên mật khẩu</title>
      </Head>

      {!isResetPasswordEmailSentSuccessfullyModalOpen && (
        <BrandIdentifierLayoutSlot>
          <h1 className="-ml-[2px] text-left font-lora word-[-0.23rem] text-sub-heading md:text-heading text-black font-regular">
            Bạn quên mật khẩu?
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
              Chúng tôi sẽ gửi email hướng dẫn đặt lại mật khẩu cho bạn.
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

              <div className="mb-6 md:mb-8" />

              <div className="w-full flex gap-4">
                <Button
                  className="h-[36px] w-min px-5 rounded-lg border-gray-400"
                  href={INTERNAL_PATH.HOME}
                  fillType="outlined"
                  size="medium"
                  content={<Home className="w-4 h-4" />}
                />
                <Button
                  className="w-full h-[36px] px-2 rounded-lg text-[14px]"
                  type="submit"
                  fillType="filled"
                  size="medium"
                  content="Gửi email"
                  rightIcon={<ChevronRight className="pl-1 fill-white" />}
                />
              </div>
            </Form>
          </FormikProvider>
        </BrandIdentifierLayoutSlot>
      )}

      <Modal
        width={900}
        open={isResetPasswordEmailSentSuccessfullyModalOpen}
        centered
        mask={false}
        closable={false}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="mb-7" />

          <SendingMailLine className="animate-appear w-40 h-20 lg:w-50 lg:h-24 -translate-x-6" />

          <div className="mb-10" />

          <div className="animate-appear-long flex flex-col justify-center items-center">
            <h1 className="-ml-[2px] font-lora font-semi-bold word-[-0.5rem] text-sub-heading md:text-heading text-black">
              Email xác nhận đã được gửi đi!
            </h1>

            <div className="mb-3" />

            <h4 className="text-black font-manrope word-[0rem] text-body-md lg:text-heading-sm">
              Vui lòng kiểm tra email, và làm theo hướng dẫn để{' '}
              <span className="inline-block">xác nhận tài khoản.</span>
            </h4>

            <div className="mb-8" />

            <div className="w-[250px] flex gap-4">
              <Button
                className="h-[36px] w-min px-5 rounded-lg border-gray-400"
                href={INTERNAL_PATH.HOME}
                fillType="outlined"
                size="medium"
                content={<Home className="w-4 h-4" />}
              />
              <Button
                className="w-full h-[36px] px-2 rounded-lg text-[14px]"
                href={INTERNAL_PATH.SEARCH}
                fillType="filled"
                size="medium"
                content="Tìm kiếm mentor"
                rightIcon={<ChevronRight className="pl-1 fill-white" />}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ForgotPasswordPage;
