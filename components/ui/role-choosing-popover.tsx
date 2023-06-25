import { UserRole } from '~/lib/types/user';
import { USER_ROLE } from '~/shared/constant';

import { Popover } from 'antd';

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

const RoleChoosingPopoverContent = {
  [USER_ROLE.MENTOR]: MentorPopoverContent,
  [USER_ROLE.MENTEE]: MenteePopoverContent,
};

export default ({ userType, onClick, disabled }: RoleChoosingPopoverProps) => {
  return (
    <Popover placement="bottom" content={RoleChoosingPopoverContent[userType]}>
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
    </Popover>
  );
};
