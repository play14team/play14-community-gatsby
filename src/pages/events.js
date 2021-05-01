import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const query = graphql`{
    allStrapiEvent {
        nodes {
            slug
            name
            date
        }
    }
}
`

const EventsPage = () => {
    const data = useStaticQuery(query)

    return (
        <Layout>
            <Seo title="Events" />
            <ol>
                {
                    data.allStrapiEvent.nodes.map(event => {
                        return (
                            <li>
                                <Link to={event.slug}>
                                    <h2>{event.name}</h2>
                                    <p>{event.date}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
}

export default EventsPage