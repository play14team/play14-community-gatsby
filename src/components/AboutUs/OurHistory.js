import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Markdown from 'markdown-to-jsx'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Moment from 'react-moment';
import 'moment-timezone';

import starIcon from 'assets/images/star-icon.png'


const OurHistory = () => {
    const { history } = useStaticQuery(query)
    return (
        <section className="history-area bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" /> 
                        Our History
                    </span>
                    <h2>{history.beginning}</h2>
                </div>

                <Markdown>{history.description}</Markdown>

                <ol className="timeline history-timeline">
                    {
                        history.timeline.map(timeline => {
                            return (
                                <li className="timeline-block">
                                    <div className="timeline-date">
                                        <span><Moment format="YYYY">{timeline.date}</Moment></span>
                                        <Moment format="MMMM DD">{timeline.date}</Moment>
                                    </div>
            
                                    <div className="timeline-icon">
                                        <span className="dot-badge"></span>
                                    </div>
            
                                    <div className="timeline-content">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-md-12">
                                                <div className="content">
                                                    <h3>{timeline.title}</h3>
                                                    <p>{timeline.description}</p>
                                                </div>
                                            </div>
            
                                            <div className="col-lg-5 col-md-12">
                                                <div className="image">
                                                    <GatsbyImage image={getImage(timeline.image)} alt={timeline.title} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }


                </ol>
            </div>
        </section>
    )
}

export default OurHistory

export const query = graphql`
 query GetHistory {
    history: strapiHistory {
      beginning
      description
      timeline {
        title
        date
        description
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

