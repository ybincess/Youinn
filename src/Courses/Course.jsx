import React from 'react';
import {Link} from 'react-router';
import { BrowserRouter as Router, NavLink as RRNavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import CourseAngularJs from './WebUICourse/CourseAngularJs';
import {NavLink} from 'reactstrap';

import './card-style.css';

const Course = props => {
    return (                              
            <div className="card text-center shadow">                
                <div className="overflow">
                    <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title}</h4>
                    <NavLink tag={RRNavLink} to={props.component} className="btn btn-outline-success">More Info</NavLink>                    
                </div>                
            </div> 
    )
}
export default Course;