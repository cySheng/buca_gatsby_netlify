/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./normalize.css"
import "./layout.css"
import "./front_page.css"
import "./features.css"
import "./pricing.scss"
import "./about_us.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        // style={{
        //   margin: `0 auto`,
        //   maxWidth: 960,
        //   padding: `0 1.0875rem 1.45rem`,
        // }}
      >
        <main>{children}</main>
        <footer>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          */}

          <p>BUCA © Copyright 2020. All rights reserved. Developed by <a href="https://www.samsheng.my">Sheng</a> & Sammie. </p>
          <section class="right">
            <a href="https://docs.google.com/document/d/1yfpuwUGyZVVzqyJGGuO4lg10xx6BPFYEWv_hIvyXte4/edit?usp=sharing" target="_blank" rel="noreferrer">Privacy Policy</a>
            <a href="https://docs.google.com/document/d/1NPuAgjPorDL2g7uNVbDtE-LOI_0PNZ5v3ciSrJzHoEs/edit?usp=sharing" target="_blank" rel="noreferrer">Terms of Use</a>
          </section>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
