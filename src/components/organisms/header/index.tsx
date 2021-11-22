import * as React from 'react'
import classNames from 'classnames'
import './style.css'
import Image from '../../atoms/image'
import AppLogo from '../../../assets/images/appLogo.png'
import NavList from '../../molecules/navList'
import Text from '../../atoms/text'

type headerProps = {
  navItems: Array<string>
}
const Header = (props: headerProps) => {
  const { navItems } = props
  return (
    <div className={classNames('header')}>
      <Image
        imageClass="logo-width logo-height"
        linkTo="/home"
        source={AppLogo}
      />
      <Text size="large-font" thickness="bold" color="white-text">
        BLOGS
      </Text>
      <NavList navItems={navItems} />
    </div>
  )
}
export default Header
