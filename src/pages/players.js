import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import PlayersCard from "../components/Players/PlayersCard"

const query = graphql`
  {
    players : allStrapiPlayer( sort: {fields:slug, order: ASC} ) {
      nodes {
        slug
        name
        role
        headline
        socialNetworks {
          url
          type
        }
        avatar {
          childImageSharp{
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`

const PlayersPage = () => {
  const { players } = useStaticQuery(query)

  return (
    <Layout>
      <Navbar />
      <PageBanner
          pageTitle="Players" 
          homePageText="Home" 
          homePageUrl="/" 
          activePageText="Players" 
      />
      <PlayersCard players={players} />
      <Footer />
    </Layout>
  )
}

export default PlayersPage
