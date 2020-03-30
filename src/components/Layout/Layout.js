import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import config from "../../../data/SiteConfig"

import Header from "./Header/Header"
import Footer from "./Footer/Footer"

import classes from "./Layout.module.css"

const Layout = ({ children, bodyClass }) => {
  return (
    <div className={classes.wrapper}>
      <Helmet
        bodyAttributes={{
          class: bodyClass,
        }}
      />
      <Header config={config} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
