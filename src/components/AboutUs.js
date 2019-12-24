import React, { Component } from 'react';
import Footer from './Footer';
import '../CSS/Home.css';

const AboutUs = () => {
    return (
        <div>
            <div className="contentDivStyle">
                <h1 className="IndentSubMenu text-center">About Us</h1>
                <div className="divContent">
                    <p className="para">
                        We are highly focussed and committed group of people who are passionate
                        about creating the jobs directly and indirectly. We firmly believe that
                        given the right training and education will bring more employability and
                        equality in the society and to the Nation. Everyone is employable and
                        deserves the respect in the society.
                        <br />
                        <br />
                        We are here to provide face to face training, mentoring and learning from basics 
                        to making of a true professional. Unlike other online portals, we ensure things, what 
                        you have learnt work in your machine not the Trainer's.
                        <br />
                        <br /> 
                        Our motto is "Learning Not only to get a job but Make you ready to perform on the job"
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
