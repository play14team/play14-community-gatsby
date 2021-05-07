import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import OurHistoryContent from '../components/History/OurHistoryContent'

const History = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="History" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="History" 
            />
            <OurHistoryContent />
            <Footer />
        </Layout>
    );
}

export default History