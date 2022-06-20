import styled, { css } from 'styled-components'
import Link from 'next/link'
import { ChevronRight, FlagLine } from '../svgs/Icons'

interface Props {
  content: string
  type: 'Outlined' | 'Filled' //bg color: outlined, filled
  variant: 'Default' | 'Purple' //text color: black, white, primary
  size: 'Medium' | 'Small' //size of button
  onClick: React.MouseEventHandler
  link: string
  withIcon: 'ChevronRight' | 'FlagLine'
}

const Button = ({
  withIcon,
  content,
  size,
  variant,
  type,
  onClick,
  link,
}: Partial<Props>) => {
  let sizeButton = ''
  let typeButton = ''
  let colour = ''

  if (size === 'Small') {
    sizeButton = 'py-1 px-6 text-sm'
  } else {
    sizeButton = 'py-2.5 px-7 text-lg'
  }

  if (type === 'Filled') {
    typeButton = 'bg-primary-800 font-lora text-white'
    colour = 'white'
  } else {
    typeButton =
      'bg-white border-2 border-primary-800 font-manrope text-gray-700'
    colour = 'black'
  }
  if (variant === 'Purple') {
    colour = 'text-primary-400'
  }

  return (
    <div>
      <Link href={`${link}`}>
        <button
          className={`${typeButton} text-${colour} ${sizeButton} text-bold rounded-xl`}
          onClick={onClick}
        >
          <span className="inline-flex">
            {content}
            {withIcon === 'ChevronRight' && (
              <ChevronRight colour={`${colour}`} />
            )}
            {withIcon === 'FlagLine' && <FlagLine colour={`${colour}`} />}
          </span>
        </button>
      </Link>
    </div>
  )
}

export default Button
