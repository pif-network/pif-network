import { INTERNAL_URI } from '~/shared/constant'

type valueof<T> = T[keyof T]

type InferReturnTypeIfValueIsFunction<U> = {
  [K in keyof U]: U[K] extends string
    ? U[K]
    : U[K] extends (...args: any[]) => any
    ? ReturnType<U[K]>
    : never
}

type InternalUriObject = InferReturnTypeIfValueIsFunction<typeof INTERNAL_URI>

export type InternalUri = valueof<InternalUriObject>
