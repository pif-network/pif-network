import React, { ButtonHTMLAttributes, forwardRef } from 'react'

import type { ExternalHrefProps } from '~/lib/types'
import { ChevronRight, FlagLine } from '~/components/ui/svgs/Icons'
import { Link } from '~/components/ui'

interface GeneralButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	content: string
	className?: string
	size: 'medium' | 'small'
	fillType: 'outlined' | 'filled'
	rightIcon?: 'ChevronRight' | 'FlagLine'
}

type Props = GeneralButtonProps & ExternalHrefProps

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
		ref,
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
					'py-1 px-6 border border-primary-900 bg-white text-gray-700 font-manrope font-bold text-body-md',
				medium:
					'py-2.5 px-7 border border-primary-900 bg-white text-gray-700 font-manrope font-bold text-sub-heading',
				iconFill: 'black',
			},
		}

		const cn = `${styleByType[fillType][size]} ${className} rounded-xl`

		if (!href) {
			return (
				<button className={cn} ref={ref} {...others}>
					<span className="inline-flex">
						{content}
						{rightIcon === 'ChevronRight' && (
							<ChevronRight
								className="mt-[1.5px]"
								colour={`${styleByType[fillType]['iconFill']}`}
							/>
						)}
						{rightIcon === 'FlagLine' && (
							<FlagLine colour={`${styleByType[fillType]['iconFill']}`} />
						)}
					</span>
				</button>
			)
		}

		return (
			<Link external={external as any} href={href} passHref>
				<button className={cn} ref={ref} {...others}>
					<span className="inline-flex gap-[2px]">
						{content}
						{rightIcon === 'ChevronRight' && (
							<ChevronRight
								className="mt-[1.5px]"
								colour={`${styleByType[fillType]['iconFill']}`}
							/>
						)}
						{rightIcon === 'FlagLine' && (
							<FlagLine colour={`${styleByType[fillType]['iconFill']}`} />
						)}
					</span>
				</button>
			</Link>
		)
	},
)

export default Button
