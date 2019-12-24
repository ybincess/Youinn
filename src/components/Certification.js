
import React, { Component } from 'react';
import Footer from './Footer';
import '../CSS/Home.css';

const AboutUs = () => {
    return (
        <div>
            <div className="contentDivStyle">
                <h1 className="IndentSubMenu text-center">Certifications List</h1>
                <div className="divContent">
                        <ul>
                            <li>Angular</li>
                            <li>React</li>
                            <li>Javascript</li>
                            <li>Java - SCJP Modules</li>
                            <li>Microsoft Certified .Net Developer</li>
                            <li>PHP</li>
                            <li>ISTQB</li>
                            <li>Certifications on Testing</li>
                            <li>Full Stack Java Developer</li>
                            <li>Full Stack .Net Developer</li>
                            <li>Full Stack PHP Developer</li>
                            <li>Database Developer</li>
                            <li>SDET</li>
                        </ul>
                        <p> Please contact us if you don't find what you are looking for as we are updating the list </p>
                    </div>
                </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default AboutUs;
