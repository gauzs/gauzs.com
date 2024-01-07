/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata?.title || `Gauzs`} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main style={{
          display: `flex`,
          margin: `0`,
          justifyContent: `center`,
          alignItems: `center`,
          width: `100%`,
          height: `calc(100vh - 75px)`
        }}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
