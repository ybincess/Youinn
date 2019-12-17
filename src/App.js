import React from 'react';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Navbar from './components/navbar';
import './App.css';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './components/Login';
import AngularComp from './Courses/WebUICourse/CourseAngularJs';
import CourseReactJs from './Courses/WebUICourse/CourseReactJs';
import CourseJavascript from './Courses/WebUICourse/CourseJavascript';
import CourseJavaFullStack from './Courses/JobOrientedCourse/CourseJavaFullStack';
import CoursePHPFullStack from './Courses/JobOrientedCourse/CoursePHPFullStack';
import CourseDotNetFullStack from './Courses/JobOrientedCourse/CourseDotNetFullStack';
import ControlledCarousel from './components/SlideShowWithText';
import Slider from './components/slideshow/Slider';
import DevJobOrientedCourse from './Courses/DevJobOrientedCourse';
import WebUICourseList from './Courses/WebUICourseList';
class App extends React.Component {

  render() {
    return (
      <Router>
        <Navbar />
        <Slider />
        {/* <DevJobOrientedCourse/>
        <WebUICourseList/> */}
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard"></Redirect>} />
          {/* <Route path="/dashboard" exact component={Slider}/> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/AboutUs" component={AboutUs}/>
          <Route exact path="/AngularComp" component={AngularComp}/>
          <Route exact path="/CourseReactJs" component={CourseReactJs}/>
          <Route exact path="/CourseJavascript" component={CourseJavascript}/>
          <Route exact path="/CourseJavaFullStack" component={CourseJavaFullStack}/>
          <Route exact path="/CourseDotNetFullStack" component={CourseDotNetFullStack}/>
          <Route exact path="/CoursePHPFullStack" component={CoursePHPFullStack}/>
          {/* <Route exact path="/CourseR" component={CourseR}/>
          <Route exact path="/CoursePython" component={CoursePython}/> */}
        </Switch>
        <Footer />
      </Router>


    );
  }
}
export default App;