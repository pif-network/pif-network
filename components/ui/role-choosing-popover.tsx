import { UserRole } from '~/lib/types/user';
import { USER_ROLE } from '~/shared/constant';

import { Popover } from 'antd';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '~/components/ui/tooltip';

interface RoleChoosingPopoverProps {
  userType: UserRole;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean | undefined;
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

export default ({ userType, onClick, disabled }: RoleChoosingPopoverProps) => {
  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger asChild>
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
          type="button"
          onClick={onClick}
        >
          {userType}
        </button>
      </TooltipTrigger>
      <TooltipContent>{RoleChoosingPopoverContent[userType]()}</TooltipContent>
    </Tooltip>
  );
};
