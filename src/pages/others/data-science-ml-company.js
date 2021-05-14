import React from 'react'
import Navbar from 'components/App/Navbar'
import Footer from 'components/App/Footer'
import Layout from 'components/App/Layout'
import MainBanner from 'components/Others/DataScienceAndMLCompany/MainBanner'
import OurSolutions from 'components/Others/DataScienceAndMLCompany/OurSolutions'
import AboutUs from 'components/Others/DataScienceAndMLCompany/AboutUs'
import OurServices from 'components/Others/DataScienceAndMLCompany/OurServices'
import HowItWork from 'components/Others/DataScienceAndMLCompany/HowItWork'
import CaseStudySlider from 'components/Others/DataScienceAndMLCompany/CaseStudySlider'
import TeamMembers from 'components/Others/DataScienceAndMLCompany/TeamMembers'
import Testimonials from 'components/Others/DataScienceAndMLCompany/Testimonials'
import Partner from 'components/Others/DataScienceAndMLCompany/Partner'
import OurBlog from 'components/Others/DataScienceAndMLCompany/BlogPost'
import StartProject from 'components/Others/DataScienceAndMLCompany/StartProject'

const Home = () => {
  return (
    <Layout>
      <Navbar />
      <MainBanner />
      <OurSolutions />
      <AboutUs />
      <OurServices />
      <HowItWork />
      <CaseStudySlider />
      <TeamMembers />
      <Testimonials />
      <Partner />
      <OurBlog />
      <StartProject />
      <Footer />
    </Layout>
  )
}

export default Home