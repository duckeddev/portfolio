import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer/footer"

import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.main}>
      <Navbar />
      <div className={layoutStyles.mainContent}>{children}</div>
      <Footer className={layoutStyles.mainFooter} />
    </div>
  )
}

export default Layout
