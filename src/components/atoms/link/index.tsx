import * as React from 'react'
import classNames from 'classnames'
import './style.css'

type LinkTextProps = {
  children: React.ReactNode
  classes: string
  linkTo: string
}

const LinkText = (props: LinkTextProps) => {
  const { children, linkTo, classes } = props
  const classProps = classNames(classes)
  return (
    <a href={linkTo} className={classProps}>
      {children}
    </a>
  )
}

LinkText.defaultProps = {
  classes: 'link',
}

export default LinkText
