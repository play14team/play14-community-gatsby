import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import EventDetailsContent from '../components/Events/EventDetailsContent'

export const query = graphql`
query GetSingleEvent($slug: String) {
  event: strapiEvent(slug: { eq: $slug }) {
    slug
    name
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
      images {
        formats {
          small {
            childrenImageSharp {
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
    timetable {
      day
      description
      timeslots {
        time
        description
      }
    }
    defaultImage {
      childImageSharp {
        gatsbyImageData(
          width: 2048
          height: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }

    images {
      formats {
        small {
          childrenImageSharp {
            gatsbyImageData(
              width: 380
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    hosts {
      slug
      name
      headline
      socialNetworks {
        type
        url
      }

      avatar {
        childImageSharp {
          gatsbyImageData(
            width: 250
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    mentors {
      slug
      name
      headline
      socialNetworks {
        type
        url
      }

      avatar {
        childImageSharp {
          gatsbyImageData(
            width: 250
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    players {
      slug
      name
      role
      socialNetworks {
        type
        url
      }
      avatar {
        childImageSharp {
          gatsbyImageData(
            width: 250
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
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
      <Footer />
  </Layout>
)
}

export default Event
