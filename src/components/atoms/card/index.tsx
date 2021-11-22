import React from 'react'
import classNames from 'classnames'
import './style.css'

type cardProps = {
  children: React.ReactNode
  height: string
  width: string
  classes: string
}
const Card = (props: cardProps) => {
  const { children, height, width, classes } = props
  const classProps = classNames(height, width, classes)
  const styleProps = { height: height, width: width }
  return (
    <div className={classNames(classProps, 'card')} style={styleProps}>
      {children}
    </div>
  )
}
export default Card
