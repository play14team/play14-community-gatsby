import React from 'react'
import Navbar from 'components/App/Navbar'
import Footer from 'components/App/Footer'
import Layout from 'components/App/Layout'
import MainBanner from 'components/Others/DataAnalyticsAIStartup/MainBanner'
import FeaturedService from 'components/Others/DataAnalyticsAIStartup/FeaturedService'
import AboutUs from 'components/Others/DataAnalyticsAIStartup/AboutUs'
import OurMission from 'components/Others/DataAnalyticsAIStartup/OurMission'
import Funfacts from 'components/Others/DataAnalyticsAIStartup/Funfacts'
import OurServices from 'components/Others/DataAnalyticsAIStartup/OurServices'
import HowItWork from 'components/Others/DataAnalyticsAIStartup/HowItWork'
import TeamMembers from 'components/Others/DataAnalyticsAIStartup/TeamMembers'
import Testimonials from 'components/Others/DataAnalyticsAIStartup/Testimonials'
import Partner from 'components/Others/DataAnalyticsAIStartup/Partner'
import StartProject from 'components/Others/DataAnalyticsAIStartup/StartProject'
import OurBlog from 'components/Others/DataAnalyticsAIStartup/BlogPost'

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
      <FeaturedService />
      <AboutUs />
      <OurMission />
      <Funfacts />
      <OurServices />
      <HowItWork />
      <TeamMembers />
      <Testimonials />
      <Partner />
      <StartProject />
      <OurBlog />
      
      <Footer />
    </Layout>
  )
}

export default Home