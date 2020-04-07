import React from "react"
import classes from "./Block.module.css"
import BlockContent from "./BlockContent/BlockContent"
import BlockImage from "./BlockImage/BlockImage"

const block = ({ data }) => {
  const blockType = `type${data.block_type.toUpperCase()}`
  const blockNum = `blockNum${data.number}`

  return (
    <div
      className={[
        classes.block,
        classes[data.color],
        classes[blockType],
        classes[blockNum],
      ].join(" ")}
    >
      <BlockImage image={data.background_image} />
      <BlockContent data={data} />
    </div>
  )
}

export default block
