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

const tagVariants = cva(
  'cursor-pointer border font-semi-bold font-manrope text-caption rounded-3xl px-2 py-1 inline-block relative group transition-colors ease-out duration-300',
  {
    variants: {
      type: {
        fill: 'text-gray-50 bg-gray-400 border-gray-700',
        outline: 'text-gray-600 border-gray-400',
      },
      colour: {
        purple: '',
        cyan: '',
        red: '',
        prussian: 'hover:border-prussian-200',
      },
    },
    compoundVariants: [
      {
        type: 'fill',
        colour: 'purple',
        className: 'hover:border-primary-800 hover:bg-primary-300',
      },
      {
        type: 'outline',
        colour: 'purple',
        className: 'hover:border-primary-300 hover:text-primary-700 ',
      },
      {
        type: 'fill',
        colour: 'cyan',
        className: 'hover:border-cyan-400 hover:bg-cyan-300 ',
      },
      {
        type: 'outline',
        colour: 'cyan',
        className: 'hover:border-cyan-100 hover:text-cyan-300 ',
      },
      {
        type: 'fill',
        colour: 'red',
        className: 'hover:border-red-400 hover:bg-red-300 ',
      },
      {
        type: 'outline',
        colour: 'red',
        className: 'hover:border-red-100 hover:text-red-300 ',
      },
      {
        type: 'fill',
        colour: 'prussian',
        className: 'hover:bg-prussian-400 ',
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
