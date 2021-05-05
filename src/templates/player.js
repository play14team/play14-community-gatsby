import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import PlayerDetailsContent from "../components/Players/PlayerDetailsContent"

export const query = graphql`
  query GetSinglePlayer($slug: String) {
    player: strapiPlayer(slug: { eq: $slug }) {
      name
      role
      headline
      biography
      company
      website
      city
      embeddedMapUrl
      socialNetworks {
        url
        type
      }
      avatar {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`

const Player = ({ data }) => {
  const { player } = data
  return (
    <Layout>
      <Navbar />
      <PageBanner
          pageTitle={player.name}
          homePageText="Players" 
          homePageUrl="/players" 
          activePageText={player.name}
      />
      <PlayerDetailsContent player={player} />
      <Footer />
    </Layout>
  )
}

export default Player
