import React from 'react'
import cn from 'classnames'
import styles from './Button.module.css'

const Button = ({style, className, children, onClick, ...rest }) => (
  <button className={cn(styles.btn, {}, className)} onClick={onClick} style={style} {...rest}>
    {children}
  </button>
)

export default Button
