import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import aboutImage from 'assets/images/play14-movement.png'
import starIcon from 'assets/images/star-icon.png'
import icon4 from 'assets/images/icons/icon4.png'
import icon5 from 'assets/images/icons/icon5.png'
import icon6 from 'assets/images/icons/icon6.png'
import icon7 from 'assets/images/icons/icon7.png'

const OurNumbers = () => {
    const { numberOfEvents, numberOfPlayers, numberOfGames } = useStaticQuery(query)
    return (
        <div className="container pb-100">
            <div className="row align-items-center">

                <div className="col-lg-12 col-md-12">
                    <div className="about-content">
                        <div className="content">
                            <span className="sub-title">
                                <img src={starIcon} alt="banner" /> 
                                We keep growing
                            </span>
                            <h2>Our numbers</h2>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="about-image">
                        <img src={aboutImage} alt="banner" />
                    </div>
                </div>

                <div className="col-lg-6 col-md-12">
                    <div className="about-content">
                        <div className="content">
                            <ul className="features-list">
                                <li>
                                    <img src={icon4} alt="banner" />
                                    <h3>{numberOfEvents.totalCount}</h3>
                                    <p>Events hosted</p>
                                </li>
                                <li>
                                    <img src={icon5} alt="banner" />
                                    <h3>{numberOfPlayers.totalCount}+</h3>
                                    <p>Players joined</p>
                                </li>
                                <li>
                                    <img src={icon7} alt="banner" />
                                    <h3>5</h3>
                                    <p>Continents</p>
                                </li>
                                <li>
                                    <img src={icon6} alt="banner" />
                                    <h3>{numberOfGames.totalCount}</h3>
                                    <p>Games documented</p>
                                </li>
                            </ul>
                            <Link to="/history" className="default-btn">
                                <i className="flaticon-right"></i>Learn our history<span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OurNumbers

const query = graphql`
query GetNumbers {
    numberOfEvents: allStrapiEvent {
      totalCount
    }
    numberOfPlayers: allStrapiPlayer {
      totalCount
    }
    numberOfGames: allStrapiGame {
      totalCount
    }
  }
`

