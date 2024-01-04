import { cva } from 'class-variance-authority';
import { twMerge } from '~/lib/utils';

const sectionTitleVariants = cva(
  'rounded-sm border mb-1 border-primary-900 opacity-20',
  {
    variants: {
      size: {
        big: 'w-8',
        small: 'w-4',
      },
    },
    defaultVariants: {
      size: 'big',
    },
  }
);

interface Props {
  children?: React.ReactNode;
  content?: string;
  size?: 'big' | 'small';
}

export const SectionTitle = ({ children, content, size }: Props) => {
  return (
    <div>
      <div className={twMerge(sectionTitleVariants({ size }))} />
      {children}
    </div>
  );
};
