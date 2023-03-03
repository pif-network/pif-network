import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';

import { AuthService, TokenService, UserService } from '~/services';
import { getErrorMessage } from '~/lib/types/service';
import { UserRole } from '~/lib/types/user';
import { INTERNAL_PATH, USER_ROLE } from '~/shared/constant';
import { Button, Input as FormikInput, Link, Divider } from '~/components/ui';
import {
  ChevronRight,
  GoogleFill,
  Home,
  SendingMailLine,
} from '~/components/ui/svgs/Icons';
import { RoleChoosingPopover, BrandIdentifierLayoutSlot } from './components';

import { object, string } from 'yup';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { Alert } from 'antd';
import Modal from 'antd/lib/modal/Modal';

const CreateAccount = () => {
  const router = useRouter();
  const { role: predefinedRole, id, at, rt } = router.query;

  const checkIfRegisterWithGoogleSuccessfully = async (id: string) => {
    try {
      const user = await UserService.getUserById(id);
      UserService.setUser(user.data.data);

      const token = {
        accessToken: at as string,
        refreshToken: rt as string,
      };

      TokenService.setToken(token);

      axios.defaults.headers.common['authorization'] = token.accessToken;
      axios.defaults.headers.common['refresh-token'] = token.refreshToken;

      router.push(INTERNAL_PATH.COMPLETE_PROFILE);
    } catch (error) {
      console.log(error);
    }
  };

  const [role, setRole] = useState<UserRole | undefined>(undefined);

  useEffect(() => {
    if (typeof id === 'string') {
      checkIfRegisterWithGoogleSuccessfully(id);
      window.history.pushState(null, '', location.href.split('?')[0]);
    }

    if (typeof predefinedRole === 'string') {
      setRole(
        predefinedRole === USER_ROLE.MENTOR
          ? USER_ROLE.MENTOR
          : predefinedRole === USER_ROLE.MENTEE
          ? USER_ROLE.MENTEE
          : undefined
      );
    }
  }, [id, predefinedRole]);

  const [message, setMessage] = useState('');
  const [
    isSuccessfullyRegisteredModalOpen,
    setIsSuccessfullyRegisteredModalOpen,
  ] = useState(false);

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
          await AuthService.register(email, password, role);
          setIsSuccessfullyRegisteredModalOpen(true);
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
        <title>
          {isSuccessfullyRegisteredModalOpen
            ? '❤️ Cảm ơn bạn đã đăng ký!'
            : 'Đăng ký'}
        </title>
      </Head>

      {!isSuccessfullyRegisteredModalOpen && (
        <BrandIdentifierLayoutSlot>
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

          <div className="flex justify-start space-x-4">
            <RoleChoosingPopover
              userType={USER_ROLE.MENTEE}
              onClick={() => setRole(USER_ROLE.MENTEE)}
              disabled={role ? role !== USER_ROLE.MENTEE : undefined}
            />
            <RoleChoosingPopover
              userType={USER_ROLE.MENTOR}
              onClick={() => setRole(USER_ROLE.MENTOR)}
              disabled={role ? role !== USER_ROLE.MENTOR : undefined}
            />
          </div>

          <div className="mb-4" />

          {role && (
            <>
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
                    <Link href={INTERNAL_PATH.FORGOT_PASSWORD}>
                      Quên mật khẩu?
                    </Link>
                  </div>

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
                        content="Đăng ký"
                      />
                    )}
                  </div>

                  <Divider>Hoặc đăng ký với</Divider>

                  <Button
                    className="max-w-md w-full h-[42px] flex items-center justify-center border-[1px] border-gray-600/50
                  text-[18px] md:text-sub-heading rounded-lg"
                    external
                    href={`http://localhost:8080/api/auth/google?role=${role}`}
                    type="button"
                    fillType="outlined"
                    size="medium"
                    content={
                      <>
                        <GoogleFill className="pr-2" /> Google
                      </>
                    }
                    disabled={!role}
                  />
                </Form>
              </FormikProvider>
            </>
          )}
        </BrandIdentifierLayoutSlot>
      )}

      <Modal
        width={900}
        open={isSuccessfullyRegisteredModalOpen}
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

export default CreateAccount;
