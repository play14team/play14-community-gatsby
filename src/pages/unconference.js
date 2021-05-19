import React from 'react'
import Layout from 'components/App/Layout'
import Navbar from 'components/App/Navbar'
import PageBanner from 'components/Common/PageBanner'
import OpenSpacePrinciples from 'components/AboutUs/OpenSpacePrinciples'
import Marketplace from 'components/AboutUs/Marketplace'
import FAQ from 'components/AboutUs/FAQ'
import Footer from 'components/App/Footer'

const Unconference = () => {
    return (
        <Layout title="Unconference">
            <Navbar />
            <PageBanner
                pageTitle="Unconference" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Unconference" 
            />
            <OpenSpacePrinciples />
            <Marketplace />
            <FAQ />
            <Footer />
        </Layout>
    )
}

export default Unconference