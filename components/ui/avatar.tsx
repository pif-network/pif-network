import Image from 'next/image';

import { PersonIcon } from '@radix-ui/react-icons';

type AvatarProps = {
  src?: string;
  alt?: string;
  emptyState?: React.ReactNode;
};

const emptyRectangleAvatar = (
  <PersonIcon className="text-title text-gray-400" />
);

const emptyAvatar = (
  <PersonIcon className="text-body text-gray-400 -translate-y-0.5" />
);

export const RectangleAvatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  emptyState = emptyRectangleAvatar,
}) => (
  <div className="h-[22rem] min-w-[17rem] flex items-center justify-center border-[1px] rounded-[32px] overflow-hidden relative">
    {src ? <Image src={src} alt={alt} fill /> : emptyState}
  </div>
);

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  emptyState = emptyAvatar,
}) => (
  <div className="h-[30px] w-[30px] md:h-[60px] md:w-[60px] inline-flex items-center justify-center bg-gray-50 rounded-[50%] relative">
    {src ? <Image src={src} alt={alt} fill /> : emptyState}
  </div>
);
