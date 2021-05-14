import React from 'react'
import Layout from 'components/App/Layout'
import Navbar from 'components/App/Navbar'
import PageBanner from 'components/Common/PageBanner'
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
            <Footer />
        </Layout>
    );
}

export default Unconference