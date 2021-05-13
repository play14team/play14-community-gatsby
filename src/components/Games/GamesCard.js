import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {  } from "gatsby"

const GamesCard = () => {
    const games = useGetGames()
    return (
        <div className="courses-area bg-fafafb">
            <div className="container">
                <div className="row">
                    { games.map(game => {
                        return (
                            <div className="col-lg-4 col-md-6">
                                <div className="single-courses-box">
                                    <div className="courses-image">
                                        <Link to={game.slug} className="d-block image">
                                            <GatsbyImage image={getImage(game.defaultImage)} alt={game.name} />
                                        </Link>
                                        <Link to="#" className="fav">
                                            <i className="flaticon-heart"></i>
                                        </Link>
                                        {<div className="price shadow">{game.categories[0].name}</div>}
                                    </div>
                                    <div className="courses-content">
                                        {
                                            game.proposedby.map(player => {
                                                const url = `/players/${player.slug}`
                                                return (
                                                    <div className="course-author d-flex align-items-center">
                                                        <GatsbyImage image={getImage(player.avatar)} className="rounded-circle" alt={game.name} />
                                                        <Link to={url}>
                                                            <span>&nbsp;{player.name}</span>
                                                        </Link>
                                                    </div>
                                                )
                                            })
                                        }

                                        <h3>
                                            <Link to={game.slug}>
                                                {game.name}
                                            </Link>
                                        </h3>
                                        <p>{game.summary}</p>
                                        <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <i className='bx bx-time'></i> {game.timebox}
                                            </li>
                                            <li>
                                                <i className='flaticon-team'></i> {game.scale}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default GamesCard

const useGetGames = () => {
    const { games } = useStaticQuery(
        graphql`
        query GetGames {
            games: allStrapiGame(sort:{fields: name, order:ASC}) {
              totalCount
              nodes {
                slug
                name
                summary
                timebox
                scale
                categories {
                  name
                }
                proposedby {
                  slug
                  name
                  avatar {
                    childImageSharp {
                      gatsbyImageData(width: 35)
                    }
                  }
                }
                defaultImage {
                    childImageSharp {
                    gatsbyImageData(width: 400, height: 250)
                    }
               }
              }
            }
          }
        `
    )
    return games.nodes
}

