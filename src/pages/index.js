import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome to #play14</h1>
    <p>We believe in playfulness</p>
    <StaticImage
      src="../images/play14_500x500.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="#play14 logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/events/">Events</Link> <br />
      <Link to="/players/">Players</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
