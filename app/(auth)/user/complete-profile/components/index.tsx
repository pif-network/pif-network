import { forwardRef } from 'react';

import { GENDER_OPTION, USER_ROLE } from '~/shared/constant';
import { Input, RoleChoosingPopover } from '~/components/ui';

import { useFormContext } from 'react-hook-form';
import * as z from 'zod';

export * from './step-0-pack';
export * from './step-1-pack';
export * from './step-2-pack';
export * from './mentor-step-3-pack';

export const formSchema = z.object({
  role: z.enum([USER_ROLE.MENTEE, USER_ROLE.MENTOR]),
  name: z.string().min(2).max(50),
  gender: z.enum([
    GENDER_OPTION.MALE.value,
    GENDER_OPTION.FEMALE.value,
    GENDER_OPTION.OTHER.value,
  ]),
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

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formTriggerBlur: () => void;
}

export const FormInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, formTriggerBlur, ...props }, ref) => {
    return (
      <Input
        className={className}
        ref={ref}
        {...props}
        onChange={e => {
          props.onChange?.(e);
          formTriggerBlur();
        }}
      />
    );
  }
);
FormInput.displayName = 'FormInput';
