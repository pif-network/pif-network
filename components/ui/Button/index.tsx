import styled, { css } from 'styled-components'
import { string } from 'yup'
import Link from 'next/link'

interface Props {
  content: string
  type: string //bg color: outlined, filled
  variant: string //text color: black, white, primary
  size: string //size of button
  fontSize: string
  onClick: any
  link: string
}

const Button = ({
  content,
  size,
  variant,
  type,
  fontSize,
  onClick,
  link,
}: Props) => {
  let sizeButton = ''
  let bgcolor = ''
  size == 'small' ? (sizeButton = 'py-1 px-6') : ''
  size == 'medium' ? (sizeButton = 'py-2 px-20 h-12 w-60') : ''
  type == 'filled' ? (bgcolor = 'primary-800') : ''
  type == 'outlined' ? (bgcolor = 'gray-50') : ''
  return (
    <div>
      <Link href={link}>
        <button
          className={`bg-${bgcolor} text-${variant} font-bold ${sizeButton} rounded-xl text-${fontSize}`}
          onClick={onClick}
        >
          {content}
        </button>
      </Link>
    </div>
  )
}

export default Button
