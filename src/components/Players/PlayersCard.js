import React from 'react'
import { Link } from 'gatsby'
import SocialLinks from "../Socials/SocialLinks"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PlayersCard = (props) => {
    const { players } = props

    console.log(players)

    return (
        <section className="scientist-area pb-70">
        <div className="container">
            <div className="row">
              {
                players.nodes.map(player => {
                    return (
                        <div key={player.slug} className="col-lg-3 col-sm-6">
                            <div className="single-scientist-item-box">
                                <div className="image">
                                    <Link to={player.slug}>
                                        <GatsbyImage image={getImage(player.avatar)} alt={player.name} />
                                    </Link>
                                    <SocialLinks socialNetworks={player.socialNetworks} className="social" />
                                </div>
                                <div className="content">
                                    <Link to={player.slug}>
                                        <h3>{player.name}</h3>
                                    </Link>
                                    <span>{player.headline}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
              }
          </div>
        </div>
      </section>
    )
}

export default PlayersCard;