import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"

const query = graphql`
  {
    allStrapiEvent {
      nodes {
        slug
        name
        date
      }
    }
  }
`

const EventsPage = () => {
  const data = useStaticQuery(query)
  return (
    <Layout>
      <Navbar />
      <PageBanner
          pageTitle="Events" 
          homePageText="Home" 
          homePageUrl="/" 
          activePageText="Events" 
      />
      <ol>
        {data.allStrapiEvent.nodes.map(event => {
          return (
            <li>
              <Link to={"/events/" + event.slug}>
                <h2>{event.name}</h2>
                <p>{event.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
      <Footer />
    </Layout>
  )
}

export default EventsPage
