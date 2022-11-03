import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AuthService } from '~/services';
import { VerifyEmail } from '~/lib/types/service';

import { ArrowRightOutlined, CheckOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

const VerifyEmail = () => {
  const [verifyState, setVerifyState] = useState<
    Awaited<ReturnType<VerifyEmail>>
  >({
    hasVerifiedSuccess: false,
    message: '',
  });
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (!isReady) return;

    const VerifyEmailFromUrlToken = async () => {
      const { hasVerifiedSuccess, message } =
        await AuthService.requestEmailVerification(query.token);

      setVerifyState({ hasVerifiedSuccess, message });
    };

    VerifyEmailFromUrlToken();
  }, [isReady]);

  return (
    <>
      <Head>
        <title>Verify Your Email</title>
      </Head>

      <div className="min-h-screen/85 md:bg-lightgray bg-white px-0 md:px-16 py-0 md:py-12">
        <Row>
          <Col
            className="bg-white md:bg-primary flex h-screen justify-center items-center rounded-xl w-3/5"
            xs={24}
            sm={18}
          >
            <div className="w-2/3">
              <div className="md:flex-col-reverse text-white text-4xl flex items-center">
                <h1 className="text-black md:text-white text-center">
                  {verifyState.message}
                </h1>
                <CheckOutlined />
              </div>
              <div className="flex justify-center items-center text-black md:text-white mt-8">
                <Link href="/login" className="underline">
                  Đăng nhập
                </Link>
                <ArrowRightOutlined style={{ marginLeft: '6px' }} />
              </div>
            </div>
          </Col>
          <Col
            className="h-screen bg-white w-2/5 md:flex items-center justify-center hidden"
            xs={0}
            sm={6}
          >
            <div className="relative">
              <div className="flex justify-center -translate-x-1/2">
                <Image
                  src="/images/email-successfully-verified.svg"
                  width={604}
                  height={558}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default VerifyEmail;
