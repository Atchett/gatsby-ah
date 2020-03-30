import React from "react"
import { Link } from "gatsby"

const navItem = ({ title, url }) => (
  <li key={title}>
    <Link to={url}>{title}</Link>
  </li>
)

export default navItem
