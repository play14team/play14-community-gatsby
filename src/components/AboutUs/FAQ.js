import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion'
import { graphql, useStaticQuery} from 'gatsby'
import Markdown from 'markdown-to-jsx'

const FAQ = () => {
    const { faq } = useStaticQuery(query)
    return (
        <div className="ptb-100">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 pt-70">
                    <h3>FAQ</h3>
                    <div className="faq-accordion">
                        <Accordion>
                            {faq.questions.map((question, i) => 
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            {`Q${i+1}. ${question.text}`}
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <Markdown>
                                            {question.answer}
                                        </Markdown>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ

const query = graphql`
query {
    faq : strapiFaq {
      questions {
        text
        answer
      }
    }
  }
  
`