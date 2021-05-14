import React from 'react';
import Navbar from 'components/App/Navbar'
import Footer from 'components/App/Footer'
import Layout from 'components/App/Layout'
import MainBanner from 'components/Others/BigDataAnalysisStartup/MainBanner'
import FeaturedServices from 'components/Others/BigDataAnalysisStartup/FeaturedServices'
import WhyChooseUs from 'components/Others/BigDataAnalysisStartup/WhyChooseUs'
import WhatWeDo from 'components/Others/BigDataAnalysisStartup/WhatWeDo'
import Funfacts from 'components/Others/BigDataAnalysisStartup/Funfacts'
import Services from 'components/Others/BigDataAnalysisStartup/Services'
import Testimonials from 'components/Others/BigDataAnalysisStartup/Testimonials'
import WeServe from 'components/Others/BigDataAnalysisStartup/WeServe'
import TeamMembers from 'components/Others/BigDataAnalysisStartup/TeamMembers'
import CaseStudy from 'components/Others/BigDataAnalysisStartup/CaseStudy'
import BlogPost from 'components/Others/BigDataAnalysisStartup/BlogPost'
import StartProject from 'components/Common/StartProject';

const Home = () => {
    return (
        <Layout>
            <Navbar />
            <MainBanner />
            <FeaturedServices />
            <WhyChooseUs />
            <WhatWeDo />
            <Funfacts />
            <Services />
            <Testimonials />
            <WeServe />
            <TeamMembers />
            <CaseStudy />
            <BlogPost />
            <StartProject />
            <Footer />
        </Layout>
    );
}

export default Home;