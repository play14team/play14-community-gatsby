import React from 'react'
import Layout from 'components/App/Layout'
import Navbar from 'components/App/Navbar'
import Footer from 'components/App/Footer'
import MainBanner from 'components/Others/DigitalMarketingAgency/MainBanner'
import FeaturedServices from 'components/Others/DigitalMarketingAgency/FeaturedServices'
import Partner from 'components/Others/DigitalMarketingAgency/Partner'
import AboutUs from 'components/Others/DigitalMarketingAgency/AboutUs'
import Services from 'components/Others/DigitalMarketingAgency/Services'
import FunFacts from 'components/Others/DigitalMarketingAgency/FunFacts'
import Projects from 'components/Others/DigitalMarketingAgency/Projects'
import TeamMembers from 'components/Others/DigitalMarketingAgency/TeamMembers'
import Testimonials from 'components/Others/DigitalMarketingAgency/Testimonials'
import Pricing from 'components/Others/DigitalMarketingAgency/Pricing'
import StartProject from 'components/Others/DigitalMarketingAgency/StartProject'
import OurBlog from 'components/Others/DigitalMarketingAgency/BlogPost'

const Index = () => {
    return (
        <Layout>
            <Navbar />
            <MainBanner />
            <FeaturedServices />
            <Partner />
            <AboutUs />
            <Services />
            <FunFacts />
            <Projects />
            <TeamMembers />
            <Testimonials />
            <Pricing />
            <StartProject />
            <OurBlog />
            <Footer />
        </Layout>
    );
}

export default Index