import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink as RRNavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import {NavLink} from 'reactstrap';

import '../course-style.css'; 
import DotNetFullStack from '../../images/Course-DotNetFullStack.png';

const CourseDotNetFullStack = () => {
    return (
        <div>
            <div className="contentDivStyle">
                <h1 className="IndentSubMenu text-center">Full Stack - .Net</h1>   
                <div className="divContent">
                    <div>
                        <img className="imgStyle" src={DotNetFullStack}></img>
                        <div className="divContent">
                        <h3><strong>Course Overview</strong></h3>
                        <p>Over the years, web application development was partitioned into silos like front-end developer,
                                server-side developer etc. Front-end developer focusing on User interface elements and related programming
                                whereas server-side guys focusing more on writing code which would run on the web and application servers.
                                Now the situation is changing with new disruptive technologies taking the world into their stride
                        </p>
                        <p>The explosion of startups and micro-businesses caused a wide set of skills to be needed as a benchmark.
                            In those, full stack web development is one. If we analyze the trend, Even though the need for Data Scientists & Analysts,
                            Big Data experts, AI is raising over past three years, it is not reaching the same demand level as a full stack developer
                           or a full stack engineer.
                       </p>
                        <p> The Full Stack Developer is the new Buzz in the Industry. For any niche things, the one who comes and conquer
                             first will have the edge.
                        </p>

                    </div>
                    </div>
                    <div className="divContent">

                        <h4><strong>Advantage of .Net</strong></h4>
                        <p><strong>Following are the advantages of .Net:</strong></p>
                        <ul class="points">
                        <li>As easily seen from the above observations, a full-stack developer in .Net needs to know much more than a specific programming language or a framework. Essentially the .Net developer should be able to create a prototype which is a minimum viable product(MVP) which is deployable.</li>
                         <li> Hence it is important for the full stack developer in .Net to know many things starting from the HTML to backend databases.

                            </li>
                        <li>If one masters at least HTML5, CSS 3, Bootstrap, Angular JS, SQL & .Net , he would become the ‘most sought-after’ full stack developer.

                             </li>
                        </ul>
                    </div>
                    <div className="divContent">

                        <h4><strong>What this course can do for you?</strong></h4>
                        <p>Enable you to assimilate and master latest .Net framework and
                          leapfrog your career
                        </p>
                        <p>After .Net its one of the most sought after stack and Fully 
                            suported by Microsoft. This course will make your career long lasting</p>

                    </div>
                    <div className="divContent">
                        <h4><strong>Who can do this course?</strong></h4>
                        <ul>
                        <li>This course is intended for participant who is a Graduate/ Under Graduate / Working Professional aspiring to do career as a full stack application developer with basic knowledge of HTML &amp; CSS</li>
                         <li>Undergraduate or Graduate students from computer background-BE(IT), BE (Comp), BCA, BSc (Comp), BSc (IT), BCS with basic knowledge of HTML &amp; CSS</li><li>Post graduate students – MCA, MCM, MSc (IT), MSc (Comp. Sci.) with basic knowledge of HTML &amp; CSS</li>
                         <li>Experienced professional with experience in server-side framework</li>
                         </ul>
                    </div>
                    <div className="divContent">
                        <h4><strong>Course Content:</strong></h4>
                        <ul>
                          <li>Introduction to .Net Framework</li>
                          <li>Web Basics: HTML + CSS + JavaScript</li>
                          <li>Server side Programming - .NET </li>
                          <li>Database - MySQL or SQL </li>
                          <li>Backend Integration - Web API </li>
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
export default CourseDotNetFullStack;