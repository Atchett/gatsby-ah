import PropTypes from "prop-types"
import React from "react"
import HeaderNav from "./HeaderNav/HeaderNav"

const Header = ({ config }) => {
  const { headerNav } = config
  return (
    <header>
      <HeaderNav items={headerNav} />
    </header>
  )
}

Header.propTypes = {
  config: PropTypes.object,
}

Header.defaultProps = {
  config: null,
}

export default Header
