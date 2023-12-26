import { twMerge } from '~/lib/utils';

interface WordBlockProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  bold?: boolean;
}

export const WordBlock = ({ children, className, bold }: WordBlockProps) => {
  return (
    <span className={twMerge('inline-block', bold && 'font-bold', className)}>
      {children}
    </span>
  );
};
