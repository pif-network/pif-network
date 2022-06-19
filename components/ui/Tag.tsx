import { CloseOutlined } from '@ant-design/icons'

type TagType = 'dark' | 'light'
type TagColorPreset = 'gray' | 'primary' | 'red' | 'cyan'

interface TagProps {
  color?: TagColorPreset
  type?: TagType
  closable?: boolean
  onClose?: (e: React.MouseEvent<HTMLElement>) => void
}

const hoverPresetByType = {
  primary: {
    light: 'hover:text-primary-400 hover:border-primary-400',
    dark: 'hover:border-primary-400 hover:bg-primary-300',
  },
  red: {
    light: 'hover:text-red-300 hover:border-red-300',
    dark: 'hover:border-red-300 hover:bg-red-200',
  },
  cyan: {
    light: 'hover:text-cyan-300 hover:border-cyan-300',
    dark: 'hover:border-cyan-300 hover:bg-cyan-200',
  },
  gray: undefined,
}

const deleteBgByType = {
  primary: 'bg-primary-300',
  red: 'bg-red-200',
  cyan: 'bg-cyan-200',
  gray: 'bg-gray-400',
}

const defaultPresetByType = {
  light: 'text-gray-600 bg-white border-gray-400',
  dark: 'text-gray-50 bg-gray-400 border-gray-700',
}

export const Tag: React.FC<TagProps> = ({
  children,
  color = 'gray',
  type = 'light',
  closable,
  onClose,
}) => {
  const colorClasses = `${defaultPresetByType[type]} ${hoverPresetByType[color]?.[type]}`
  return (
    <div
      className={`${colorClasses} border rounded-3xl px-2 py-1 inline-block relative group`}
      onClick={onClose}
    >
      {children}
      {closable && 'Delete here'}
      <CloseOutlined
        className={`invisible group-hover:visible text-body-xs absolute top-1 right-2 h-[22px] w-3.5 leading-5 cursor-pointer ${
          type === 'light' ? 'bg-white' : deleteBgByType[color]
        }`}
        style={{ fontSize: '12px' }}
      />
    </div>
  )
}
