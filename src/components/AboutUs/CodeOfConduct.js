import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Markdown from 'markdown-to-jsx'

const CodeOfConduct = () => {
    const { codeOfConduct } = useStaticQuery(query)
    return (
        <div className="col-lg-6 col-md-6 col-sm-6 pt-70">
            <div className="about-text">
                <h3>Our Code of Conduct</h3>
                <p>{codeOfConduct.introduction}</p>
                
                <ul className="features-list">
                    {
                        codeOfConduct.items.map(item => {
                            return(
                                <li><i className="flaticon-tick"></i> <Markdown>{item.text}</Markdown></li>
                            )
                        })
                    }
                </ul>
                <br/>
                <p>{codeOfConduct.conclusion}</p>
            </div>
        </div>
    )
}

export default CodeOfConduct

const query = graphql`
query GetCodeOfConduct {
    codeOfConduct: strapiCodeOfConduct {
        introduction
        items {
            text
        }
        conclusion
        }
    }
`
