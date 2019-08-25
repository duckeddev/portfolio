import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Zoom } from "react-reveal"

const DeveloperImage = () => {
  const data = useStaticQuery(graphql`
    query {
      developer: file(relativePath: { eq: "developer.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Zoom delay='500'>
      <Img
        fluid={data.developer.childImageSharp.fluid}
        style={{
          width: 400,
        }}
      />
    </Zoom>
  )
}

export default DeveloperImage
