import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SocialLinks from 'components/Socials/SocialLinks'

const Player = (props) => {
    const { player } = props
    const url = `/players/${player.slug}`
    return (
        <div key={player.slug} className="col-lg-3 col-sm-6 col-md-6">
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
}

export default Player