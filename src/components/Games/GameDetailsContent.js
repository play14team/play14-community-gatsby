import React from 'react'
import GameSidebar from './GameSidebar'
import Markdown from 'markdown-to-jsx'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const GameDetailsContent = (props) => {
    const { game } = props
    return (
        <section className="services-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="services-details-desc">

                            <div className="row">
                                {
                                    game.categories.map(cat =>
                                        <div className="col-lg-4 col-sm-6 col-md-6">
                                                <div className="single-industries-serve-box">
                                                    <div className="icon">
                                                        <i className={cat.icon}></i>
                                                    </div>
                                                    {cat.name}
                                                </div>
                                            </div>
                                        )
                                    }            
                            </div>

                            <div className="row">
                                <h3>Summary</h3>
                                <p>{game.summary}</p>
                            </div>

                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="image">
                                        <GatsbyImage image={getImage(game.defaultImage)} alt={game.name} />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="content">
                                        <h3>Take aways</h3>
                                        <ul>
                                            {
                                                game.takeaways.map(t => <li>{t.text}</li>)
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            { game.materials.length > 0 &&
                            <div className="col-lg-12 col-md-12">
                                <div className="content">
                                    <h3>Materials</h3>
                                    <ul>
                                        { game.materials.map(m => <li>{m.text}</li>) }
                                    </ul>
                                </div>
                            </div> 
                            }

                            { game.preparationSteps.length > 0 &&
                            <div className="col-lg-12 col-md-12">
                                <div className="content">
                                    <h3>Preparation</h3>
                                    <ul>
                                        { game.preparationSteps.map(m => <li>{m.text}</li>) }
                                    </ul>
                                </div>
                            </div> 
                            }

                            { game.safety.length > 0 &&
                            <div className="col-lg-12 col-md-12">
                                <div className="content">
                                    <h3>Safety</h3>
                                    <ul>
                                        { game.safety.map(s => <li><strong>{s.name}</strong>: {s.value}</li>) }
                                    </ul>
                                </div>
                            </div> 
                            }

                            <hr></hr>

                            <div className="row">
                                <Markdown>{game.description}</Markdown>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <GameSidebar game={game} />
                    </div>

                    {/* <h3>Game metrics</h3>
                    <div className="col-lg-12 col-md-12">
                        {
                            game.metrics.map(metric => {
                                return (
                                    <div>
                                        <div className="side">
                                            <div>{metric.name}</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className={`bar-${(metric.value/20)}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default GameDetailsContent