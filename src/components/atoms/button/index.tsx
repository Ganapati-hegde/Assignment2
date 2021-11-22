import * as React from 'react'
import classNames from 'classnames'
import './style.css'

type buttonProps = {
  size: string
  onClick: () => {}
  children: React.ReactNode
  classes: string
  disabled: boolean
}

const Button = (props: buttonProps) => {
  const { children, size, onClick, disabled, classes } = props
  const classProps = classNames(
    'button',
    classes,
    size,
    disabled ? disabled : false,
  )
  return (
    <button onClick={onClick} className={classProps}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  onClick: () => {},
  classes: ' primary white-text',
  disabled: false,
}

export default Button
