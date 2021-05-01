import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const query = graphql`{
    allStrapiPlayer {
        nodes {
            slug
            name
            role
        }
    }
}
`

const PlayersPage = () => {
    const data = useStaticQuery(query)

    return (
        <Layout>
            <Seo title="Players" />
            <ol>
                {
                    data.allStrapiPlayer.nodes.map(player => {
                        return (
                            <li>
                                <Link to={player.slug}>
                                    <h2>{player.name}</h2>
                                    <p>{player.role}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ol>
        </Layout>
    )
}

export default PlayersPage