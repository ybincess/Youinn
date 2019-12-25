import React from "react";
import Particles from "react-particles-js";
import '../../images/CPNGs/html.jpg';
const slidewindow1 = props => {
  return (
    <div>
        <div className="text-center" style={{position: "absolute", top:"5%", width:"100%"}}>
        <h1 className="text-light"
            style={{ fontSize: "30px", fontWeight:"none"}}>
            <br/>
            <br/>
            Universe of Web UI Frameworks
            <br/><br/> <br/> <br/> 
            <br/> <br/> <br/> <br/> <br/> 
        </h1>
        <h1 className="text-light"
            style={{ fontSize: "18px", fontWeight:"bold"}}>
            Learn latest frameworks Angular, React, Node, HTML, Javascript, CSS and many more

             <br/> <br/> 
            Stay ahead of the crowd and stand a chance to get the job!
        </h1>
        </div>
      <Particles
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              speed: 6,
              out_mode: "out"
            },
            shape: {
              type: ["images", "circle"],
              images: [
                {
                  src: "html.jpg",
                  height: 40,
                  width: 40
                },
                {
                  src: "AngularJs.png",
                  height: 40,
                  width: 40
                },
                {
                  src: "ReactJs.png",
                  height: 40,
                  width: 40
                },
                {
                  src: "Boots.jpg",
                  height: 40,
                  width: 40
                },
                {
                  src: "css.png",
                  height: 40,
                  width: 40
                },
                {
                  src: "VS.png",
                  height: 40,
                  width: 40
                },
                {
                  src: "Github.png",
                  height: 40,
                  width: 40
                },
                {
                  src: "nodeJS.png",
                  height: 40,
                  width: 40
                }
              ]
            },
            color: {
              value: "#CCC"
            },
            size: {
              value: 40,
              random: false,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false
              }
            }
          },
          retina_detect: false
        }}
        style={{ height: "100%", width: "100%", position: "absolute", left: 0}}
      />
    </div>
  );
};

export default slidewindow1;
