import React from 'react'
import {Link} from 'gatsby'

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SocialLinks from "../Socials/SocialLinks"

const EventPlayers = (props) => {
    const { players, name } = props

    if (players.length > 0) 
        return (
            <div className="scientist-area bg-fafafb pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h3>{name}</h3>
                        <span className="sub-title">
                            <i className="flaticon-user"></i> {players.length}
                        </span>
                    </div>
                    <div className="row">
                    {
                        players.map(player => {
                            const url = `/players/${player.slug}`
                            return (
                                <div className="col-lg-4 col-sm-6 col-md-6">
                                    <div className="single-scientist-item-box">
                                        <div className="image">
                                            <Link to={url}>
                                                <GatsbyImage image={getImage(player.avatar)} alt={player.name} />
                                            </Link>
                                            <SocialLinks socialNetworks={player.socialNetworks} className="social" />
                                        </div>
                                        <div className="content">
                                            <Link to={url}>
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
                <hr></hr>
            </div>
        )
    else
        return ''
}

export default EventPlayers