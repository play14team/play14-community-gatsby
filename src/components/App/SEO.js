import React from 'react'
import { Helmet } from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                <title>#play14 - We believe in playfulness</title>
                <meta name="description" content="#play14 - We believe in playfulness" />
                <meta name="og:title" property="og:title" content="#play14 - We believe in playfulness"></meta>
                <meta name="twitter:card" content="#play14 - We believe in playfulness"></meta>
                <link rel="canonical" href="https://rewy-react.envytheme.com/"></link>
                <meta property="og:image" content="https://play14.org/images/logo.png" />
            </Helmet>
        </div>
    )
}

export default SEO
