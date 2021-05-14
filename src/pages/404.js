import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from 'components/App/Layout'

const NotFoundPage = () => (
  <Layout title="Not found">
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>Stop playing with our URLs</p>
    <StaticImage
      src="../assets/images/play14_broken.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="#play14 404"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default NotFoundPage
