import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query GetSingleEvent($slug: String) {
    event: strapiEvent(slug: { eq: $slug }) {
      name
      date
    }
  }
`

const Event = ({ data }) => {
    const { name, date } = data.event
    console.log(data)
    return (
        <Layout>
            <Seo title={name} />
          <h3>{name}</h3>
          <p>{date}</p>
        </Layout>
      )
}

export default Event