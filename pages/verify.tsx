import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Button } from '~/components/ui';
import { ChevronRight, Home } from '~/components/ui/svgs/Icons';
import { INTERNAL_PATH } from '~/shared/constant';

import { Modal } from 'antd';
import { CheckCircleIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import { AuthService } from '~/services';
import { getErrorMessage } from '~/lib/types/service';

const Verify: NextPage = () => {
  const [isEmailSuccessfullyVerified, setIsEmailSuccessfullyVerified] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const { token } = router.query;

  const verifyToken = async () => {
    try {
      await AuthService.requestEmailVerification(token);
      setIsEmailSuccessfullyVerified(true);
    } catch (error) {
      const message = getErrorMessage(error);
      setErrorMessage(message);
    }
  };

  useEffect(() => {
    if (token) {
      verifyToken();
    }
  }, [token]);

  return (
    <>
      <Head>
        <title>
          {isEmailSuccessfullyVerified
            ? '✔️ Xác nhận email thành công'
            : 'Xác nhận email'}{' '}
        </title>
      </Head>

      <main className="h-screen" />

      <Modal
        width={900}
        open={isEmailSuccessfullyVerified}
        centered
        mask={false}
        closable={false}
        footer={null}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="mb-7" />

          <CheckCircleIcon className="animate-appear w-40 h-20 lg:w-50 lg:h-24 stroke-[#04942b]" />

          <div className="mb-7" />

          <div className="animate-appear-long flex flex-col justify-center items-center">
            <h1 className="-ml-[2px] font-lora font-semi-bold word-[-0.5rem] text-sub-heading md:text-heading text-black">
              Xác nhận email thành công!
            </h1>

            <div className="mb-3" />

            <h4 className="text-black font-manrope word-[0rem] text-body-md lg:text-heading-sm">
              Note: Bạn luôn có thể thay đổi thông tin cá nhân ở{' '}
              <span className="inline-block">phần Cài đặt.</span>
            </h4>

            <h4>{errorMessage}</h4>

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

export default Verify;
