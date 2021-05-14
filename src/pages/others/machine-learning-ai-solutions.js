import React from 'react';
import Navbar from 'components/App/Navbar'
import Footer from 'components/App/Footer'
import Layout from 'components/App/Layout'

import MainBanner from 'components/Others/MachineLearningAISolutions/MainBanner';
import Solutions from 'components/Others/MachineLearningAISolutions/Solutions';
import AboutUs from 'components/Others/MachineLearningAISolutions/AboutUs';
import Services from 'components/Others/MachineLearningAISolutions/Services';
import HowItWork from 'components/Others/MachineLearningAISolutions/HowItWork';
import RecentProjects from 'components/Others/MachineLearningAISolutions/RecentProjects';
import TeamMember from 'components/Others/MachineLearningAISolutions/TeamMember';
import Testimonials from 'components/Others/MachineLearningAISolutions/Testimonials';
import Partner from 'components/Others/MachineLearningAISolutions/Partner';
import OurBlog from 'components/Others/MachineLearningAISolutions/OurBlog';
import ProjectStartArea from 'components/Others/MachineLearningAISolutions/ProjectStartArea';


const Home = () => {
    return (
        <Layout>
            <Navbar />
            <MainBanner />
            <Solutions />
            <AboutUs />
            <Services />
            <HowItWork />
            <RecentProjects />
            <TeamMember />
            <Testimonials /> 
            <Partner /> 
            <OurBlog />
            <ProjectStartArea /> 
            <Footer />
        </Layout>
    );
}

export default Home;