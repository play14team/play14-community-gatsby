import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import Player from "../components/Players/Player"

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

      <section className="scientist-area pb-70">
        <div className="container">
            <div className="row">
              {
                players.nodes.map(player => {
                  return (<Player player={player} />)
                })
              }
          </div>
        </div>
      </section>


      <Footer />
    </Layout>
  )
}

export default PlayersPage
