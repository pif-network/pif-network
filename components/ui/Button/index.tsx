import styled, { css } from 'styled-components'

interface Props {
  variant: string
}

const Button = styled.button`
  display: flex;
  flex-grow: 0;
  flex: none;
  align-items: center;
  text-align: center;

  order: 0;

  ${({ variant }: Props) =>
    variant == 'outline' &&
    css`
      background: #f2f2f2;
      color: #303030;
      border: 2px solid #6f3e97;
      box-sizing: border-box;
      border-radius: 12px;

      &:hover {
        background: #f3eff8;
        color: #6f3e97;
      }

      &:focus {
        background: #e7dbf8;
        color: #6f3e97;
      }

      &:active {
        color: #6f3e97;
        background: #e7dbf8;
        background-size: 100%;
      }

      &:disabled {
        cursor: default;
        color: grey;
      }
    `}

  ${({ variant }: Props) =>
    variant == 'contained' &&
    css`
      background: #25044e;
      color: white;
      border: 1px solid #6f3e97;
      box-sizing: border-box;
      border-radius: 12px;

      &:hover {
        background: #895dac;
        color: white;
      }

      &:focus {
        background: #a17fbd;
      }

      &:active {
        background: #a17fbd;
        background-size: 100%;
      }

      &:disabled {
        cursor: default;
        color: grey;
      }
    `}


  ${({ variant }: Props) =>
    variant == 'text' &&
    css`
      background: #ffffff;
      color: #6f3e97;
      border: 1px #6f3e97;
      box-sizing: border-box;
      border-radius: 4px;

      &:hover {
        background: #f3eff8;
        color: #6f3e97;
      }

      &:focus {
        background: #e7dbf8;
      }

      &:active {
        background: #d8bfd8;
        background-size: 100%;
      }

      &:disabled {
        cursor: default;
        color: grey;
      }
    `}
`

export default Button
