import React from 'react';
import { Link } from 'gatsby'
import { useRecoilState } from 'recoil'
import { collapsedState } from 'utils/recoil-atoms'
import logo from "assets/images/play14_transparent_gray_x-small.png"
import NavItem from './NavItem'

const Navbar = () => {
    const [collapsed, setCollapsed] = useRecoilState(collapsedState)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar")
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky")
            } else {
                elementId.classList.remove("is-sticky")
            }
        });
        window.scrollTo(0, 0)
    })

    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right'

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area">
                <div className="tarn-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link 
                                to="/"
                                onClick={() => setCollapsed(true)} 
                                className="navbar-brand"
                            >
                                <img src={logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    {/* Home */}
                                    <NavItem name="Home" to="/" setCollapsed={setCollapsed} />

                                    {/* About Us */}
                                    <NavItem name="About Us" to="#">
                                            <NavItem name="About" to="/about-us" setCollapsed={setCollapsed} />
                                            <NavItem name="History" to="/history" setCollapsed={setCollapsed} />
                                            <NavItem name="Unconference" to="/unconference" setCollapsed={setCollapsed} />
                                            <NavItem name="Gallery" to="/gallery" setCollapsed={setCollapsed} />
                                            <NavItem name="Privacy Policy" to="/privacy-policy" setCollapsed={setCollapsed} />
                                    </NavItem>

                                    {/* Events */}
                                    <NavItem name="Events" to="/events" setCollapsed={setCollapsed} />

                                    {/* Games */}
                                    <NavItem name="Games" to="/games" setCollapsed={setCollapsed} />

                                    {/* Players */}
                                    <NavItem name="Players" to="/players" setCollapsed={setCollapsed} />

                                    {/* Blog */}
                                    <NavItem name="Blog" to="/blog" setCollapsed={setCollapsed} />

                                    {/* Contact */}

                                    {/* Pages */}
                                    <NavItem name="Pages">
                                        <NavItem name="Home">
                                            <NavItem name="IT Services" to="/" setCollapsed={setCollapsed} />
                                            <NavItem name="SEO Agency" to="/others/seo-agency" setCollapsed={setCollapsed} />
                                            <NavItem name="Data Science ML Company" to="/others/data-science-ml-company" setCollapsed={setCollapsed} />
                                            <NavItem name="Data Analytics & AI Startup" to="/others/data-analytics-ai-startup" setCollapsed={setCollapsed} />
                                            <NavItem name="Digital Marketing Agency" to="/others/digital-marketing-agency" setCollapsed={setCollapsed} />
                                            <NavItem name="Data Science Online Courses" to="/others/data-science-online-courses" setCollapsed={setCollapsed} />
                                            <NavItem name="Big Data Analysis Startup" to="/others/big-data-analysis-startup" setCollapsed={setCollapsed} />
                                            <NavItem name="Data Analytics ML Consulting" to="/others/data-analytics-ml-consulting" setCollapsed={setCollapsed} />
                                            <NavItem name="Machine Learning AI Solutions" to="/others/machine-learning-ai-solutions" setCollapsed={setCollapsed} />
                                        </NavItem>

                                        <NavItem name="Services">
                                            <NavItem name="Services" to="/others/services" setCollapsed={setCollapsed} />
                                            <NavItem name="Service Details" to="/others/service-details" setCollapsed={setCollapsed} />
                                        </NavItem>
                                        
                                        <NavItem name="Case Studies">
                                            <NavItem name="Case Studies" to="/others/case-studies" setCollapsed={setCollapsed} />
                                            <NavItem name="Case Study Details" to="/others/case-studies-details" setCollapsed={setCollapsed} />
                                        </NavItem>

                                        <NavItem name="Courses">
                                            <NavItem name="Courses" to="/others/courses" setCollapsed={setCollapsed} />
                                            <NavItem name="Course Details" to="/others/course-details" setCollapsed={setCollapsed} />
                                        </NavItem>

                                        <NavItem name="Contact" to="/others/contact" setCollapsed={setCollapsed} />
                                        <NavItem name="Coming soon" to="/others/coming-soon" setCollapsed={setCollapsed} />
                                        <NavItem name="Membership Levels" to="/others/membership-levels" setCollapsed={setCollapsed} />
                                        <NavItem name="Login/Register" to="/others/profile-authentication" setCollapsed={setCollapsed} />
                                        <NavItem name="Terms of Service" to="/others/terms-of-service" setCollapsed={setCollapsed} />
                                        <NavItem name="Testimonials" to="/others/testimonials" setCollapsed={setCollapsed} />
                                        <NavItem name="Team" to="/others/team" setCollapsed={setCollapsed} />
                                        
                                    </NavItem>

                                </ul>
                            
                                <div className="others-option d-flex align-items-center">
                                    <div className="option-item">
                                        <form className="search-box">
                                            <input type="text" className="input-search" placeholder="Search for anything" />
                                            <button type="submit">
                                                <i className="flaticon-loupe"></i>
                                            </button>
                                        </form>
                                    </div>

                                    <div className="option-item">
                                        <Link 
                                            to="/contact" 
                                            activeClassName="active"
                                            onClick={() => setCollapsed(true)}
                                            className="default-btn"
                                        >
                                            <i className="flaticon-right"></i> Get Started <span></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navbar
