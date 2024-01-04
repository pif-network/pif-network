import { Cross2Icon } from '@radix-ui/react-icons';
import { HTMLAttributes } from 'react';
import { twMerge } from '~/lib/utils';
import { FIELD_METADATA } from '~/shared/constant';

export type TagColour =
  (typeof FIELD_METADATA)[keyof typeof FIELD_METADATA]['tagColour'];
type TagType = 'filled' | 'outlined';

interface TagProps extends HTMLAttributes<HTMLElement> {
  color: TagColour;
  type: TagType;
  deletable?: boolean;
  onDelete?: (e: React.MouseEvent<HTMLElement>) => void;
}

const hoverPresetByType = {
  purple: {
    outlined: 'hover:text-purple-400 hover:border-purple-400',
    filled: 'hover:border-purple-400 hover:bg-purple-300',
  },
  red: {
    outlined: 'hover:text-red-300 hover:border-red-300',
    filled: 'hover:border-red-300 hover:bg-red-200',
  },
  cyan: {
    outlined: 'hover:text-yan-300 hover:border-cyan-300',
    filled: 'hover:border-can-300 hover:bg-cyan-200',
  },
  prussian: {
    outlined: 'hover:text-yan-300 hover:border-cyan-300',
    filled: 'hover:border-can-300 hover:bg-cyan-200',
  },
};

const deleteBgByType = Object.values(FIELD_METADATA).reduce((acc, value) => {
  acc[value.tagColour] = `bg-${value.tagColour}-200`;
  return acc;
}, {} as { [Property in TagColour]: string });

const defaultPresetByType = {
  outlined: 'text-gray-600 bg-white border-gray-400',
  filled: 'text-gray-50 bg-gray-400 border-gray-700',
};

export const Tag: React.FC<TagProps> = ({
  children,
  color: colour,
  type,
  deletable,
  onDelete,
}) => {
  // const colorClasses = `${} ${} `;
  const colorClasses = twMerge(
    defaultPresetByType[type],
    hoverPresetByType[colour][type],
    'transition-colors ease-out duration-300'
  );
  return (
    <div
      className={`${colorClasses} cursor-pointer border font-semi-bold font-manrope text-caption rounded-3xl px-2 py-1 inline-block relative group`}
    >
      {children}
      {deletable && (
        <div onClick={onDelete}>
          <Cross2Icon
            className={`invisible group-hover:visible text-caption absolute top-[0.2rem] h-[1.125rem] right-1 w-3.5 cursor-pointer ${
              type === 'outlined' ? 'bg-white' : deleteBgByType[colour]
            }`}
          />
        </div>
      )}
    </div>
  );
};
