import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import BlockList from "../components/BlockList/BlockList"

const IndexPage = ({ data }) => (
  <Layout bodyClass="home">
    <SEO title="Home" />
    <BlockList blockData={data} />
  </Layout>
)

export default IndexPage

export const blockData = graphql`
  query homepageBlocksQuery {
    allMarkdownRemark(sort: { fields: frontmatter___number, order: ASC }) {
      edges {
        node {
          frontmatter {
            background_image
            block_type
            description
            number
            title
            color
          }
        }
      }
    }
  }
`
