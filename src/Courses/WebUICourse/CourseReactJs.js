import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink as RRNavLink } from 'react-router-dom';
import Footer from '../../components/Footer';

import {NavLink} from 'reactstrap';

import '../course-style.css'; 
import CourseReact from '../../images/Course-React-JS.png';

const CourseReactJs = () => {
    return (
            <div>
                <div className="contentDivStyle">
                    <h1 className="IndentSubMenu text-center">React JS</h1>   
                    <div className="divStyleRight">
                        <NavLink tag={RRNavLink} to="/Courses/WebUICourseList" ><u>Back</u></NavLink>
                    </div>
                    <div className="divContent">
                        <div>
                            <h3><strong>Course Overview</strong></h3>
                            <img className="imgStyle" src={CourseReact}></img>
                            <h4><strong>React JS</strong></h4>
                        </div>
                        <div>
                            <h4><strong>Advantage of ReactJs</strong></h4>
                            <p><strong>Following are the advantages of ReactJS:</strong></p>
                            <ul class="points">
                                
                            </ul>
                        </div>
                        <div>
                            <h4><strong>What this course can do for you?</strong></h4>
                        </div>
                        <div>
                            <h4><strong>Who can do this course?</strong></h4>
                        </div>
                        <div>
                            <h4><strong>Learning Outcomes</strong></h4>
                            <ul>
                                <li>Introduction to React</li>
                                <li>Simple React Application</li>                        
                            </ul>
                        </div>
                    </div>            
                    <div className="divStyleRight">
                        <NavLink tag={RRNavLink} to="/Courses/WebUICourseList" ><u>Back</u></NavLink>
                    </div>
                    <div className="divContent">
                        <NavLink tag={RRNavLink} to="/SignIn" className="btn btn-outline-success text-center divBtnStyle">JOIN NOW</NavLink>   
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div> 
    )
}
export default CourseReactJs;