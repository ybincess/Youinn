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
        <div className="text-center" style={{position: "absolute", top:"20%", width:"100%"}}>
        <h1 className="text-light"
            style={{ fontSize: "15px", fontWeight:"none"}}>
            <br/>
            <br/>
            Don't get trapped in Online Courses and Video based Learnings
            <br/>
            Learn from Experts, We are here to get you a Job
        </h1>
        <h1 className="text-light"
            style={{ fontSize: "15px", fontWeight:"bold"}}>
            <br/> <br/> <br/>
            Come, Join Us and be Incessant!
        </h1>
        </div>
        <Particles params={obj} style={{height:"100%", width:"100%", position: "absolute", left:0}}/>
        </div>
    )
}
export default slidewindow;