import React from 'react'
import Layout from 'components/App/Layout'
import Navbar from 'components/App/Navbar'
import Footer from 'components/App/Footer'
import MainBanner from 'components/Others/DataScienceOnlineCourses/MainBanner'
import Partner from 'components/Others/DataScienceOnlineCourses/Partner'
import FeaturedServices from 'components/Others/DataScienceOnlineCourses/FeaturedServices'
import AboutUs from 'components/Others/DataScienceOnlineCourses/AboutUs'
import OurMission from 'components/Others/DataScienceOnlineCourses/OurMission'
import Funfacts from 'components/Others/DataScienceOnlineCourses/Funfacts'
import Courses from 'components/Others/DataScienceOnlineCourses/Courses'
import ExploreLearning from 'components/Others/DataScienceOnlineCourses/ExploreLearning'
import UpcomingBootcamps from 'components/Others/DataScienceOnlineCourses/UpcomingBootcamps'
import Testimonials from 'components/Others/DataScienceOnlineCourses/Testimonials'
import OurBlog from 'components/Others/DataScienceOnlineCourses/BlogPost'
import Subscribe from 'components/Others/DataScienceOnlineCourses/Subscribe'

const Index = () => {
    return (
        <Layout>
            <Navbar />
            <MainBanner />
            <Partner />
            <FeaturedServices />
            <AboutUs />
            <OurMission />
            <Funfacts />
            <Courses />
            <ExploreLearning />
            <UpcomingBootcamps />
            <Testimonials />
            <OurBlog />
            <Subscribe />
            <Footer />
        </Layout>
    )
}

export default Index
