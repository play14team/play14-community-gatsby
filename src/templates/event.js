import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"

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
  return (
    <Layout>
      <Navbar />
      <PageBanner
          pageTitle={name} 
          homePageText="Home" 
          homePageUrl="/" 
          activePageText={name} 
      />
      <h3>{name}</h3>
      <p>{date}</p>
      <Footer />
    </Layout>
  )
}

export default Event
