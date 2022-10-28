import { Popover } from 'antd'

interface Props {
  role: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const MentorPopoverContent = () => (
  <div>
    Trở thành mentor ngay để đồng hành cùng các bạn trẻ yêu mến lập trình trên
    khắp cả nước.
  </div>
)
const MenteePopoverContent = () => (
  <div>
    Trở thành mentee ngay để nhận được sự hỗ trợ, đồng hành từ các mentors của{' '}
    <br />
    SheCodes trên con đường dấn thân vào ngành công nghệ của bạn.
  </div>
)

const RoleChoosingPopoverContent = (role: string) =>
  role === 'Mentor' ? <MentorPopoverContent /> : <MenteePopoverContent />

export const RoleChoosingPopover = ({ role, onClick }: Props) => {
  return (
    <Popover placement="bottom" content={RoleChoosingPopoverContent(role)}>
      <button
        className="px-6 py-3 transition ease-in-out duration-600 box-border border-[1px] border-primary-900 
        hover:border-primary-100 hover:bg-primary-100 active:bg-primary-300 focus:bg-primary-300 focus:border-primary-300
        focus:text-white focus:scale-105 focus:shadow-2xl rounded hover:text-white font-lora font-semi-bold text-[18px]"
        onClick={onClick}
      >
        {role}
      </button>
    </Popover>
  )
}
