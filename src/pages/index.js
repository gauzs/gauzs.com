import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <h1>Supercharge Your Business</h1>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
