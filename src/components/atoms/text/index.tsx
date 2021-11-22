import * as React from 'react'
import classNames from 'classnames'
import './style.css'

type TextProps = {
  children: React.ReactNode
  size: String
  color: String
  classes: String
  thickness: string
}

const Text = (props: TextProps) => {
  const { children, size, color, classes, thickness } = props
  const classProps = classNames(classes, size, color, thickness)
  return <div className={classProps}>{children}</div>
}

Text.defaultProps = {
  classes: 'normal-font',
}

export default Text
