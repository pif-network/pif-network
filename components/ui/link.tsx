import { forwardRef, PropsWithChildren } from 'react';
import NextLink, { LinkProps } from 'next/link';

import type { ExternalHrefProps } from '~/lib/types';

type Props = {
  className?: string;
  newTab?: boolean;
} & ExternalHrefProps &
  LinkProps;

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<Props>>(
  ({ newTab, external, href, children, ...others }, ref) => {
    if (external) {
      return (
        <a
          href={href}
          ref={ref}
          rel={'noreferrer'}
          target={newTab ? '_blank' : undefined}
          {...others}
        >
          {children}
        </a>
      );
    }

    return (
      <NextLink
        href={href}
        ref={ref}
        rel={'noreferrer'}
        target={newTab ? '_blank' : undefined}
        {...others}
      >
        {children}
      </NextLink>
    );
  }
);
