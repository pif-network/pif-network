import { UserRole } from '~/lib/types/user';
import { FIELD_METADATA, OFFER_METADATA, USER_ROLE } from '~/shared/constant';
import FormikSelect from '~/components/ui/Select';
import { FormikInput, RoleChoosingPopover } from '~/components/ui';

import { Field, FormikHelpers, useFormikContext } from 'formik';
import { useFormContext } from 'react-hook-form';
import * as z from 'zod';

export const formSchema = z.object({
  role: z.enum([USER_ROLE.MENTEE, USER_ROLE.MENTOR]),
  name: z.string().min(2).max(50),
  gender: z.enum(['men', 'women', 'other']),
  description: z.string().min(2).max(500),
  schoolName: z.string().min(2).max(50),
  major: z.string().min(2).max(50),
  title: z.string().min(2).max(50),
  workplace: z.string().min(2).max(50),
  location: z.string().min(2).max(50),
  github: z.string().min(2).max(50),
  linkedin: z.string().min(2).max(50),
  fields: z.array(z.string()),
  offers: z.array(z.string()),
  bookingUrl: z.string().min(2).max(50),
});

export type FormSchema = z.infer<typeof formSchema>;

type EmptyRecord = Record<string, never>;

export const RoleChoosingInputPack = () => {
  const RoleDescription = {
    [USER_ROLE.MENTEE]: `Hòa mình vào một cộng đồng, kết nối để khám phá nhiều hơn về bản thân
        cũng như thế giới xung quanh; mở rộng tầm nhìn, trải nghiệm, kỹ năng, và kiến thức;
        trở thành người tự tin, có định hướng và khả năng thích ứng với sự thay đổi.`,
    [USER_ROLE.MENTOR]: `Trở thành người truyền cảm hứng, người hướng dẫn, người đồng hành,
        cung cấp sự giúp đỡ, truyền nhiệt huyết, dùng thời gian và lòng tốt của bản thân để
        in lại một dấu vết vào cuộc đời của người khác.`,
  };

  const form = useFormContext<FormSchema>();

  const role = form.getValues('role');

  const roleDescription = RoleDescription[role];

  return (
    <section className="flex flex-col gap-8">
      <h4 className="text-left text-black font-manrope word-[0rem] text-body-sm md:text-[14px]">
        Vui lòng lựa chọn vị trí của bạn.
      </h4>

      <div className="flex justify-start gap-4">
        <RoleChoosingPopover userType={USER_ROLE.MENTEE} />
        <RoleChoosingPopover userType={USER_ROLE.MENTOR} />
      </div>

      <h2 className="italic text-body">{roleDescription}</h2>
    </section>
  );
};

export const Step0InputPack = ({
  setFieldValue,
}: {
  setFieldValue: FormikHelpers<EmptyRecord>['setFieldValue'];
}) => (
  <>
    <FormikInput name="name" />
    <FormikSelect name="gender" />
    <FormikInput name="description" type="text-area" />
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
