import React from "react"
import Block from "./Block/Block"
import classes from "./Blocklist.module.css"

const blockList = ({ blockData }) => {
  const blockEdges = blockData.allMarkdownRemark.edges
  return (
    <div className={classes.gridContainer}>
      {blockEdges &&
        blockEdges.map((edge) => {
          const d = edge.node.frontmatter
          return <Block key={d.number} data={d} />
        })}
    </div>
  )
}
export default blockList
