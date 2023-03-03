import { LinkProps } from 'next/link';

import { INTERNAL_PATH } from '~/shared/constant';

export type valueof<T> = T[keyof T];

type InferReturnTypeAsValueForMethod<U> = {
  [K in keyof U]: U[K] extends string
    ? U[K]
    : U[K] extends (...args: any[]) => any
    ? ReturnType<U[K]>
    : never;
};

type InternalPathObject = InferReturnTypeAsValueForMethod<typeof INTERNAL_PATH>;

export type InternalPath = valueof<InternalPathObject>;

export type ExternalHrefProps =
  | { external: true; href: LinkProps['href'] }
  | { external?: false; href?: InternalPath };
