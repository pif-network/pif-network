import { forwardRef, PropsWithChildren } from 'react'
import NextLink, { LinkProps } from 'next/link'

import type { ExternalHrefProps } from '~/lib/types'

type Props = {
	className?: string
	newTab?: boolean
} & ExternalHrefProps &
	LinkProps

const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(
	(
		{
			className,
			newTab,
			external,
			href,
			passHref,
			prefetch,
			replace,
			scroll,
			shallow,
			locale,
			children,
			...others
		},
		ref,
	) => {
		if (external) {
			return (
				<a
					className={className}
					href={href as string}
					ref={ref}
					rel={'noreferrer'}
					target={newTab ? '_blank' : undefined}
					{...others}
				>
					{children}
				</a>
			)
		}

		return (
			<NextLink
				href={href}
				replace={replace}
				scroll={scroll}
				shallow={shallow}
				locale={locale}
				prefetch={prefetch}
				passHref={passHref}
			>
				<a
					className={className}
					ref={ref}
					rel={'noreferrer'}
					target={newTab ? '_blank' : undefined}
					{...others}
				>
					{children}
				</a>
			</NextLink>
		)
	},
)

export default Link
