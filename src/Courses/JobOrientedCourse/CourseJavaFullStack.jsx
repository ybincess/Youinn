import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink as RRNavLink
} from "react-router-dom";
import Footer from "../../components/Footer";
import { NavLink } from "reactstrap";
import "../course-style.css";
import JavaFullStack from "../../images/Course-JavaFullStack.png";

const CourseJavaFullStack = () => {
  return (
 <div>
    <div className="contentDivStyle">
        <h1 className="IndentSubMenu text-center">Full Stack - Java</h1>
        <div className="">
          <div>
            <img className="imgStyle" src={JavaFullStack}></img>
            <div className="divContent">
              <h3><strong>Course Overview</strong></h3>
              <p>
                Over the years, web application development was partitioned into
                silos like front-end developer, server-side developer etc.
                Front-end developer focusing on User interface elements and
                related programming whereas server-side guys focusing more on
                writing code which would run on the web and application servers.
                Now the situation is changing with new disruptive technologies
                taking the world into their stride
              </p>
              <p>
                The explosion of startups and micro-businesses caused a wide set
                of skills to be needed as a benchmark. In those, full stack web
                development is one. If we analyze the trend, Even though the
                need for Data Scientists & Analysts, Big Data experts, AI is
                raising over past three years, it is not reaching the same
                demand level as a full stack developer or a full stack engineer.
              </p>
              <p>
                The Full Stack Developer is the new Buzz in the Industry. For
                any niche things, the one who comes and conquer first will have
                the edge.
              </p>
            </div>
          </div>
          <div className="divContent">
            <h4>
              <strong>Advantage of Java</strong>
            </h4>
            <p>
              <strong>Following are the advantages of Java:</strong>
            </p>
            <ul class="points">
              <li>
                As easily seen from the above observations, a full-stack
                developer in Java needs to know much more than a specific
                programming language or a framework. Essentially the Java
                developer should be able to create a prototype which is a
                minimum viable product(MVP) which is deployable.
              </li>
              <li>
                Hence it is important for the full stack developer in Java to
                know many things starting from the Front end to backend technology.
              </li>
              <li>
                If one masters at least HTML5, CSS 3, Bootstrap, Angular JS, SQL
                & Java , he would become the ‘most sought-after’ full stack
                developer.
              </li>
            </ul>
          </div>
          <div className="divContent">
            <h4>
              <strong>What this course can do for you?</strong>
            </h4>
            <p>
              Enable you to assimilate and master latest framework like
              Springboot, Hibernate, and Spring MVC and leapfrog your career
            </p>
          </div>
          <div className="divContent">
            <h4>
              <strong>Who can do this course?</strong>
            </h4>
            <ul>
              <li>
                This course is intended for participant who is a Graduate/ Under
                Graduate / Working Professional aspiring to become a Full Stack 
                Developer
              </li>
              <li>
                Undergraduate/Graduate students from computer
                background-BE(IT), BE (Comp), BCA, BSc (Comp), BSc (IT), BCS.
              </li>
              <li>
                Post graduate students – MCA, MCM, MSc (IT), MSc (Comp. Sci.)
                with basic knowledge of HTML &amp; CSS
              </li>
              <li>
                Experienced professionals
              </li>
            </ul>
          </div>
          <div className="divContent">
            <h4>
              <strong>Learning Outcomes</strong>
            </h4>
            <ul>
              <li>Introduction to Java and Spring Framework</li>
              <li>Web Basics: HTML + CSS + JavaScript</li>
              <li>Server side Programming - Spring Framework </li>
              <li>Database - MySQL </li>
              <li>Backend Integration - Web Services, RESTFul Services </li>
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
  )
}
export default CourseJavaFullStack;
