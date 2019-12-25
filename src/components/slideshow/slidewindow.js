import React from 'react';
import Particles from 'react-particles-js';
const obj={
    particles:{
        number:{
            value:80
            ,
            density:{
                enable: true,
                value_area: 800
            }
        },
        move:{
            speed: 6,
            out_mode: "out"
        },
        color: {
            value: "#ffffff"
        },
        line_linked: {
            color: "#ffffff",
            width: 1.5
        }
    },
    interactivity: {
        events:{
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick:{
                enable: true,
                mode:"push"
            }
        }
    },
     modes: {
        push:{
            particles_nb:4
        }
    }
}
const slidewindow =(props) => {
    return(
        <div>
        <div className="text-center" style={{position: "absolute", top:"10%", width:"100%"}}>
        <h1 className="text-light"
            style={{ fontSize: "18px", fontWeight:"none"}}>
            <br/>
            <br/>
            Don't get trapped in Online Courses and Video based Learnings
            <br/>
            Learn from Experts, We are here to get you a Job
            <br/> <br/> <br/>
        </h1>
        <center className="text-light"
            style={{ fontSize: "15px", fontWeight:"none"}}> 
          <h4>             We Offer: </h4>
          <p className="ss1">Courses on Latest Software Development and Testing Frameworks</p>
          <p className="ss1">Internship & Summer Projects</p>
          <p className="ss1">Certifications & Job Assistance</p>
          <p className="ss1">Job Foundation Courses </p>
         </center>

        <h1 className="text-light"
            style={{ fontSize: "25px", fontWeight:"bold", textDecoration:"underline"}}>
            <br/> <br/> <br/>
            Come, Join Us and be Incessant!
        </h1>
        </div>
        <Particles params={obj} style={{height:"100%", width:"100%", position: "absolute", left:0}}/>
        </div>
    )
}
export default slidewindow;