import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Markdown from 'markdown-to-jsx'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import starIcon from 'assets/images/star-icon.png'

const OpenSpacePrinciples = () => {
    const { unconference } = useStaticQuery(query)
    return (
        <section className="process-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" /> 
                        Open space technology
                    </span>
                    <h2>What is an unconference ?</h2>
                </div>
                <Markdown>{unconference.description}</Markdown>

                <div className="ptb-70">
                    <h2>Principles</h2>
                    <div className="row">
                        { unconference.principles.map((principle, i) => {
                            const col = i > 2 ? 6 : 4
                            return (
                                <div className={`col-lg-${col} col-sm-6`}>
                                    <div className="single-solutions-box">
                                        <div className="icon">
                                            <i className={principle.icon}></i>
                                        </div>
                                        <h3>
                                            {principle.text}
                                        </h3>
                                        <p>{principle.description}</p>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>

                <hr></hr>
                <div className="ptb-70">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <h3>Law of two feet</h3>
                            <GatsbyImage image={getImage(unconference.lawoftwofeetimage)} alt="Law of two feet" />
                            <p>{unconference.lawoftwofeet}</p>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <h3>Bumblebee</h3>
                            <p>{unconference.bumblebee}</p>
                            <GatsbyImage image={getImage(unconference.bumblebeeimage)} alt="Law of two feet" />
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <h3>Butterfly</h3>
                            <GatsbyImage image={getImage(unconference.butterflyimage)} alt="Law of two feet" />
                            <p>{unconference.butterfly}</p>
                        </div>
                    </div>
                </div>
                <hr></hr>

            </div>
        </section>
    )
}

export default OpenSpacePrinciples

const query = graphql`
query {
    unconference : strapiUnconference {
      description
      principles {
        text
        description
        icon
      }
      lawoftwofeet
      lawoftwofeetimage {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
      bumblebee
      bumblebeeimage {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
      butterfly
      butterflyimage {
        childImageSharp {
          gatsbyImageData(width: 300)
        }
      }
    }
  }
`