import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventDetailsContent from '../components/Events/EventDetailsContent'
import EventSpeakers from '../components/Events/EventSpeakers'

export const query = graphql`
  query GetSingleEvent($slug: String) {
    event: strapiEvent(slug: { eq: $slug }) {
      slug
      name
      date
      start
      end
      status
      description
      venue {
        name
        address {
          number
          street
          postalCode
          city
          country
        }
        embeddedMapUrl
        logo {
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        pictures {
          formats{
            small{
              childImageSharp {
                  gatsbyImageData(
                    width: 380
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
              }
            }
          }
        }
      }
    }
  }
`

const Event = ({ data }) => {
  return (
    <Layout>
      <Navbar />
      <PageBanner
          pageTitle={data.event.name} 
          homePageText="Events" 
          homePageUrl="/events" 
          activePageText={data.event.name} 
      />
      <EventDetailsContent event={data.event} />
      <EventSpeakers event={data.event} />
      <Footer />
  </Layout>
)
}

export default Event
