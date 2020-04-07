import React from "react"
import classes from "./BlockContent.module.css"
import { FaPlusCircle } from "react-icons/fa"

const blockContent = ({ data }) => {
  // check for URL
  const displayLink = data.link ? <FaPlusCircle /> : null

  return (
    <div className={classes.blockContent}>
      <p>
        {data.description} {displayLink}
      </p>
    </div>
  )
}

export default blockContent
