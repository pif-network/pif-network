'use client';

import { forwardRef } from 'react';

import { GENDER_OPTION, USER_ROLE } from '~/shared/constant';
import { Input, RoleChoosingPopover } from '~/components/ui';
import { userSchema } from '~/lib/types/user';

import { useFormContext } from 'react-hook-form';
import * as z from 'zod';

export * from './step-0-pack';
export * from './step-1-pack';
export * from './description-pack';
export * from './step-2-pack';
export * from './mentor-step-3-pack';

export const formSchema = userSchema;

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
