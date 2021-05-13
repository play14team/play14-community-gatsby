import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Players from '../Players/Players'

import starIcon from '../../assets/images/star-icon.png'

const query = graphql`
query GetTeamMembers {
    founders : allStrapiPlayer (  filter : { role : { eq : "Founder" } }, sort : {  fields : name, order : ASC } ) {
        nodes {
        ...player
      }
      }
    mentors : allStrapiPlayer (  filter : { role : { eq : "Mentor" } } , sort : {  fields : name, order : ASC } ) {
        nodes {
        ...player
      }
      }
  }
  
  fragment player on StrapiPlayer {
      name
      role
      headline
      biography
      company
      website
      city
      embeddedMapUrl
      socialNetworks {
        url
        type
      }
      avatar {
        childImageSharp {
          gatsbyImageData(
            width: 500
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
  }
  `

const TeamMembers = (props) => {
    const { founders, mentors } = useStaticQuery(query)

    return (
        <section className="scientist-area bg-color pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" /> 
                        Team Members
                    </span>
                    <h2>Meet the team</h2>
                </div>

                <Players players={founders.nodes} name="Founders" />
                <Players players={mentors.nodes} name="Mentors" />
                
            </div>
        </section>
    )
}

export default TeamMembers