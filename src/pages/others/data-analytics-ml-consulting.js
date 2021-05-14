import React from 'react'
import Navbar from 'components/App/Navbar'
import Footer from 'components/App/Footer'
import Layout from 'components/App/Layout'
import MainBanner from 'components/Others/DataAnalyticsMLConsulting/MainBanner'
import OurSolutions from 'components/Others/DataAnalyticsMLConsulting/OurSolutions'
import AboutArea from 'components/Others/DataAnalyticsMLConsulting/AboutArea'
import OurMission from 'components/Others/DataAnalyticsMLConsulting/OurMission'
import Funfacts from 'components/Others/DataAnalyticsMLConsulting/Funfacts'
import UpcomingBootcamps from 'components/Others/DataAnalyticsMLConsulting/UpcomingBootcamps'
import HowItWork from 'components/Others/DataAnalyticsMLConsulting/HowItWork'
import RecentProjects from 'components/Others/DataAnalyticsMLConsulting/RecentProjects'
import TeamMembers from 'components/Others/DataAnalyticsMLConsulting/TeamMembers'
import Testimonials from 'components/Others/DataAnalyticsMLConsulting/Testimonials'
import Partner from 'components/Others/DataAnalyticsMLConsulting/Partner'
import BlogPost from 'components/Others/DataAnalyticsMLConsulting/BlogPost'
import StartProjectTwo from 'components/Common/StartProjectTwo'


const Home = () => {
    return (
        <Layout>
            <Navbar />
            <MainBanner />
            <OurSolutions />
            <AboutArea />
            <OurMission />
            <Funfacts />
            <UpcomingBootcamps />
            <HowItWork />
            <RecentProjects />
            <TeamMembers />
            <Testimonials />
            <Partner />
            <BlogPost />
            <StartProjectTwo />
            <Footer />
        </Layout>
    )
}

export default Home