import React, {Component } from 'react';
import '../../CSS/Ss.css';
import '../../CSS/ss2.css';
import { BrowserRouter as Router, NavLink as RRNavLink } from 'react-router-dom';
import {NavLink} from 'reactstrap';


import Slide5 from "../../images/Slide5.jpg";
const slidewindow3 =(props) => {
    return(
      <div>
         <div className="text-center" style={{position: "absolute", top:"5%", width:"100%"}}>
          <br/> <br/>
          <h3 style={{color:"navy", fontWeight: "bold"}}> Interview Preparation Course</h3>
          <br/><br/>
         <center> 
          <p className="ss1">Coding Interviews </p>
          <p className="ss1">Aptitude Tests</p>
          <p className="ss1">Mock Tests</p>
          <p className="ss1">Personality Assessment</p>
          <p className="ss1">Presentation & Communication Skill</p>
          <p className="ss1">Mock Interviews</p>
         </center>
         <br/>
         <div className="">
                    <NavLink tag={RRNavLink} to="/Reg" className="btn btn-outline-success text-center divBtnStyle">JOIN NOW</NavLink>                        
                </div>

         </div>

         <img className="image-prop" src={Slide5} alt="Home Page"/>

      </div>
    )
}
export default slidewindow3;