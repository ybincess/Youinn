import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink as RRNavLink
} from "react-router-dom";
import Footer from "../../components/Footer";
import { NavLink } from "reactstrap";
import "../course-style.css";
import CourseJavascript from "../../images/Course-Javascript.png";

const CourseJavascriptHTML = () => {
  return (
    <div>
      <div className="contentDivStyle">
        <h1 className="IndentSubMenu text-center">Javascript HTML CSS</h1>
        <div className="">
          <div>
            <img className="imgStyle" src={CourseJavascript}></img>
            <div className="divContent">
              <h3>
                <strong>Course Overview</strong>
              </h3>
              <p>HTML, CSS and JavaScript is the new standard for web development. 
                This very Combination provides an unprecedented level of interactivity for web 
                applications built for today’s connected devices. 
                Our HTML+CSS+JavaScript training course focuses on the practical aspects
                of client-side application development using these technologies. 
                With a mix of classroom learning & hands-on lab exercises, trainees 
                learn to develop create HTML5 pages, program HTML DOM with JavaScript, 
                create forms to collect and validate user inputs and much more.      
                </p>
            </div>
          </div>
          <div className="divContent">
            <h4>
              <strong>Advantage of Javascript HTML CSS</strong>
            </h4>
            <p>
              <strong>Following are the advantages Javascript HTML CSS:</strong>
            </p>
            <ul class="points"></ul>
          </div>
          <div className="divContent">
            <h4>
              <strong>What this course can do for you?</strong>
            </h4>
          </div>
          <div className="divContent">
            <h4>
              <strong>Who can do this course?</strong>
            </h4>
          </div>
          <div className="divContent">
            <h4>
              <strong>Learning Outcomes</strong>
            </h4>
            <ul>
                <li>Overview of HTML, CSS and JavaScript</li>
                <li>Creating and Styling HTML Pages</li>
                <li>Creating Forms to Collect Data and Validate User</li>
                <li>Communicating with a Remote Data Source</li>
                <li>Styling HTML by Using CSS</li>
                <li>Creating Objects and Methods by Using JavaScript</li>
                <li>Creating Interactive Pages using HTML5 APIs</li>
                <li>Adding Offline Support to Web Applications</li>
                <li>Implementing an Adaptive User Interface</li>
                <li>Creating Advanced Graphics</li>
                <li>Animating the User Interface</li>
                <li>Implementing Real-Time Communications by Using Web</li>
            </ul>
          </div>
        </div>
        <div className="divContent">
          <NavLink
            tag={RRNavLink}
            to="/SignIn"
            className="btn btn-outline-success text-center divBtnStyle"
          >
            JOIN NOW
          </NavLink>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default CourseJavascriptHTML;
