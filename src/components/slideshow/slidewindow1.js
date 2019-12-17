import React from 'react';
import { Canvas } from 'react-canvas-js';

const sample1 = {
    "maxParticles": 50,
    "colors": [
      "#2E1D62",
      "#513D91",
      "#487EEF",
      "#11A887",
      "#fc5c65",
      "#fed330"
    ],
    "shapes": [
      "circle",
      "square"
    ],
    "size": 10,
    "minSpeed": 0.05,
    "maxSpeed": 0.2,
    "alpha": 0.7,
    "backgroundColor": "#1E1F29"
  };
  const slidewindow1 =(props) => {
    return(
       <div style={{height: "85vh"}}>
        <Canvas options={sample1} />
        <h3 style={{color: "white"}}>Universe of Web UI, Learn Angular, React and JS Frameworks!</h3>
        </div>
    )
}
export default slidewindow1;