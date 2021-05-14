import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from 'components//Common/PageBanner'
import Footer from "../components/App/Footer"
import GameDetailsContent from 'components//Games/GameDetailsContent'

const Game = ({ data }) => {
  return (
    <Layout title={data.game.name}>
      <Navbar />
      <PageBanner
          pageTitle={data.game.name} 
          homePageText="Games" 
          homePageUrl="/games" 
          activePageText={data.game.name} 
      />
      <GameDetailsContent game={data.game} />
      <Footer />
  </Layout>
)
}

export default Game

export const query = graphql`
query GetSingleGame($slug: String) {
  game: strapiGame(slug: { eq: $slug }) {
    slug
    name
    summary
    timebox
    scale
    description
    publishdate
    firstplayed {
      name
    }
    takeaways {
      text
    }
    materials {
      text
    }
    preparationSteps {
      text
    }
    categories {
      name
      icon
    }
    resources {
      name
      file {
        publicURL
        extension
      }
    }
    metrics {
      name
      value
    }
    safety {
      name
      value
    }
    proposedby {
      slug
      name
      avatar {
        childImageSharp {
          gatsbyImageData(width: 35)
        }
      }
    }
    writtenby {
      slug
      name
      avatar {
        childImageSharp {
          gatsbyImageData(width: 35)
        }
      }
    }
    defaultImage {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
  }
}
`
