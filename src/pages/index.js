import React from "react"
import Layout from "../components/Layout/layout"
import HomePage from '../pages/home'
import "./index.scss"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
    </>
  )
}

export default IndexPage
