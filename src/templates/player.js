import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query GetSinglePlayer($slug: String) {
    player: strapiPlayer(slug: { eq: $slug }) {
      name
      role
    }
  }
`

const Player = ({ data }) => {
    const { name, role } = data.player
    return (
        <Layout>
            <Seo title={name} />
          <h3>{name}</h3>
          <p>{role}</p>
        </Layout>
      )
}

export default Player