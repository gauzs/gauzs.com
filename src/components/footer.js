import * as React from "react"

const Footer = () => (
  <footer
    style={{
      display: `flex`,
      width: `100%`,
      margin: `0`,
      padding: `var(--space-3) var(--size-gutter)`,
      alignItems: `center`,
      justifyContent: `space-between`,
      background: `#dcdcdd`,
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    &copy; {new Date().getFullYear()} &middot; Gauzs.
    {` `}
    All Rights Reserved.
  </footer>
)

export default Footer