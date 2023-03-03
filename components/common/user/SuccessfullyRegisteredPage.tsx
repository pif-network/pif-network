import Head from 'next/head';

import { SendingMailLine } from '~/components/ui/svgs/Icons';

const ConfirmEmail = () => {
  return (
    <>
      <Head>
        <title>❤️ Cảm ơn bạn đã đăng ký!</title>
      </Head>

      <main className="flex h-screen max-w-max mx-auto px-4 md:ml-32 lg:mx-auto">
        <section className="h-screen w-full max-w-max md:min-w-[537px] flex flex-col justify-center items-center">
          {/* <div className="min-w-[375px]" /> */}
          <SendingMailLine className="w-40 h-20" />

          <h2 className="-ml-[2px] text-center font-lora word-[-0.23rem] text-sub-heading md:text-heading text-black font-regular">
            Email xác nhận đã được gửi đi.
          </h2>
        </section>
      </main>
    </>
  );
};

export default ConfirmEmail;
