import styled, { css } from 'styled-components'
import Link from 'next/link'

interface Props {
  content: string
  type: 'Outlined' | 'Filled' //bg color: outlined, filled
  variant: 'Default' | 'Purple' //text color: black, white, primary
  size: 'Medium' | 'Small' //size of button
  fontFamily: 'manrope' | 'lora'
  onClick: React.MouseEventHandler
  link: string
}

const Button = ({
  content,
  size,
  variant,
  type,
  fontFamily,
  onClick,
  link,
}: Partial<Props>) => {
  let sizeButton = ''
  let typeButton = ''
  let colour = ''

  if (size === 'Small') {
    sizeButton = 'py-1 px-6 text-sm'
  } else {
    sizeButton = 'py-2 px-20 text-lg'
  }

  if (type === 'Filled') {
    typeButton = 'bg-primary-800'
  } else {
    typeButton = 'bg-gray-50 border-2'
  }

  if (variant === 'Default') {
    if (type === 'Filled') {
      colour = 'text-white'
    } else {
      colour = 'text-gray-700'
    }
  } else if (variant === 'Purple') {
    colour = 'text-primary-400'
  }

  return (
    <div>
      <Link href={`${link}`}>
        <button
          className={`${typeButton} ${colour} ${sizeButton} rounded-xl font-${fontFamily}`}
          onClick={onClick}
        >
          {content}
        </button>
      </Link>
    </div>
  )
}

export default Button
