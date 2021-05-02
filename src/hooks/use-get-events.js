import { useStaticQuery, graphql } from "gatsby"

export const useGetEvents = () => {
    const { events } = useStaticQuery(
      graphql`
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
            images {
              name
              alternativeText
              formats {
                small {
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
    )

    return events.nodes
  }