import styled, { css } from 'styled-components'
import cn from "classnames"


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
`

export const OutlineButton = styled(Button)`

  background: #FFFFFF;
  color: #6F3E97;
  border: 1px solid #6F3E97;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    background: #F3EFF8;
    color: #6F3E97;
  }

  &:focus {
    background: #E7DBF8;
  }

  &:active {
    background: #E7DBF8;
    background-size: 100%;
    transition: background 1s;
  }

  &:disabled {
    color: grey;
  }
`;

export const ContainedButton = styled(Button)`
  
  background: #6F3E97;
  color: white;
  border: 1px solid #6F3E97;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    background: #F3EFF8;
    color: #6F3E97;
  }

  &:focus {
    background: #E7DBF8;
  }

  &:active {
    background: #E7DBF8;
    background-size: 100%;
    transition: background 1s;
  }

  &:disabled {
    color: grey;
  }

`;

export const TextButton = styled(Button)`

  background: #FFFFFF;
  color: #6F3E97;
  border: 1px #6F3E97;
  box-sizing: border-box;
  border-radius: 4px;

  &:hover {
    background: #F3EFF8;
    color: #6F3E97;
  }

  &:focus {
    background: #E7DBF8;
  }

  &:active {
    background: #E7DBF8;
    background-size: 100%;
    transition: background 1s;
  }

  &:disabled {
    color: grey;
  }

`;