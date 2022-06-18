import styled, { css } from 'styled-components'
import Link from 'next/link'

interface Props {
  content: string
  type: 'Outlined' | 'Filled' //bg color: outlined, filled
  variant: 'Default' | 'Purple' //text color: black, white, primary
  size: 'Medium' | 'Small' //size of button
  fontFamily: 'manrope' | 'lora'
  fontStyle: 'bold' | 'semibold'
  onClick: React.MouseEventHandler<HTMLButtonElement>
  link: string
}

const Button = ({
  content,
  size,
  variant,
  type,
  fontFamily,
  fontStyle,
  onClick,
  link,
}: Partial<Props>) => {
  let sizeButton = ''
  let typeButton = ''
  let colour = ''

  size === 'Small' ? (sizeButton = 'py-1 px-6 text-sm') : ''
  size === 'Medium' ? (sizeButton = 'py-2 px-20 text-lg') : ''
  type === 'Filled' ? (typeButton = 'bg-primary-800') : ''
  type === 'Outlined' ? (typeButton = 'bg-gray-50 border-2') : ''
  variant === 'Default'
    ? type === 'Filled'
      ? (colour = 'text-white')
      : (colour = 'text-gray-700')
    : ''
  variant === 'Purple' ? (colour = 'text-primary-400') : ''

  return (
    <div>
      <Link href={`${link}`}>
        <button
          className={`${typeButton} font-${fontStyle} ${colour} ${sizeButton} rounded-xl font-${fontFamily}`}
          onClick={onClick}
        >
          {content}
        </button>
      </Link>
    </div>
  )
}

export default Button
