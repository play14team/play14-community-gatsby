import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"

const query = graphql`
  {
    allStrapiPlayer {
      nodes {
        slug
        name
        role
      }
    }
  }
`

const PlayersPage = () => {
  const data = useStaticQuery(query)

  return (
    <Layout>
      <Navbar />
      <PageBanner
          pageTitle="Players" 
          homePageText="Home" 
          homePageUrl="/" 
          activePageText="Players" 
      />
      <ol>
        {data.allStrapiPlayer.nodes.map(player => {
          return (
            <li>
              <Link to={player.slug}>
                <h2>{player.name}</h2>
                <p>{player.role}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      <Footer />
    </Layout>
  )
}

export default PlayersPage
