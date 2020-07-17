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
import "./layout.scss"
import "./front_page.scss"
import "./features.scss"
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
      <section class="svg-wrapper">
        <section class="custom-shape-divider-top-1594991478">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
        </section>
      </section>
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

          <p>BUCA © Copyright 2020. All rights reserved. Developed by <a href="https://www.samsheng.my">Sheng</a>. </p>
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
