import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventsCard from '../components/Events/EventsCard'

export const query = graphql`
query GetEvents {
    events: allStrapiEvent( sort: {fields:start, order: DESC} ) {
      nodes {
        slug
        name
        date
        location {
          name
        }
        venue {
          name
        }
        status
      }
    }
  }
`

const Events = () => {
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
            <EventsCard events={data.events.nodes} />
            <Footer />
        </Layout>
    );
}

export default Events