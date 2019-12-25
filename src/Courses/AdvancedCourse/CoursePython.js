import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink as RRNavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import {NavLink} from 'reactstrap';
import '../course-style.css'; 

const CoursePython = () => {
    return (
        <div>
            <div className="contentDivStyle">
                <h1 className="IndentSubMenu text-center">Advanced Courses</h1>
                <div className="divContent">
                    <p className="para">
                    <center>
                        <br/>
                        Kindly get in touch with us for details on Advance Courses
                        <br />
                        <br />
                        ..... Work In Progress.....
                        <br/>
                         We are working on Advanced Courses Content
                        </center>
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default CoursePython;
