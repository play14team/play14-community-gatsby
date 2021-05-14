import React from 'react'
import Layout from 'components/App/Layout'
import Navbar from 'components/App/Navbar'
import PageBanner from 'components/Common/PageBanner'
import Footer from 'components/App/Footer'
import CourseDetailsContent from 'components/Others/CoursesDetails/CourseDetailsContent'
import RelatedCourses from 'components/Others/CoursesDetails/RelatedCourses'

const Details = () => {
    return (
        <Layout>
            <Navbar />
            <PageBanner
                pageTitle='Course Details' 
                homePageText='Home' 
                homePageUrl='/' 
                activePageText='Course Details' 
            />
            <CourseDetailsContent />
            <RelatedCourses />
            <Footer />
        </Layout>
    );
}

export default Details