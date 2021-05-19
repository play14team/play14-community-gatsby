import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Markdown from 'markdown-to-jsx'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import starIcon from 'assets/images/star-icon.png'
import process1 from 'assets/images/process/process1.png'
import process2 from 'assets/images/process/process2.png'
import process3 from 'assets/images/process/process3.png'
import process4 from 'assets/images/process/process4.png'
import process5 from 'assets/images/process/process5.png'
import process6 from 'assets/images/process/process6.png'
import shape from 'assets/images/shape/circle-shape1.png'

const Marketplace = () => {
    const { marketplace } = useStaticQuery(query)

    return (
        <section className="process-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="about" /> 
                        How it works
                    </span>
                    <h2>{marketplace.title}</h2>
                    <Markdown>{marketplace.description}</Markdown>
                </div>

                <div className="row">
                    { marketplace.marketplacesteps.map((step, i) =>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-process-box">
                                <div className="number">{i+1}</div>
                                <h3>{step.title}</h3>
                                <div className="image">
                                    <GatsbyImage image={getImage(step.sketch)} alt={step.title} />
                                </div>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            <div className="circle-shape1">
                <img src={shape} alt="about" />
            </div>
        </section>
    )
}

export default Marketplace

const query = graphql`
query {
    marketplace : strapiMarketplace {
      title
      description
      marketplacesteps {
        title
        description
        sketch {
          childImageSharp {
            gatsbyImageData (height:250)
          }
        }
      }
    }
  }
`