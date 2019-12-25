import React, {Component } from 'react';
import '../../CSS/Ss.css';
import '../../CSS/ss2.css';
import { BrowserRouter as Router, NavLink as RRNavLink } from 'react-router-dom';
import {NavLink} from 'reactstrap';

import Slide5 from "../../images/Slide5.jpg";

import Particles from 'react-particles-js';
import {Canvas} from 'react-canvas-js';
const slidewindow3 =(props) => {
    return(
      <div>
         <div className="text-center" style={{position: "absolute", top:"5%", width:"100%"}}>
          <br/>
          <h3 style={{color:"navy"}}> Courses Designed for College Students</h3>
          <br/><br/>
         <center> 
          <p className="ss1">C/C++ Crash Course </p>
          <p className="ss1">Data Structures Crash Course</p>
          <p className="ss1">Java Crash Course</p>
          <p className="ss1">C# Crash Course</p>
          <p className="ss1">Python Crash Course</p>
          <p className="ss1">Semester Exams Preparation</p>
          <p className="ss1">Summer Vacation Courses</p>
          <p className="ss1">Job Fourndation Courses</p>
         </center>
         <br/>
         <div className="">
                    <NavLink tag={RRNavLink} to="/Register" className="btn btn-outline-success text-center divBtnStyle">JOIN NOW</NavLink>                        
                </div>

         </div>

         <img className="image-prop" src={Slide5} alt="Home Page"/>

      </div>
    )
}
export default slidewindow3;