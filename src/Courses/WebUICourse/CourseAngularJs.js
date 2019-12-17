import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink as RRNavLink } from 'react-router-dom';
import Footer from '../../components/Footer';
import {NavLink} from 'reactstrap';
import '../course-style.css'; 
import CourseAngular from '../../images/Course-Angular-JS.png';

const CourseAngularJs = () => {
    return (
        <div>
            <div className="contentDivStyle">
                <h1 className="IndentSubMenu text-center">Angular JS</h1>   
                <div className="divStyleRight">
                    <NavLink tag={RRNavLink} to="/Courses/WebUICourseList" ><u>Back</u></NavLink>
                </div>
                <div className="divContent">
                    <div>
                        <h3><strong>Course Overview</strong></h3>
                        <img className="imgStyle" src={CourseAngular}></img>
                        <h4><strong>Angular JS</strong></h4>
                        <p>AngularJS is an open source Model-View-Controller framework which is similar to the JavaScript framework. AngularJS is entirely based on HTML and JavaScript, so there is no need to learn another syntax or language.</p>
                        <p>AngularJS changes static HTML to dynamic HTML. It extends the ability of HTML by adding built-in new attributes and components and also provides an ability to create custom attributes using simple JavaScript.</p>
                        <p>AngularJS is perfect for Single Page Applications (SPAs).</p>
                        <p>React JS and Redux are other two frameworks which are gaining popularity.</p>
                    </div>
                    <div>
                        <h4><strong>Advantage of AngularJS</strong></h4>
                        <p><strong>Following are the advantages of AngularJS over other JavaScript frameworks:</strong></p>
                        <ul class="points">
                            <li> <strong>Dependency Injection:</strong> Dependency Injection specifies a design pattern in which components are given             their dependencies instead of hard coding them within the component.</li>
                            <li><strong>Two way data binding:</strong> AngularJS creates a two way data-binding between the select element and the                      orderProp model. orderProp is then used as the input for the orderBy filter.</li>
                            <li><strong>Testing:</strong> Angular JS is designed in a way that we can test right from the start. So, it is very easy to             test any of its components through unit testing and end-to-end testing.</li> 
                            <li><strong>Model View Controller:</strong> In Angular JS, it is very easy to develop application in a clean MVC way. You just             have to split your application code into MVC components i.e. Model, View and the Controller.</li> 
                            <li>Directives, filters, modules, routes etc. </li>
                        </ul>
                    </div>
                    <div>
                        <h4><strong>What this course can do for you?</strong></h4>
                        <p>Enable you to assimilate and master latest framework like frameworks like js, Node.js, and Mongo DB. and leapfrog your career</p>
                        <p>Build Responsive Web application using Angular Typescript</p>
                        <p>Understand Single line Page Application Vs Conventional Web Apps</p>
                        <p>Learn Angular 5 Binding and events with templates</p>
                    </div>
                    <div>
                        <h4><strong>Who can do this course?</strong></h4>
                        <ul>
                            <li>This course is intended for participant who is a Graduate/ Under Graduate / Working Professional aspiring to do career as a full stack application developer with basic knowledge of HTML &amp; CSS</li>
                            <li>Undergraduate or Graduate students from computer background-BE(IT), BE (Comp), BCA, BSc (Comp), BSc (IT), BCS with basic knowledge of HTML &amp; CSS</li><li>Post graduate students – MCA, MCM, MSc (IT), MSc (Comp. Sci.) with basic knowledge of HTML &amp; CSS</li>
                            <li>Experienced professional with experience in server-side framework</li></ul>
                        <h4><strong>Learning Outcomes</strong></h4>
                        <ul>
                            <li>Introduction to Angular</li>
                            <li>Simple Angular Application</li>
                            <li>Angular 5 Build Automation</li>
                            <li>Angular Component Based Approach</li>
                            <li>Typescript Essentials</li>
                            <li>Component Life Cycle</li>
                            <li>Angular Directives</li>
                            <li>Angular Pipes</li>
                            <li>Extending Angular Framework</li>
                            <li>Angular Graphics Rendering</li>
                            <li>Angular Forms (FormModule)</li>
                            <li>Angular Service</li>
                            <li>HTTP Module</li>
                            <li>Rxjs Observables</li>
                            <li>Angular Routing Module (SPA)</li>
                            <li>Angular Testing</li>
                            <li>Current Trends on Progressive App Development</li>
                        </ul>
                    </div>
                </div>            
                <div className="divStyleRight">
                    <NavLink tag={RRNavLink} to="/Courses/WebUICourseList" >Back</NavLink>
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
export default CourseAngularJs;