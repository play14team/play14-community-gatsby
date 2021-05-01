import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"

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
      <Navbar />
      <PageBanner
          pageTitle={name}
          homePageText="Home" 
          homePageUrl="/" 
          activePageText={name}
      />
      <h3>{name}</h3>
      <p>{role}</p>
      <Footer />
    </Layout>
  )
}

export default Player
