import NextLink from 'next/link'

export { Link }

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href}>
      <a className="text-primary underline hover:text-violet" {...props}>
        {children}
      </a>
    </NextLink>
  )
}
