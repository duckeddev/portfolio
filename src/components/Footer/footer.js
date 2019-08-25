import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p className={footerStyles.footer}>
        Created by {data.site.siteMetadata.author} © Minsk, {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
