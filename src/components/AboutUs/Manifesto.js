import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Markdown from 'markdown-to-jsx'

const Manifesto = () => {
    const { manifesto } = useStaticQuery(query)
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 pt-70">
            <div className="about-text">
                <h3>Manifesto</h3>
                <p>{manifesto.introduction}</p>
                
                <ul className="features-list">
                    {
                        manifesto.items.map(item => {
                            return(
                                <li><i className="flaticon-tick"></i> <Markdown>{item.text}</Markdown></li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Manifesto

const query = graphql`
query GetManifesto {
    manifesto: strapiManifesto {
      introduction
      items {
        text
      }
    }
  }
`
