import React, { Fragment } from "react"
import HomepageImage from "../../../../utils/homepageBlockImage"
import classes from "./BlockImage.module.css"

const blockImage = ({ image }) => {
  const bgImg = image ? (
    <HomepageImage className={classes.blockImage} fileName={image} />
  ) : null
  return <Fragment>{bgImg}</Fragment>
}
export default blockImage
