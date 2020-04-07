import React, { Fragment } from "react"
import HomepageImage from "../../../../utils/homepageBlockImage"

const blockImage = ({ image }) => {
  const bgImg = image ? <HomepageImage fileName={image} /> : null
  return <Fragment>{bgImg}</Fragment>
}
export default blockImage
