import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PlayerssSidebar from './PlayerSidebar'
import SocialLinks from "../Socials/SocialLinks"

const PlayerDetailsContent = (props) => {
    const { player } = props

    return (
        <section className="case-studies-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="case-studies-details-image">
                            <GatsbyImage image={getImage(player.avatar.childImageSharp)} alt={player.name} />
                        </div>

                        <div className="case-studies-details-desc">
                            <h3>{player.headline}</h3>
                            <div className="single-footer-widget">
                                <SocialLinks socialNetworks={player.socialNetworks} className="social-link" />
                            </div>
                            {player.biography ? <span className="sub-title">Biography</span> : ''}
                            <br/>
                            <p>{player.biography}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <PlayerssSidebar player={player} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PlayerDetailsContent