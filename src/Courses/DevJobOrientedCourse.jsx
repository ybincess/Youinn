import React, {Component} from 'react';
import Course from './Course';
import Footer from '../components/Footer';

import FullStackJava from '../images/Full-Stack-Java-Training.png';
import FullStackNet from '../images/Full-Stack-Net-Training.png';
import FullStackPHP from '../images/Full-Stack-PHP-Training.png';

class DevJobOrientedCourse extends Component{  
    render(){
        return(
            <div>
                <div className="contentDivStyle" background-color="grey">
                    <h1 className="IndentSubMenu text-center">Job Oriented Courses</h1>   
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4 cardDivStyle">
                                <Course imgsrc={FullStackJava} title="Full Stack - Java" component="/Course/JobOrientedCourse/CourseJavaFullStack"/>
                            </div>
                            <div className="col-md-4 cardDivStyle">
                                <Course imgsrc={FullStackNet} title="Full Stack - .Net" component="/Course/JobOrientedCourse/CourseDotNetFullStack"/>
                            </div>         
                            <div className="col-md-4 cardDivStyle">
                                <Course imgsrc={FullStackPHP} title="Full Stack - PHP" component="/Course/JobOrientedCourse/CoursePHPFullStack"/>
                            </div>                                      
                        </div>
                    </div>      
                </div>    
                <div>
                    <Footer />
                </div>  
            </div>
        );
    }
}

export default DevJobOrientedCourse;