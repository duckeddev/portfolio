import React from "react"
import Img from 'gatsby-image'
import casesStyles from "../cases.module.scss"

const CaseItem = ({ data }) => {
  const { title, tech, link, projectPreImg } = data
  return (
    <figure className={casesStyles.casesItem}>
      <Img fluid={projectPreImg.childImageSharp.fluid} className={casesStyles.casesItemImage} />
      <figcaption className={casesStyles.casesItemDescr}>
        <h5>{title}</h5>
        <p>{tech}</p>
        <a href={link}>Просмотреть</a>
      </figcaption>
    </figure>
  )
}

export default CaseItem
