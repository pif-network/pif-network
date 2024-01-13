import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui';

interface ReviewCardProps {
  name: string;
  avatar: string;
  text: string;
}
const ReviewCard = ({ name, avatar, text }: ReviewCardProps) => {
  return (
    <div className="max-w-104 mb-3 flex flex-col justify-between">
      <div className="flex items-center">
        <Avatar className="inline">
          <AvatarImage src={avatar} className="w-9 h-9 rounded-full" />
          <AvatarFallback>SCN</AvatarFallback>
        </Avatar>
        <div className="ml-2">
          <div className="flex items-center gap-2">
            <h2 className="text-body-md md:text-sub-heading text-primary-900 font-semi-bold font-lora word-[-6px]">
              {name}
            </h2>
            <span className="text-[#D9D9D9]">●</span>
            <span className="text-caption text-gray-600">yesterday</span>
          </div>
          <span className="text-caption text-gray-600">Student at RMIT</span>
        </div>
      </div>

      <p className="text-caption md:text-body-md">{text}</p>
    </div>
  );
};

export { ReviewCard };
