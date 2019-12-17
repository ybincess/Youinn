import React, { Component } from 'react';
import Footer from './Footer';
import '../CSS/Home.css';

const AboutUs = () => {
    return (
        <div className="" style={{backgroundColor: "lightblue"}}>
            <div className="contentDivStyle">
                <h1 className="text-center">About Us</h1>
                <div className="abouttext">
                    <p className="para">
                        We are highly focused and committed group of people who are passionate
                        about creating the jobs directly and indirectly. We firmly believe that
                        given the right training and education will bring more employability and
                        equality in the society and the Nation.Everyone is employable and
                        deserves the respect in the society.
                        <br />
                        <br />
                        We are here to provide face to face training, mentoring and make you
                        learn from basics to become a professional. Unlike other online portals
                        we ensure things work, what you have learnt in your machine not the
                        trainer's.
                        <br />
                        <br />
                        Our motto is learn something which works and can help you in not just
                        getting a job but make you ready to perform on job.
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default AboutUs;