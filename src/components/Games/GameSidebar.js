import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Moment from 'react-moment'

const GameSidebar = (props) => {
    const { game } = props
    return (
        <div className="services-details-info">
            <div className="services-contact-info">
                <h3>Details</h3>
                
                <ul>
                    <li>
                        <div className="icon">
                            <i className='bx bx-time'></i>
                        </div>
                        <span>Timebox</span>
                        {game.timebox}
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-user-circle'></i>
                        </div>
                        <span>Scale</span>
                        {game.scale}
                    </li>
                    {   game.firstplayed && 
                        <li>
                            <div className="icon">
                                <i className='bx bx-map'></i>
                            </div>
                            <span>First played</span>
                            {game.firstplayed.name}
                        </li>
                    }
                    <li>
                        <div className="icon">
                            <i className='bx bx-bulb'></i>
                        </div>
                        <span>Proposed by</span>
                        {
                            game.proposedby.map(player => {
                                const url = `/players/${player.slug}`
                                return (
                                    <a href={url}>
                                        <GatsbyImage image={getImage(player.avatar)} alt={player.name} />
                                        &nbsp;
                                        {player.name}
                                    </a>
                                )
                            })
                        }
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-edit'></i>
                        </div>
                        <span>Written by</span>
                        {
                            game.writtenby.map(player => {
                                const url = `/players/${player.slug}`
                                return (
                                    <a href={url}>
                                        <GatsbyImage image={getImage(player.avatar)} alt={player.name} />
                                        &nbsp;
                                        {player.name}
                                    </a>
                                )
                            })
                        }
                    </li>
                    <li>
                        <div className="icon">
                            <i className='bx bx-book-open'></i>
                        </div>
                        <span>Pubished</span>
                        <Moment format="MMMM DD, YYYY">{game.publishdate}</Moment>
                    </li>
                </ul>
            </div>

            {   game.resources.length > 0 &&
                <div className="download-file">
                    <h3>Resources</h3>

                    <ul>
                        {game.resources.map(r => {
                            const icon = `bx bxs-file-${r.file.extension}`
                            return(
                                <li>
                                    <a href={r.file.publicURL} target="_blank" rel="noreferrer">
                                        {r.name} <i className={icon}></i>
                                    </a>
                                </li>
                            )}
                            )}
                    </ul>
                </div>
            }
            
        </div>
    )
}

export default GameSidebar