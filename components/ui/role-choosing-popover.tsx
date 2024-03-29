import { UserRole } from '~/lib/types/user';
import { USER_ROLE } from '~/shared/constant';

import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui';

import { Control, useFormContext, useWatch } from 'react-hook-form';
import { FormSchema } from '~/app/(auth)/user/complete-profile/components';

interface RoleChoosingPopoverProps {
  userType: UserRole;
}

const MentorPopoverContent = () => <div>Pay it forward.</div>;
const MenteePopoverContent = () => (
  <div>
    <i>Will</i> pay it forward.
  </div>
);

const RoleChoosingPopoverContent = {
  [USER_ROLE.MENTOR]: MentorPopoverContent,
  [USER_ROLE.MENTEE]: MenteePopoverContent,
};

export const RoleChoosingPopover = ({ userType }: RoleChoosingPopoverProps) => {
  const form = useFormContext<FormSchema>();
  const role = useWatch({
    // <- This triggers re-renders.
    name: 'role',
  });

  const shouldShrink = role !== userType;

  const handleOnClick = async () => {
    form.setValue('role', userType, {
      shouldTouch: true,
    });
  };

  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger asChild>
        <button
          className={`px-6 py-3 transition ease-in-out duration-600 box-border border-[1px] border-black/75 hover:border-primary-100
          hover:bg-primary-100 rounded-sm hover:text-white font-lora font-semi-bold text-[18px]
          ${
            shouldShrink
              ? 'border-black/50 text-black/60 scale-95'
              : 'bg-primary-300 text-white border-primary-300 scale-105 shadow-2xl'
          }`}
          type="button"
          onClick={handleOnClick}
        >
          {userType}
        </button>
      </TooltipTrigger>
      <TooltipContent>{RoleChoosingPopoverContent[userType]()}</TooltipContent>
    </Tooltip>
  );
};
