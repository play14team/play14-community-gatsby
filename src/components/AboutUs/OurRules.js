import React from 'react'
import Manifesto from 'components/AboutUs/Manifesto'
import CodeOfConduct from 'components/AboutUs/CodeOfConduct'

import shape1 from 'assets/images/shape/circle-shape1.png'
import starIcon from 'assets/images/star-icon.png'

const OurRules = () => {
    return (
        <section className="our-rules-area pb-100">
            <div className="container">
                <div className="how-its-work-content">
                    <span className="sub-title">
                        <img src={starIcon} alt="banner" /> 
                        We care about others
                    </span>
                    <h2>Our rules</h2>
                    <p>
                        There are only a few rules at #play14, but we strongly believe in the importance of these rules. 
                        They are what makes #play14 a special place. Please read them before you join an event and make sure you are ready to comply with them when you are on site.
                    </p>
                </div>
                <div className="row">
                    <Manifesto />
                    <CodeOfConduct />
                </div>
            </div>
            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default OurRules
