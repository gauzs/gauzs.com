import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
      position: `absolute`,
      width: `100%`,
      margin: `0`,
      height: `75`,
      padding: `var(--space-3) var(--size-gutter)`,
      alignItems: `center`,
      justifyContent: `space-between`,
      zIndex: `999`
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      <img
        alt="Gauzs logo"
        width={75}
        style={{ margin: 0 }}
        src="/gauzs-logo.png"
      />
    </Link>
    <button type="button" className="btn gzs-btn">Request Demo</button>
  </header>
)

export default Header
