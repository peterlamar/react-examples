import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="Mantis Shrimp"
        src="../images/mantis-shrimp.jpeg"
      />
    </Layout>
    
  )
}

export default IndexPage
