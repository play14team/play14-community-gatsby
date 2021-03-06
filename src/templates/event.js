import React from 'react'
import { graphql } from "gatsby"

import Layout from 'components/App/Layout'
import Navbar from 'components/App/Navbar'
import PageBanner from 'components/Common/PageBanner'
import Footer from 'components/App/Footer'
import EventDetailsContent from 'components/Events/EventDetailsContent'

const Event = ({ data }) => {
  return (
    <Layout title={data.event.name}>
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

export const query = graphql`
  query GetSingleEvent($slug: String) {
    event: strapiEvent(slug: { eq: $slug }) {
      slug
      name
      start
      end
      status
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
              childImageSharp {
                gatsbyImageData(width: 380)
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
          )
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
            )
          }
        }
      }
      content {
        embeddedVideo
        markdown
        slides {
          file {
            name
            childImageSharp {
              gatsbyImageData(
                width: 500
              )
            }
          }
        }
      }
    }
  }
`
