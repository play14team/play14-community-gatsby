import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>Stop playing with our URLs</p>
    <StaticImage
      src="../images/play14_broken.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="#play14 404"
      style={{ marginBottom: `1.45rem` }}
    />

    
  </Layout>
)

export default NotFoundPage
