import React from 'react';
import Particles from 'react-particles-js';
import {Canvas} from 'react-canvas-js';
const sample3 = {
    "maxParticles": 0,
    "shapes": [
      {
        "type": "image",
        "src": "R.png"
      },
      {
        "type": "image",
        "src": "Python.png"
      }
    ],
    "size": 200,
    "minSpeed": .1,
    "maxSpeed": .1,
    "alpha": .9,
    "backgroundColor": "white"
  };
const slidewindow3 =(props) => {
    return(
      <div style={{height: "85vh"}}>
        <img src="AI.png"></img>
        <h3 style={{color: "white"}}>Learn AI & ML using R and Python!</h3>
      </div>
    )
}
export default slidewindow3;