import React from 'react'
import {Link} from 'gatsby'
import logo from "assets/images/play14_transparent_gray_medium.png"
import footerMap from "assets/images/footer-map.png"
import SocialLinks from "../Socials/SocialLinks"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const contacts = useContact();

    return (
        <footer className="footer-area bg-color">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src={logo} alt="logo" />
                            </a>
                            <p>{contacts.shortDescription}</p>

                            <SocialLinks socialNetworks={contacts.socialNetworks} className="social-link" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            
                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                    <li>
                                    <Link to="/about-us">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/events">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/players">
                                        Players
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Resources</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/games">
                                        Games
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/blog">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/testimonials">
                                        Testimonials
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    {contacts.address.number} {contacts.address.street} <br /> {contacts.address.postalCode} {contacts.address.city} <br /> {contacts.address.country}
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href={"mailto:" + contacts.email}>{contacts.email}</a>
                                </li>
                                <li>
                                    <i className='bx bx-news'></i> 
                                    <a href={contacts.newsletter} target="_blank" rel="noreferrer">Newsletter</a>
                                </li>
                                <li>
                                    <i className='bx bxl-slack'></i>
                                    <a href={contacts.slack} target="_blank" rel="noreferrer">Slack</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>Copyright @{currentYear} <strong>#play14</strong> All rights reserved</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img src={footerMap} alt="footer-logo" />
            </div>
        </footer>
    );
}

export default Footer

const useContact = () => {
    const { contacts } = useStaticQuery(
      graphql`
        query {
          contacts : strapiContact {
            name
            email
            shortDescription
            socialNetworks {
              type
              url
            }
            address {
              number
              street
              postalCode
              city
              country
            }
            slack
            newsletter
          }
        }
      `
    )
  
    return contacts
}
