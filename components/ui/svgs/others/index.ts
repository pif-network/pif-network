import { SVGProps as ReactSVGProps } from 'react'

export interface SVGProps extends ReactSVGProps<SVGSVGElement> {
  colour: string
}

export { default as heroBorder } from './heroBorder'
