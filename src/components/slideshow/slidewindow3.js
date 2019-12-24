import React from 'react';
import '../../CSS/Ss.css';
import '../../CSS/ss2.css';
import Particles from 'react-particles-js';
import {Canvas} from 'react-canvas-js';
// const sample3 = {
//     "maxParticles": 0,
//     "shapes": [
//       {
//         "type": "image",
//         "src": "R.png"
//       },
//       {
//         "type": "image",
//         "src": "Python.png"
//       }
//     ],
//     "size": 200,
//     "minSpeed": .1,
//     "maxSpeed": .1,
//     "alpha": .9,
//     "backgroundColor": "white"
//   };
const slidewindow3 =(props) => {
    return(
      <div style={{backgroundColor: "navy"}}>
          <br/>
          <h3 style={{color:"white"}}> Courses Designed for College Students</h3>
          <br/><br/>
         <center> 
          <p className="ss1">C/C++ Crash Course </p>
          <p className="ss1">Data Structures Crash Course</p>
          <p className="ss1">Semester Exams Preparation</p>
          <p className="ss1">Summer Vacation Courses</p>
          <p className="ss1">Job Fourndation Courses</p>
         </center>
      </div>
    )
}
export default slidewindow3;