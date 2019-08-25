import React from "react"
import { Fade } from "react-reveal"
import Layout from "../../components/Layout/layout"
import { graphql, useStaticQuery } from "gatsby"
import uuid from "uuid/v1"
import casesStyles from "./cases.module.scss"
import CaseItem from "./components/case"

const CasesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              tech
              link
              projectPreImg {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Fade>
      <Layout>
        <div className={casesStyles.cases}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <CaseItem data={node.frontmatter} key={uuid()} />
          ))}
        </div>
      </Layout>
    </Fade>
  )
}

export default CasesPage
