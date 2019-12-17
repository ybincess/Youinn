import React, {Component} from 'react';
import WebUICourse from './Course';
import Footer from '../components/Footer';

import AngualrImg from '../images/AngularJs.png';
import ReactImg from '../images/ReactJs.png';
import Javascript from '../images/Javascript.png';

class WebUICourseList extends Component{  
    render(){
        return(
            <div>
                <div className="contentDiv2Style">
                    <h1 className="IndentSubMenu text-center">Web UI Courses</h1>   
                    <div className="container-fluid d-flex justify-content-center">
                        <div className="row">
                            <div className="col-md-4 cardDivStyle">
                                <WebUICourse imgsrc={AngualrImg} title="Angular" component="/Course/WebUICourse/CourseAngularJs"/>
                            </div>
                            <div className="col-md-4 cardDivStyle">
                                <WebUICourse imgsrc={ReactImg} title="React" component="/Course/WebUICourse/CourseReactJs"/>
                            </div>
                            <div className="col-md-4 cardDivStyle">
                                <WebUICourse imgsrc={Javascript} title="Javascript HTML CSS" component="/Course/WebUICourse/CourseJavascript"/>
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

export default WebUICourseList;