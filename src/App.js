import React from 'react';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar';
import './App.css';
import './index.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Enterprise from './components/Enterprise';
import Certification from './components/Certification';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './components/Login';
import AngularComp from './Courses/WebUICourse/CourseAngularJs';
import CourseReactJs from './Courses/WebUICourse/CourseReactJs';
import CourseJavascript from './Courses/WebUICourse/CourseJavascript';
import CourseJavaFullStack from './Courses/JobOrientedCourse/CourseJavaFullStack';
import CoursePHPFullStack from './Courses/JobOrientedCourse/CoursePHPFullStack';
import CourseDotNetFullStack from './Courses/JobOrientedCourse/CourseDotNetFullStack';
import CoursePython from './Courses/AdvancedCourse/CoursePython';

// import ControlledCarousel from './components/SlideShowWithText';
import Slider from './components/slideshow/Slider';
// import DevJobOrientedCourse from './Courses/DevJobOrientedCourse';
// import WebUICourseList from './Courses/WebUICourseList';
// import DevAdvancedCourses from './Courses/DevAdvanceCourses';
class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/dashboard" component={Slider} />
            {/* <Route path="/" exact strict component={WebUICourseList} />
            <Route path="/" exact strict component={DevJobOrientedCourse} />
            <Route path="/" exact strict component={DevAdvancedCourses} /> */}
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard"></Redirect>} />
          {/* <Route path="/dashboard" exact component={Slider}/> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/AboutUs" component={AboutUs}/>
          <Route exact path="/Enterprise" component={Enterprise}/>
          <Route exact path="/Certification" component={Certification}/>         
          <Route exact path="/AngularComp" component={AngularComp}/>
          <Route exact path="/ReactComp" component={CourseReactJs}/>
          <Route exact path="/JScomp" component={CourseJavascript}/>
          <Route exact path="/JavaFScomp" component={CourseJavaFullStack}/>
          <Route exact path="/DotNetFSComp" component={CourseDotNetFullStack}/>
          <Route exact path="/PHPFScomp" component={CoursePHPFullStack}/>
           <Route exact path="/AIMLComp" component={CoursePython}/> */}
          <Route exact path="/PythonComp" component={CoursePython}/>
        </Switch>
        <Footer />
      </Router>


    );
  }
}
export default App;