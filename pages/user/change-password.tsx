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

const ChangePasswordPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (
      !UserService.currentUser ||
      UserService.currentUser.registeringMethod === 'google'
    )
      router.push(INTERNAL_PATH.HOME);
  }, []);

  const [errorMessage, setErrorMessage] = useState('');
  const [
    isResetPasswordEmailSentSuccessfullyModalOpen,
    setIsResetPasswordEmailSentSuccessfullyModalOpen,
  ] = useState(false);

  const validationSchema = object({
    currentPassword: string().required('Password is required'),
    newPassword: string().required('New password is required'),
    newPasswordConfirmation: string()
      .required('Please confirm your new password.')
      .test('passwords-should-match', 'Passwords must match', function (value) {
        return this.parent.newPassword === value;
      }),
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      newPasswordConfirmation: '',
    },
    validationSchema,
    onSubmit: async ({
      currentPassword,
      newPassword,
      newPasswordConfirmation,
    }) => {
      try {
        console.log('submitting');
        const res = await AuthService.requestPasswordChange(
          currentPassword,
          newPassword,
          newPasswordConfirmation
        );
        console.log(res);
        setIsResetPasswordEmailSentSuccessfullyModalOpen(true);
      } catch (error) {
        setErrorMessage(getErrorMessage(error));
      }
    },
  });

  return (
    <>
      <Head>
        <title>Thay đổi mật khẩu</title>
      </Head>

      {!isResetPasswordEmailSentSuccessfullyModalOpen && (
        <BrandIdentifierLayoutSlot>
          <h1 className="-ml-[2px] text-left font-lora word-[-0.23rem] text-sub-heading md:text-heading text-black font-regular">
            🔑 Thay đổi mật khẩu của bạn
          </h1>

          <div className="mb-6" />

          <div className="grid place-items-start max-w-sm">
            <h4 className="text-left text-gray-600 font-manrope word-[0rem] text-body-md">
              Một mật khẩu mạnh bao gồm nhưng không giới hạn chữ cái, chữ số, và
              ký tự đặc biệt một cách ngẫu nhiên.
            </h4>
          </div>

          <div className="mb-6 md:mb-8" />

          <FormikProvider value={formik}>
            <Form className="max-w-sm flex flex-col">
              {errorMessage && (
                <Alert
                  className="my-4 font-manrope"
                  message={errorMessage}
                  type="error"
                  showIcon
                />
              )}

              <Field
                name="currentPassword"
                type="password"
                label="Mật khẩu hiện tại"
                as={FormikInput}
              />
              <Field
                name="newPassword"
                type="password"
                label="Mật khẩu mới"
                as={FormikInput}
              />
              <Field
                name="newPasswordConfirmation"
                type="password"
                label="Xác nhận mật khẩu mới"
                as={FormikInput}
              />

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
                  content="Thay đổi mặt khẩu"
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

export default ChangePasswordPage;
