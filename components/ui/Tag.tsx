import { CloseOutlined } from '@ant-design/icons'

type TagType = 'filled' | 'outlined'
type TagColorPreset = 'gray' | 'primary' | 'red' | 'cyan'

interface TagProps {
  color?: TagColorPreset
  type?: TagType
  deletable?: boolean
  onDelete?: (e: React.MouseEvent<HTMLElement>) => void
}

const hoverPresetByType = {
  primary: {
    outlined: 'hover:text-primary-400 hover:border-primary-400',
    filled: 'hover:border-primary-400 hover:bg-primary-300',
  },
  red: {
    outlined: 'hover:text-red-300 hover:border-red-300',
    filled: 'hover:border-red-300 hover:bg-red-200',
  },
  cyan: {
    outlined: 'hover:text-cyan-300 hover:border-cyan-300',
    filled: 'hover:border-cyan-300 hover:bg-cyan-200',
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
  outlined: 'text-gray-600 bg-white border-gray-400',
  filled: 'text-gray-50 bg-gray-400 border-gray-700',
}

export const Tag: React.FC<TagProps> = ({
  children,
  color = 'gray',
  type = 'outlined',
  deletable,
  onDelete,
}) => {
  const colorClasses = `${defaultPresetByType[type]} ${hoverPresetByType[color]?.[type]}`
  return (
    <div
      className={`${colorClasses} border font-semi-bold font-manrope text-caption rounded-3xl px-2 py-1 inline-block relative group`}
    >
      {children}
      {deletable && (
        <CloseOutlined
          className={`invisible group-hover:visible text-caption absolute top-[0.2rem] h-[1.125rem] right-1 w-3.5 cursor-pointer ${
            type === 'outlined' ? 'bg-white' : deleteBgByType[color]
          }`}
          onClick={onDelete}
        />
      )}
    </div>
  )
}
