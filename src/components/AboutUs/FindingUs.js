import React from 'react'

import starIcon from 'assets/images/star-icon.png'
import MarkersMap from 'components/Maps/MarkersMap'

const FindingUs = () => {
    return (
        <section className="cities-map ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={starIcon} alt="banner" /> 
                                We are worldwide
                            </span>
                            <h2>Finding us</h2>
                            <iframe title="#play14 cities" src="https://www.google.com/maps/d/u/0/embed?mid=1mBESZcyTHMeyNmQOEPH2YK8TgvOaFBEa" width="100%" height="480"></iframe>
                            {/* <MarkersMap /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FindingUs