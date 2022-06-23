import React, {
  MouseEvent,
  ButtonHTMLAttributes,
  useRef,
  forwardRef,
  DetailedHTMLProps,
  createRef,
  Ref,
  ForwardedRef,
} from 'react'
import Link from 'next/link'
import { ChevronRight, FlagLine } from '../svgs/Icons'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  className: string
  href?: string
  size: 'medium' | 'small'
  fillType: 'outlined' | 'filled'
  rightIcon?: 'ChevronRight' | 'FlagLine'
}

// good night
const Button = forwardRef(
  (
    { content, className, href, size, fillType, rightIcon, ...others }: Props,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const styleByType = {
      filled: {
        small:
          'py-1 px-6 border border-primary-900 bg-primary-800 text-white font-manrope font-bold text-body-md',
        medium:
          'py-2.5 px-7 border border-primary-900 bg-primary-800 text-white font-lora font-semi-bold text-sub-heading',
        iconFill: 'white',
      },
      outlined: {
        small:
          'py-1 px-6 border border-primary-900 bg-primary-800 text-white font-manrope font-bold text-body-md',
        medium:
          'py-2.5 px-7 border border-primary-900 bg-primary-800 text-white font-lora font-semi-bold text-sub-heading',
        iconFill: 'black',
      },
    }

    const cn = `${styleByType[fillType][size]} ${className} rounded-xl`

    if (!href) {
      return (
        <button className={cn} ref={ref} {...others}>
          <span className="inline-flex">{content}</span>
          {rightIcon === 'ChevronRight' && (
            <ChevronRight colour={`${styleByType[fillType]['iconFill']}`} />
          )}
          {rightIcon === 'FlagLine' && (
            <FlagLine colour={`${styleByType[fillType]['iconFill']}`} />
          )}
        </button>
      )
    } else {
      return (
        <Link href={`${href}`} passHref>
          <button className={cn} ref={ref} {...others}>
            <span className="inline-flex">{content}</span>
            {rightIcon === 'ChevronRight' && (
              <ChevronRight colour={`${styleByType[fillType]['iconFill']}`} />
            )}
            {rightIcon === 'FlagLine' && (
              <FlagLine colour={`${styleByType[fillType]['iconFill']}`} />
            )}
          </button>
        </Link>
      )
    }
  },
)

export default Button
