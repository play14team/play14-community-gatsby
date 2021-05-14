import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from 'components//Common/PageBanner'
import Footer from "../components/App/Footer"
import GamesCard from 'components//Games/GamesCard'

const Games = () => {
    return (
        <Layout title="Games">
            <Navbar />
            <PageBanner
                pageTitle="Games" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Games" 
            />
            <GamesCard />
            <Footer />
        </Layout>
    );
}

export default Games