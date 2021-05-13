import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Player from './Player'

const useGetPlayers = () => {
    const result =  useStaticQuery(
        graphql`
            query GetPlayers {
            players: allStrapiPlayer( sort: { fields:slug, order: ASC} ) {
                nodes {
                slug
                name
                headline
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
            }
        }
    `
    )
    return result.players.nodes
}

const PlayersCard = () => {
    const players = useGetPlayers()

    return (
        <section className="scientist-area pb-70">
            <div className="container">
                <div className="row">
                    { players.map(player => <Player player={player} />) }
                </div>
            </div>
        </section>
    )
}

export default PlayersCard;