import React from "react"
import classes from "./Block.module.css"

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
      <p>{data.description}</p>
    </div>
  )
}

export default block
