import React from 'react';
import Particles from 'react-particles-js';
import {Canvas} from 'react-canvas-js';
const sample3 = {
    "maxParticles": 0,
    "shapes": [
      {
        "type": "image",
        "src": "Boots.jpg"
      },
      {
        "type": "image",
        "src": "css.png"
      },
      {
        "type": "image",
        "src": "js.png"
      },
      {
        "type": "image",
        "src": "html.jpg"
      },
      {
        "type": "image",
        "src": "AngularJs.png"
      },
      {
        "type": "image",
        "src": "ReactJs.png"
      },

    ],
    "size": 100,
    "minSpeed": .1,
    "maxSpeed": .3,
    "alpha": .9,
    "backgroundColor": "black"
  };
const slidewindow2 =(props) => {
    return(
      <div style={{height: "85vh"}}>
        <Canvas options={sample3} />
        <h3 style={{color: "white"}}>Universe of Web UI, Learn Angular, React and JS Frameworks!</h3>
        </div>
    )
}
export default slidewindow2;