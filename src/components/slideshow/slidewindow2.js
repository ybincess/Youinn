import React from 'react';
import Particles from 'react-particles-js';
import {Canvas} from 'react-canvas-js';
const sample3 = {
    "maxParticles": 0,
    "shapes": [
      {
        "type": "image",
        "src": "Tosca.png"
      },
      {
        "type": "image",
        "src": "uft.png"
      },
      {
        "type": "image",
        "src": "uipath.png"
      },
      {
        "type": "image",
        "src": "Selenium.jpg"
      },
      {
        "type": "image",
        "src": "soapui.jpg"
      },
      {
        "type": "image",
        "src": "testng.jpg"
      },
    ],
    "size": 100,
    "minSpeed": .1,
    "maxSpeed": .9,
    "alpha": .9,
    "backgroundColor": "navy"
  };
const slidewindow2 =(props) => {
    return(
      <div style={{width:"100%", height:"90vh"}}>
        <Canvas options={sample3} />
        <div className="text-center" style={{position: "absolute", top:"5%", width:"100%"}}>
        <h1 className="text-light"
            style={{ fontSize: "30px", fontWeight:"none"}}>
            <br/> 
            Choose a Promising career in Testing!
            <br/><br/> <br/> <br/> <br/>
            <br/> <br/> <br/> <br/>
            <br/> <br/> <br/>
            <h1 className="text-light"
            style={{ fontSize: "20px", fontWeight:"bold"}}>
            Learn Manual, Automation and Robotics
            <br/> 
            We cover leading Testing Frameworks
            </h1>
        </h1>
</div>
      </div>
    )
}
export default slidewindow2;