import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink as RRNavLink } from 'react-router-dom';
import Footer from '../../components/Footer';

import {NavLink} from 'reactstrap';
import '../course-style.css'; 
import CourseReact from '../../images/Course-React-JS.png';

const CourseReactJs = () => {
    return (
            <div style={{backgroundColor:"lightblue"}}>
                <div className="contentDivStyle">
                    <h1 className="IndentSubMenu text-center">React JS</h1>   
                    <div className="">
                        <div>
                            <img className="imgStyle" src={CourseReact}></img>
                         <div className="divContent">
                            <h3><strong>Course Overview</strong></h3>
                            <p>React (also known as React.js or ReactJS) is a JavaScript library[3] for building user interfaces. 
                                It is maintained by Facebook and a community of individual developers and companies.
                             </p>   
                            <p>
                            React can be used as a base in the development of single-page or mobile applications, 
                            as it is optimal for fetching rapidly changing data that needs to be recorded. However, 
                            fetching data is only the beginning of what happens on a web page, which is why complex 
                            React applications usually require the use of additional libraries for state management, 
                            routing, and interaction with an API; Redux, React Router and axios are respective examples of such libraries.
                            </p>
                            <p>
                            React code is made of entities called components. Components can be rendered to a particular element in the DOM using the React DOM library. 
                            When rendering a component, one can pass in values that are known as "props".
                            </p>

                            </div>
                           </div>
                           <div className="divContent">
                            <h4><strong>Advantage of ReactJs</strong></h4>
                            <p><strong>Following are the advantages of ReactJS:</strong></p>
                            <ul class="points">
                                <li>One of the most demanding skills</li>
                                <li>Easy to Learn and Scale</li>
                                <li>Comonents can be reused</li>
                                <li>Supported by Facebook and Instagram</li>

                            </ul>
                        </div>
                        <div className="divContent">
                            <h4><strong>What this course can do for you?</strong></h4>
                            <p>Enable you to assimilate and master latest framework like frameworks like Express js, Node.js, and Mongo DB. and leapfrog your career</p>
                        <p>Build Responsive Web application</p>
                        <p>Understand Component based Framework which is easy to Learn and Scale </p>
                        <p>Learn Redux and React Native</p>
                        </div>
                        <div className="divContent">
                            <h4><strong>Who can do this course?</strong></h4>
                            <ul>
                            <li>This course is intended for participant who is a Graduate/ Under Graduate / Working Professional aspiring to do career as a full stack application developer with basic knowledge of HTML &amp; CSS</li>
                            <li>Undergraduate or Graduate students from computer background-BE(IT), BE (Comp), BCA, BSc (Comp), BSc (IT), BCS with basic knowledge of HTML &amp; CSS</li><li>Post graduate students – MCA, MCM, MSc (IT), MSc (Comp. Sci.) with basic knowledge of HTML &amp; CSS</li>
                            <li>Experienced professional with experience in server-side framework</li></ul>
  
                        </div>
                        <div className="divContent">
                            <h4><strong>Course Content:</strong></h4>
                            <ul>
                                <li>Introduction to React</li>
                                <li>React Components</li>     
                                <li>React State and Props</li>
                                <li>React Event Handling</li>
                                <li>Routing in React</li>
                                <li>React Flux</li>
                                <li>Styling React</li>
                                <li>Asynchronous API</li>
                                <li>Context API</li>
                                <li>Subscribing to State</li>
                                <li>Performance Optimization</li>
                            </ul>
                        </div>
                    </div>            
                    <div className="divContent">
                        <NavLink tag={RRNavLink} to="/Register" className="btn btn-outline-success text-center divBtnStyle">JOIN NOW</NavLink>   
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div> 
    )
}
export default CourseReactJs;