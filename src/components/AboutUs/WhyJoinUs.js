import React from 'react'
import { Link } from 'gatsby'
import starIcon from 'assets/images/star-icon.png'

const WhyJoinUs = () => {
    return (
        <section className="how-its-work-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={starIcon} alt="banner" /> 
                                People Love To Play
                            </span>
                            <h2>Why join us?</h2>
                            <p>Human beings have been playing together since the dawn of time. Joins us an you will be able to learn incredible new things and meet awesome pepole.</p>
                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Register to an event</h3>
                                    <p>The first thing you need to do is to register for <Link to="/events">an event near you</Link>.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>Join the event</h3>
                                    <p>The second thing is to join the event on time, and keep your mind open.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        3
                                    </div>
                                    <h3>Play and learn</h3>
                                    <p>During the event, you will meet incredible new peple and get the chance to learn from them. 
                                        It doesn't matter whether you propose activities, or just participate. 
                                        All we ask from you is to be present and behave like a descent person.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-video">
                            <iframe width="100%" height="330" src="https://www.youtube.com/embed/86DrKsf6uvk" title="#play14 London 2017" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyJoinUs