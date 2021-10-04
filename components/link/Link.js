import styled from "styled-components"
import cn from "classnames"

export const LINK_TYPE = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OVERLINE: "overline",
}

export const Link = styled.a.attrs(({ type, ellipsis }) => ({
  className: cn({
    [`${type}`]: type,
    ellipsis,
  }),
}))`
  &.primary,
  &.primary:hover {
    @apply font-bold text-primary;
  }

  &.secondary,
  &.secondary:hover {
    @apply font-normal text-white underline;
  }

  &.overline,
  &.overline:hover {
    @apply font-bold;
  }
`
