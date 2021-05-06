import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import BlogDetailsContent from '../components/BlogContent/BlogDetailsContent'

export const query = graphql`
query GetSinglePost($slug: String) {
    post: strapiBlog(slug: { eq: $slug }) {
      slug
      title
      image {
        childImageSharp {
          gatsbyImageData (
                width: 300
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
  
`

const BlogDetails = (props) => {
    console.log("@@@@@@@@@@")
    console.log(props)

    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle={props.data.post.title}
                homePageText="Blog" 
                homePageUrl="/blog" 
                activePageText={props.data.post.title}
            /> 
            <BlogDetailsContent post={props.data.post} />
            <Footer />
        </Layout>
    )
}

export default BlogDetails;