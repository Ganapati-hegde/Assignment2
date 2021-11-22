import './style.css'
import LinkText from '../../atoms/link'
import '../../commonStyles/commonStyles.css'

type navListProps = {
  navItems: Array<string>
}

const NavList = (props: navListProps) => {
  const { navItems } = props
  return (
    <div className="flex flex-wrap">
      {navItems.map((item) => {
        return (
          <div className="mH-16">
            <LinkText linkTo={item}>{item}</LinkText>
          </div>
        )
      })}
    </div>
  )
}

export default NavList
