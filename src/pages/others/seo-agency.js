import React from 'react'
import Navbar from 'components/App/Navbar'
import Footer from 'components/App/Footer'
import Layout from 'components/App/Layout'
import Banner from 'components/Others/SEOAgency/Banner'
import FeaturedServices from 'components/Others/SEOAgency/FeaturedServices'
import AboutArea from 'components/Others/SEOAgency/AboutArea'
import FunFacts from 'components/Others/SEOAgency/FunFacts'
import OurServices from 'components/Others/SEOAgency/OurServices'
import CaseStudy from 'components/Others/SEOAgency/CaseStudy'
import WhyChooseUs from 'components/Others/SEOAgency/WhyChooseUs'
import Testimonials from 'components/Others/SEOAgency/Testimonials'
import Pricing from 'components/Others/SEOAgency/Pricing'
import AnalysisForm from 'components/Others/SEOAgency/AnalysisForm'
import Partner from 'components/Others/SEOAgency/Partner'
import OurBlog from 'components/Others/SEOAgency/OurBlog'
import TeamMembers from 'components/Others/SEOAgency/TeamMembers'

const SeoAgency = () => {
    return (
        <Layout>
            <Navbar />
            <Banner />
            <FeaturedServices />
            <AboutArea />
            <FunFacts />
            <OurServices />
            <CaseStudy />
            <WhyChooseUs />
            <Testimonials />
            <Pricing />
            <TeamMembers />
            <AnalysisForm />
            <Partner />
            <OurBlog />
            <Footer />
        </Layout>
    )
}

export default SeoAgency
