'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';

import { getErrorMessage } from '~/lib/types/service';
import { User, UserRole } from '~/lib/types/user';
import { api } from '~/lib/trpc/client';
import { INTERNAL_PATH, USER_ROLE } from '~/shared/constant';
import { ChevronRight, Home } from '~/components/ui/svgs/icons';
import { Button, Form, WordBlock } from '~/components/ui';
import {
  Step0InputPack,
  Step1InputPack,
  DescriptionPack,
  Step2InputPack,
  MentorInputPack,
  RoleChoosingInputPack,
  formSchema,
} from './components';

import { useAutoAnimate } from '@formkit/auto-animate/react';
import * as z from 'zod';
import { ArrowLeftIcon, CheckCircledIcon } from '@radix-ui/react-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const CompleteProfile = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [currentFillingStep, setCurrentFillingStep] = useState(-1);
  const [
    isProfileSuccessfullyUpdatedModalOpen,
    setIsProfileSuccessfullyUpdatedModalOpen,
  ] = useState(false);

  const postUser = api.user.updateProfile.useMutation();

  // TODO: Well, fix this.
  const MAX_FILLING_STEPS = {
    [USER_ROLE.MENTEE]: 3,
    [USER_ROLE.MENTOR]: 4,
  };

  const formInitialValues = {
    role: 'Mentee',
    name: '',
    gender: 'male',
    description: '',
    schoolName: '',
    major: '',
    title: '',
    workplace: '',
    location: '',
    githubUrl: '',
    linkedinUrl: '',
    fields: [] as string[],
    offers: [] as string[],
    bookingUrl: '',
  } as const;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: formInitialValues,
    mode: 'onChange',
  });
  const watch = form.watch();

  const onSubmit = () => {
    try {
      setErrorMessage('');
      postUser.mutate(watch);

      // setIsProfileSuccessfullyUpdatedModalOpen(true);
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      setErrorMessage(errorMessage);
    }
  };

  const STEP_FIELD_MAP: { [key: number]: string[] } = {
    '-1': ['role'],
    0: ['name', 'gender'],
    1: ['schoolName', 'major', 'title', 'workplace'],
    2: ['description'],
    3: ['location', 'githubUrl', 'linkedinUrl'],
  };

  if (watch.role === USER_ROLE.MENTOR) {
    STEP_FIELD_MAP[4] = ['fields', 'offers', 'bookingUrl'];
  }

  const shouldDisableButtonNextStep = () => {
    const {
      formState: { touchedFields, errors },
    } = form;

    console.log('touchedFields', touchedFields);
    console.log('errors', errors);
    console.log('watch', watch);

    const currentStepHasError = STEP_FIELD_MAP[currentFillingStep]?.some(
      field => Object.keys(errors).includes(field)
    );
    const currentStepAllTouched = STEP_FIELD_MAP[currentFillingStep]?.every(
      field => Object.keys(touchedFields).includes(field)
    );

    console.log('--- ---');

    if (currentFillingStep === -1) return false;

    return currentStepHasError || !currentStepAllTouched;
  };

  const [formRef, _] = useAutoAnimate({});

  return (
    <>
      <Head>
        <title>Hoàn thành hồ sơ của bạn tại PIF Network</title>
      </Head>

      {!isProfileSuccessfullyUpdatedModalOpen && (
        <main className="flex h-screen max-w-max mx-auto md:ml-32 lg:mx-auto">
          <section className="h-screen md:min-w-[537px] max-w-xl md:pr-48 xl:pr-64 mx-4 flex flex-col justify-center rounded-[36px] md:border-r">
            <div className="mt-3 mb-2 text-left font-manrope font-regular text-body-sm">
              👋 Chào mừng bạn.
            </div>

            <h1 className="text-left font-lora font-regular word-[-0.23rem] text-black text-sub-heading md:text-heading-md">
              Để chúng tôi hiểu thêm <WordBlock>một chút về bạn nhé?</WordBlock>
              <span className="font-light text-caption">*</span>
            </h1>

            <div className="mb-6" />

            <Form {...form}>
              <form
                ref={formRef}
                className="max-w-sm flex flex-col"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                {/* {errorMessage && ( */}
                {/*   <Alert */}
                {/*     className="mt-2 mb-6 font-manrope" */}
                {/*     message={errorMessage} */}
                {/*     type="error" */}
                {/*     showIcon */}
                {/*   /> */}
                {/* )} */}

                {currentFillingStep === -1 && <RoleChoosingInputPack />}

                {currentFillingStep === 0 && <Step0InputPack />}

                {currentFillingStep === 1 && <Step1InputPack />}

                {currentFillingStep === 2 && <DescriptionPack />}

                {currentFillingStep === 3 && <Step2InputPack />}

                {currentFillingStep === 4 &&
                  watch.role === USER_ROLE.MENTOR && <MentorInputPack />}
              </form>
            </Form>

            <div className="mb-6" />

            {/* To minimise distraction, guiding text will only appear once. */}
            {currentFillingStep === 0 ? (
              <>
                <h4 className="text-left text-gray-400 font-manrope word-[0rem] text-caption">
                  [*] Những thông tin bạn cung cấp ngay sau đây, mặc dù không
                  tất yếu, nhưng sẽ vô cùng hữu ích cho mentors của bạn sau này.
                </h4>
                <div className="mb-8" />
              </>
            ) : (
              <div className="mb-4" />
            )}

            <div className="w-full flex gap-4">
              <Button
                className="group h-[42px] border-primary-900/60"
                variant="outline"
                onClick={() => {
                  if (currentFillingStep === -1) return;
                  else setCurrentFillingStep(currentFillingStep - 1);
                }}
                disabled={currentFillingStep === -1}
              >
                {currentFillingStep === -1 ? (
                  <ArrowLeftIcon className="w-5 h-5 text-gray-600" />
                ) : (
                  <ArrowLeftIcon className="w-5 h-5 text-gray-600 transition group-hover:-translate-x-[2px] group-hover:text-gray-700" />
                )}
              </Button>
              {form.formState.isSubmitting ? (
                <div className="w-full flex justify-center items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black" />
                </div>
              ) : (
                <Button
                  className="w-full h-[42px] text-[16px]"
                  type="submit"
                  onClick={async () => {
                    if (currentFillingStep < MAX_FILLING_STEPS[watch.role])
                      setCurrentFillingStep(currentFillingStep + 1);
                    else await form.handleSubmit(onSubmit)();
                  }}
                  disabled={shouldDisableButtonNextStep()}
                >
                  Tiếp tục
                </Button>
              )}
            </div>
          </section>

          <section className="hidden md:flex justify-center items-center">
            <div
              className="delay-[3500] animate-fall group flex relative items-center py-[20px] -left-[89px] bg-[#F7F7F7]
            hover:-translate-y-3 transition-transform ease-in-out duration-300"
            >
              <Image
                src="/images/logo.png"
                width={130}
                height={33}
                alt="SheCodesVietnam Logo"
              />
              <h2 className="ml-3 pb-2 font-manrope font-light md:text-body-lg xl:text-heading">
                Bridge to knowledge
              </h2>
            </div>
          </section>
        </main>
      )}

      {/* <Modal */}
      {/*   width={900} */}
      {/*   open={isProfileSuccessfullyUpdatedModalOpen} */}
      {/*   centered */}
      {/*   mask={false} */}
      {/*   closable={false} */}
      {/*   footer={null} */}
      {/* > */}
      {/*   <div className="flex flex-col justify-center items-center"> */}
      {/*     <div className="mb-7" /> */}
      {/**/}
      {/*     <CheckCircledIcon className="animate-appear w-40 h-20 lg:w-50 lg:h-24 stroke-[#04942b]" /> */}
      {/**/}
      {/*     <div className="mb-7" /> */}
      {/**/}
      {/*     <div className="animate-appear-long flex flex-col justify-center items-center"> */}
      {/*       <h1 className="-ml-[2px] font-lora font-semi-bold word-[-0.5rem] text-sub-heading md:text-heading text-black"> */}
      {/*         Cập nhật thông tin thành công! */}
      {/*       </h1> */}
      {/**/}
      {/*       <div className="mb-3" /> */}
      {/**/}
      {/*       <h4 className="text-black font-manrope word-[0rem] text-body-md lg:text-heading-sm"> */}
      {/*         Note: Bạn luôn có thể thay đổi thông tin cá nhân ở{' '} */}
      {/*         <span className="inline-block">phần Cài đặt.</span> */}
      {/*       </h4> */}
      {/**/}
      {/*       <div className="mb-8" /> */}
      {/**/}
      {/*       <div className="w-[250px] flex gap-4"> */}
      {/*         <Button */}
      {/*           // href={INTERNAL_PATH.HOME} */}
      {/*           className="border-primary-900/60" */}
      {/*           type="button" */}
      {/*           variant="outline" */}
      {/*         > */}
      {/*           <Home className="w-4 h-4" /> */}
      {/*         </Button> */}
      {/*         <Button */}
      {/*           // href={INTERNAL_PATH.SEARCH} */}
      {/*           className="w-full h-[36px] px-2 rounded-lg text-[14px]" */}
      {/*         > */}
      {/*           Tìm kiếm mentor */}
      {/*           <ChevronRight className="pl-1 fill-white" /> */}
      {/*         </Button> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </Modal> */}
    </>
  );
};

export default CompleteProfile;
