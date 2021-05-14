import React from "react"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from 'components//Common/PageBanner'
import Footer from "../components/App/Footer"
import PlayersCard from "../components/Players/PlayersCard"

const PlayersPage = () => {
  return (
    <Layout title="Players">
      <Navbar />
      <PageBanner
          pageTitle="Players" 
          homePageText="Home" 
          homePageUrl="/" 
          activePageText="Players" 
      />
      <PlayersCard />
      <Footer />
    </Layout>
  )
}

export default PlayersPage
