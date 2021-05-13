import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Markdown from "markdown-to-jsx"

import aboutImage from '../../assets/images/play14-movement.png'
import starIcon from '../../assets/images/star-icon.png'
import icon4 from '../../assets/images/icons/icon4.png'
import icon5 from '../../assets/images/icons/icon5.png'
import icon6 from '../../assets/images/icons/icon6.png'
import icon7 from '../../assets/images/icons/icon7.png'
import shape1 from '../../assets/images/shape/circle-shape1.png'

const AboutUsContent = () => {
    const { manifesto, codeOfConduct, numberOfEvents, numberOfPlayers, numberOfGames } = useStaticQuery(query)
    return (
        <section className="about-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={aboutImage} alt="banner" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner" /> 
                                    About Us
                                </span>
                                <h2>#play14 in numbers</h2>
                                <p>
                                </p>
                                
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
                                <p>
                                    There are only few rules at #play14, but we strongly believe in the importance of the rules we have. 
                                    They are what makes #play14 a special place. Please read them before you join an event and make sure to have them in mind when you are on site.
                                </p>
                                
                                <Link to="/history" className="default-btn">
                                    <i className="flaticon-right"></i>Learn our history<span></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>


            <div className="container">
                <div className="about-inner-area">
                    <div className="row">

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our Manifesto</h3>
                                <p>{manifesto.introduction}</p>
                                
                                <ul className="features-list">
                                    {
                                        manifesto.items.map(item => {
                                            return(
                                                <li><i className="flaticon-tick"></i> <Markdown>{item.text}</Markdown></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="about-text">
                                <h3>Our Code of Conduct</h3>
                                <p>{codeOfConduct.introduction}</p>
                                
                                <ul className="features-list">
                                    {
                                        codeOfConduct.items.map(item => {
                                            return(
                                                <li><i className="flaticon-tick"></i> <Markdown>{item.text}</Markdown></li>
                                            )
                                        })
                                    }
                                </ul>
                                <br/>
                                <p>{codeOfConduct.conclusion}</p>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default AboutUsContent

const query = graphql`
query GetManifesto {
    manifesto: strapiManifesto {
      introduction
      items {
        text
      }
    }
    codeOfConduct: strapiCodeOfConduct {
      introduction
      items {
        text
      }
      conclusion
    }
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

