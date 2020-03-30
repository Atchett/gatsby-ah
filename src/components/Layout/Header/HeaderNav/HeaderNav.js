import React from "react"
import NavItem from "./NavItem/NavItem"

const headerNav = ({ items }) => {
  return (
    <nav>
      {items.map(({ title, url }) => {
        return <NavItem key={title} title={title} url={url} />
      })}
    </nav>
  )
}

export default headerNav
