import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from 'components//Common/PageBanner'
import Footer from "../components/App/Footer"
import BlogDetailsContent from 'components//BlogContent/BlogDetailsContent'

const BlogDetails = (props) => {
    return (
        <Layout title={props.data.post.edges[0].node.title}>
            <Navbar />
            <PageBanner
                pageTitle={props.data.post.edges[0].node.title}
                homePageText="Blog" 
                homePageUrl="/blog" 
                activePageText={props.data.post.edges[0].node.title}
            /> 
            <BlogDetailsContent post={props.data.post.edges[0]} />
            <Footer />
        </Layout>
    )
}

export default BlogDetails

export const query = graphql`
query GetBlogPost($slug: String) {
  post : allStrapiBlog(filter: {slug: { eq: $slug}}) {
    edges {
      node {
        title
        content
        updatedAt
        image {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
        date
        slug
        author {
          name
          avatar {
            childImageSharp {
              gatsbyImageData(width: 250)
            }
          }
        }
      }
      next {
        slug
      }
      previous {
        slug
      }
    }
  }
}
`
