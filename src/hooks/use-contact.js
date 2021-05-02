import { useStaticQuery, graphql } from "gatsby"

export const useContact = () => {
    const { contacts } = useStaticQuery(
      graphql`
        query {
          contacts : strapiContact {
            name
            email
            shortDescription
            socialNetworks {
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