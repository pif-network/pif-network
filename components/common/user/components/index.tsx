import { UserRole } from '~/lib/types/user';
import { FIELD_METADATA, OFFER_METADATA, USER_ROLE } from '~/shared/constant';

import { Popover } from 'antd';
import { ReactNode } from 'react';
import Image from 'next/image';
import { Field, FormikHelpers } from 'formik';
import FormikInput from '~/components/ui/Input';
import FormikSelect from '~/components/ui/Select';

interface RoleChoosingPopoverProps {
  userType: UserRole;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean | undefined;
}

const MentorPopoverContent = () => (
  <div>
    Trở thành mentor ngay để đồng hành cùng các bạn trẻ yêu mến lập trình trên
    khắp cả nước.
  </div>
);
const MenteePopoverContent = () => (
  <div>
    Trở thành mentee ngay để nhận được sự hỗ trợ, đồng hành từ các mentors của{' '}
    <br />
    SheCodes trên con đường dấn thân vào ngành công nghệ của bạn.
  </div>
);

const RoleChoosingPopoverContent = (role: UserRole) =>
  role === USER_ROLE.MENTOR ? (
    <MentorPopoverContent />
  ) : (
    <MenteePopoverContent />
  );

export const RoleChoosingPopover = ({
  userType,
  onClick,
  disabled,
}: RoleChoosingPopoverProps) => {
  return (
    <Popover placement="bottom" content={RoleChoosingPopoverContent(userType)}>
      <button
        className={`px-6 py-3 transition ease-in-out duration-600 box-border border-[1px] border-black/75 hover:border-primary-100
          hover:bg-primary-100 rounded-sm hover:text-white font-lora font-semi-bold text-[18px]
          ${
            disabled === undefined
              ? ''
              : disabled
              ? 'border-black/50 text-black/60 scale-95'
              : 'bg-primary-300 text-white border-primary-300 scale-105 shadow-2xl'
          }`}
        onClick={onClick}
      >
        {userType}
      </button>
    </Popover>
  );
};

export const BrandIdentifierLayoutSlot = ({
  children,
}: {
  children: ReactNode;
}) => (
  <main className="flex h-screen max-w-max mx-auto px-4 md:ml-32 lg:mx-auto">
    <section className="h-screen w-full max-w-max md:min-w-[537px] md:pr-48 xl:pr-64 flex flex-col justify-center rounded-[36px] md:border-r">
      {children}
    </section>

    <section className="hidden md:flex justify-center items-center">
      <div className="delay-[3500] animate-fall group flex relative items-center py-[20px] -left-[73px] bg-[#F7F7F7] hover:-translate-y-3 transition-transform ease-in-out duration-300">
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
);

type EmptyRecord = Record<string, never>;

export const Step0InputPack = ({
  setFieldValue,
}: {
  setFieldValue: FormikHelpers<EmptyRecord>['setFieldValue'];
}) => (
  <>
    <Field name="name" as={FormikInput} />
    <Field
      className="border-gray-400"
      name="gender"
      options={[
        {
          value: 'male',
          label: 'Male',
        },
        {
          value: 'female',
          label: 'Female',
        },
      ]}
      onChange={(value: string) => setFieldValue('gender', value)}
      as={FormikSelect}
    />
    <Field
      name="description"
      type="text-area"
      rows={4}
      autoSize={{ minRows: 4, maxRows: 7 }}
      as={FormikInput}
    />
  </>
);

export const Step1InputPack = () => (
  <>
    <Field
      name="schoolName"
      label="Tên trường học"
      tooltipText="Mentor có thể là tiền bối của bạn đấy!"
      as={FormikInput}
    />
    <Field name="major" label="Chuyên ngành" as={FormikInput} />
    <Field
      name="title"
      label="Công việc hiện tại"
      placeholder="Sinh viên, Software engineer, etc."
      as={FormikInput}
    />
    <Field
      name="workplace"
      label="Nơi làm việc"
      placeholder="PIF Network, etc."
      as={FormikInput}
    />
  </>
);

export const MentorInputPack = ({
  setFieldValue,
}: {
  setFieldValue: FormikHelpers<EmptyRecord>['setFieldValue'];
}) => (
  <>
    <Field
      className="border-gray-400"
      name="fields"
      options={Object.entries(FIELD_METADATA).map(([key, data]) => ({
        value: key,
        label: data.displayName,
      }))}
      mode="multiple"
      maxTagCount="responsive"
      onChange={(value: string) => setFieldValue('fields', value)}
      as={FormikSelect}
    />
    <Field
      className="border-gray-400"
      name="offers"
      options={Object.entries(OFFER_METADATA).map(([key, data]) => ({
        value: key,
        label: data.displayName,
      }))}
      mode="multiple"
      maxTagCount="responsive"
      onChange={(value: string) => setFieldValue('offers', value)}
      as={FormikSelect}
    />
    <Field name="bookingUrl" label="Booking url" as={FormikInput} />
  </>
);

export const Step2InputPack = () => (
  <>
    <Field
      name="location"
      label="Thành phố của bạn"
      tooltipText="Thêm sự kết nối, thêm chủ đề để trò chuyên, vẹn cả đôi bên!"
      as={FormikInput}
    />
    <Field
      name="github"
      label="GitHub"
      placeholder="https://github.com/shecodesvietnam"
      as={FormikInput}
    />
    <Field
      name="linkedin"
      label="LinkedIn"
      placeholder="https://linkedin.com/company/shecodesvietnam"
      as={FormikInput}
    />
  </>
);
