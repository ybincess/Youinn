import React, {Component} from 'react';
import Home from '../Components/Home';
import Course from './Course';
import Footer from '../Components/footer';

import Android from '../images/Android-Training.png';
import BigData from '../images/BigData-Training.png';
import Python from '../images/Python-Training.png';

class DevAdvanceCourses extends Component{  
    render(){
        return(
            <div>
                <div className="contentDivStyle">
                    <h1 className="IndentSubMenu text-center">Advanced Courses</h1>   
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4 cardDivStyle">
                                <Course imgsrc={Android} title="Android" component="/Course/AdvancedCourse/CourseAndroidDevelopment"/>
                            </div>
                            <div className="col-md-4 cardDivStyle">
                                <Course imgsrc={BigData} title="Big Data" component="/Course/AdvancedCourse/CourseBigData"/>
                            </div>         
                            <div className="col-md-4 cardDivStyle">
                                <Course imgsrc={Python} title="Python" component="/Course/AdvancedCourse/CoursePython"/>
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

export default DevAdvanceCourses;