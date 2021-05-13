import React from 'react'
import {Link} from 'gatsby'
import Moment from 'react-moment';
import 'moment-timezone';

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const useGetBlogPosts = () => {
    const { posts } = useStaticQuery(
        graphql`
        query GetBlogPosts {
            posts: allStrapiBlog(sort: { fields: published_at, order: DESC }) {
              nodes {
                slug
                title
                content
                published_at
                author {
                  name
                  avatar {
                    childImageSharp {
                      gatsbyImageData(
                        width: 50
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                      )
                    }
                  }
                }
                image {
                  childImageSharp {
                    gatsbyImageData(
                      width: 350
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }
        `
    )
    return posts.nodes
}

const BlogCard = () => {
    const posts  = useGetBlogPosts()
    return (
        <div className="blog-area ptb-50">
            <div className="container">
                <div className="row">
                    { 
                        posts.map(post => {
                            return (
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-blog-post bg-fffbf5">
                                        <div className="post-image">
                                            <Link to={post.slug}>
                                                <GatsbyImage image={getImage(post.image)} alt={post.title} />
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <ul className="post-meta d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">
                                                        <GatsbyImage image={getImage(post.author.avatar)} alt={post.author.name} />
                                                        <span>{post.author.name}</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className='flaticon-calendar'></i> 
                                                    <Moment format="MMM DD, YYYY">{post.published_at}</Moment>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link to={post.slug}>
                                                    {post.title}
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="col-lg-12 col-md-12">
                        {/* Pagination */}
                        <div className="pagination-area text-center">
                            <Link to="#" className="prev page-numbers">
                                <i className='bx bx-chevrons-left'></i>
                            </Link>
                            <span className="page-numbers current" aria-current="page">1</span>
                            <Link to="#" className="page-numbers">
                                2
                            </Link>
                            <Link to="#" className="page-numbers">
                                3
                            </Link>
                            <Link to="#" className="page-numbers">
                                4
                            </Link>
                            <Link to="#" className="next page-numbers">
                                <i className='bx bx-chevrons-right'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard