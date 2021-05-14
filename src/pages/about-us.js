import React from 'react'
import Layout from 'components/App/Layout'
import Navbar from 'components/App/Navbar'
import PageBanner from 'components/Common/PageBanner'
import Footer from 'components/App/Footer'
import OurRules from 'components/AboutUs/OurRules'
import OurNumbers from 'components/AboutUs/OurNumbers'
import WhyJoinUs from 'components/AboutUs/WhyJoinUs'
import HowItWorks from 'components/AboutUs/HowItWorks'
import TeamMembers from 'components/AboutUs/TeamMembers'
import Testimonials from 'components/AboutUs/Testimonials'
import Partner from 'components/AboutUs/Partner'
import FindingUs from 'components/AboutUs/FindingUs'
 
const AboutUs = () => {
    return (
        <Layout title='About Us'>
            <Navbar />
            <PageBanner
                pageTitle='About Us' 
                homePageText='Home' 
                homePageUrl='/' 
                activePageText='About Us' 
            />
            <WhyJoinUs />
            <OurNumbers />
            <OurRules />
            <HowItWorks />
            <FindingUs />
            <TeamMembers />
            <Testimonials />
            <Partner />
            <Footer />
        </Layout>
    );
}

export default AboutUs;