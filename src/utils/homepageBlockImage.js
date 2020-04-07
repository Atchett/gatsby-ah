import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function ({ fileName }) {
  const data = useStaticQuery(
    graphql`
      query {
        placeholderImage: allFile(
          filter: { sourceInstanceName: { eq: "homepageAssets" } }
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                fixed(height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `
  )
  if (!fileName) {
    return null
  }
  const image = data.placeholderImage.edges.find(
    ({ node }) => node.relativePath === fileName
  ).node
  if (!image) {
    return null
  }
  return <Img fixed={image.childImageSharp.fixed} />
}
