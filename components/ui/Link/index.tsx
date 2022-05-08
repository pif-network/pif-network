import { forwardRef, PropsWithChildren } from 'react'
import NextLink, { LinkProps } from 'next/link'

const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(
  ({ href, prefetch, replace, scroll, shallow, locale, children }, ref) => (
    <NextLink
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
      prefetch={prefetch}
      passHref
    >
      <a className="text-primary underline hover:text-violet">{children}</a>
    </NextLink>
  ),
)

export default Link
