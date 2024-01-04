import { Cross2Icon } from '@radix-ui/react-icons';
import { cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { twMerge } from '~/lib/utils';
import { FIELD_METADATA } from '~/shared/constant';

export type TagColour =
  (typeof FIELD_METADATA)[keyof typeof FIELD_METADATA]['tagColour'];
type TagType = 'fill' | 'outline';

interface TagProps extends HTMLAttributes<HTMLElement> {
  colour: TagColour;
  type: TagType;
  deletable?: boolean;
  onDelete?: (e: React.MouseEvent<HTMLElement>) => void;
}

const hoverPresetByType = {
  purple: {
    outlined: 'hover:text-purple-400 ',
    filled: 'hover:border-purple-400 ',
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

const tagVariants = cva(
  'cursor-pointer border font-semi-bold font-manrope text-caption rounded-3xl px-2 py-1 inline-block relative group transition-colors ease-out duration-300',
  {
    variants: {
      type: {
        fill: 'text-gray-50 bg-gray-400 border-gray-700',
        outline: 'text-gray-600 border-gray-400',
      },
      colour: {
        purple: 'hover:border-purple-400',
        cyan: 'hover:border-cyan-300',
        red: 'hover:border-red-400',
        prussian: 'hover:border-prussian-400',
      },
    },
    compoundVariants: [
      {
        type: 'fill',
        colour: 'purple',
        className: 'hover:bg-purple-300',
      },
      {
        type: 'outline',
        colour: 'purple',
        className: 'hover:text-purple-400 ',
      },
      {
        type: 'fill',
        colour: 'cyan',
        className: 'hover:bg-cyan-300 ',
      },
      {
        type: 'outline',
        colour: 'cyan',
        className: 'hover:text-cyan-300 ',
      },
      {
        type: 'fill',
        colour: 'red',
        className: 'hover:bg-red-300 ',
      },
      {
        type: 'outline',
        colour: 'red',
        className: 'hover:text-red-300 ',
      },
      {
        type: 'fill',
        colour: 'prussian',
        className: 'hover:bg-prussian-300 ',
      },
      {
        type: 'outline',
        colour: 'prussian',
        className: 'hover:text-prussian-300 ',
      },
    ],
  }
);

export const Tag: React.FC<TagProps> = ({
  children,
  colour,
  type,
  deletable,
  onDelete,
}) => {
  return (
    <div className={twMerge(tagVariants({ type, colour }))}>
      {children}
      {deletable && (
        <div onClick={onDelete}>
          <Cross2Icon className={''} />
        </div>
      )}
    </div>
  );
};
