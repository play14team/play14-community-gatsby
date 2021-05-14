import React from 'react'
import Layout from 'components/App/Layout'
import Navbar from 'components/App/Navbar'
import PageBanner from 'components/Common/PageBanner'
import Footer from 'components/App/Footer'
import TestimonialsStyleOne from 'components/Others/Testimonials/TestimonialsStyleOne'
import TestimonialsStyleTwo from 'components/Others/Testimonials/TestimonialsStyleTwo'

const Testimonials = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle="Testimonials" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Testimonials" 
            />
            <TestimonialsStyleOne />
            <TestimonialsStyleTwo />
            <Footer />
        </Layout>
    );
}

export default Testimonials