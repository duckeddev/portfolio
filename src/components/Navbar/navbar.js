import React from "react"
import { Link } from "gatsby"
import navStyles from "./navbar.module.scss"

const Navbar = () => {
  return (
    <div className={navStyles.navbar}>
      <div className={navStyles.navbarBrand}>
        <Link to="/" className={navStyles.navbarBrandLink}>
          Reactive
          <span>DEV</span>
        </Link>
      </div>
      <div className={navStyles.navbarMenu}>
        <ul className={navStyles.navbarMenuList}>
          <li className={navStyles.navbarMenuListItem}>
            <Link
              to="/"
              className={navStyles.navbarMenuListItemLink}
              activeClassName={navStyles.navbarMenuListItemLinkActive}
            >
              Главная
            </Link>
          </li>
          <li className={navStyles.navbarMenuListItem}>
            <Link
              to="/about"
              className={navStyles.navbarMenuListItemLink}
              activeClassName={navStyles.navbarMenuListItemLinkActive}
            >
              обо мне
            </Link>
          </li>
          <li className={navStyles.navbarMenuListItem}>
            <Link
              to="/cases"
              className={navStyles.navbarMenuListItemLink}
              activeClassName={navStyles.navbarMenuListItemLinkActive}
            >
              кейсы
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
