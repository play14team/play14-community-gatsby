import { useStaticQuery, graphql } from "gatsby"

export const useContact = () => {
    const { contacts } = useStaticQuery(
      graphql`
        query {
          contacts : strapiContact {
            name
            email
            shortDescription
            socialnetworks {
              type
              url
            }
            address {
              number
              street
              postalCode
              city
              country
            }
          }
        }
      `
    )
  
    return contacts
}