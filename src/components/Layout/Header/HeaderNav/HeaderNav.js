import React from "react"
import NavItem from "./NavItem/NavItem"

const headerNav = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map(({ title, url }) => {
          return <NavItem key={title} title={title} url={url} />
        })}
      </ul>
    </nav>
  )
}

export default headerNav
