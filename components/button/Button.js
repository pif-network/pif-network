import styled, { css } from 'styled-components'
import cn from 'classnames'

export const Button = styled.button`
  padding: 6px 6px 6px 8px;
  font-family: Be Vietnam;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  font-feature-settings: 'case' on;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;

  ${({ variant }) =>
    variant == 'outline' &&
    css`
      background: #ffffff;
      color: #6f3e97;
      border: 1px solid #6f3e97;
      box-sizing: border-box;
      border-radius: 4px;

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

  ${({ variant }) =>
    variant == 'contained' &&
    css`
      background: #6f3e97;
      color: white;
      border: 1px solid #6f3e97;
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
        background: #e7dbf8;
        background-size: 100%;
      }

      &:disabled {
        cursor: default;
        color: grey;
      }
    `}


  ${({ variant }) =>
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
