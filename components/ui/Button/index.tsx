import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';

import type { ExternalHrefProps } from '~/lib/types';
import { ChevronRight, FlagLine } from '~/components/ui/svgs/Icons';
import { Link } from '~/components/ui';
import twMerge from '~/lib/utils/tw-merge';

interface GeneralButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: ReactNode;
  className?: string;
  style?: any;
  size: 'medium' | 'small';
  fillType: 'outlined' | 'filled';
  rightIcon?: ReactNode;
}

type Props = GeneralButtonProps & ExternalHrefProps;

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      content,
      className,
      href,
      external,
      size,
      fillType,
      rightIcon,
      ...others
    },
    ref
  ) => {
    const baseStyle =
      'hover:-translate-y-[3px] ease-in duration-200 active:scale-[.9] rounded-xl';

    const styleByType = {
      filled: {
        small:
          'py-1 px-6 border border-primary-900 bg-primary-800 text-white font-manrope font-bold text-body-md',
        medium:
          'py-2.5 px-7 border border-primary-900 bg-primary-800 text-white cword-[-4px] font-lora font-semi-bold text-sub-heading',
        iconFill: 'white',
      },
      outlined: {
        small:
          'py-1 px-6 border border-primary-900 bg-white text-gray-700 font-manrope font-bold text-body-md',
        medium:
          'py-2.5 px-7 border border-primary-900 bg-white text-gray-700 font-manrope font-bold text-sub-heading',
        iconFill: 'black',
      },
    };

    const cn = twMerge(styleByType[fillType][size], baseStyle, className);

    if (!href) {
      return (
        <button className={cn} ref={ref} {...others}>
          <span className="inline-flex">
            {content}
            {rightIcon === 'ChevronRight' && (
              <ChevronRight
                className="pt-[2px] pl-1 fill-white"
                colour={`${styleByType[fillType]['iconFill']}`}
              />
            )}
            {rightIcon === 'FlagLine' && (
              <FlagLine colour={`${styleByType[fillType]['iconFill']}`} />
            )}
          </span>
        </button>
      );
    }

    return (
      <Link external={external as any} href={href} passHref>
        <button className={cn} ref={ref} {...others}>
          <span className="inline-flex gap-[2px]">
            {content}
            {/* Default `rightIcon` support */}
            {rightIcon === 'ChevronRight' && (
              <ChevronRight
                className="mt-[1.5px]"
                colour={`${styleByType[fillType]['iconFill']}`}
              />
            )}
            {rightIcon === 'FlagLine' && (
              <FlagLine colour={`${styleByType[fillType]['iconFill']}`} />
            )}
            {/* Others */}
            {typeof rightIcon !== 'string' && rightIcon}
          </span>
        </button>
      </Link>
    );
  }
);

export default Button;
