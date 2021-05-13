import React from 'react'
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import OurHistory from '../components/AboutUs/OurHistory'

const History = () => {
    return (
        <Layout title="History">
            <Navbar />
            <PageBanner
                pageTitle="History" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="History" 
            />
            <OurHistory />
            <Footer />
        </Layout>
    );
}

export default History