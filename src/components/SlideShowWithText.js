import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Canvas } from 'react-canvas-js';


import Carousel from "react-bootstrap/Carousel";
import "../CSS/index.css";
import "../CSS/Ss.css";
import "../CSS/ss2.css";

import Picture1 from "../images/Slide1.jpg";
import Picture2 from "../images/Slide2.jpg";
import Picture3 from "../images/Slide3.svg";
import Picture4 from "../images/Slide4.svg";
import Picture5 from "../images/AI.png";

import AngualrImg from '../images/AngularJs.png';
import ReactImg from '../images/ReactJs.png';
import CssImg from '../images/CPNGs/css.png';
import JsImg from '../images/CPNGs/js.png';
import HtmImg from '../images/CPNGs/html.jpg';
import BsImg from '../images/CPNGs/Boots.jpg';
import RImg from '../images/CPNGs/R.png';
import PytImg from '../images/CPNGs/Python.png';

import SelImg from '../images/CPNGs/Selenium.jpg';
import SoaImg from '../images/CPNGs/soapui.jpg';
import TosImg from '../images/CPNGs/Tosca.png';
import UftImg from '../images/CPNGs/uft.png';
import UipImg from '../images/CPNGs/uipath.png';
import TesImg from '../images/CPNGs/testng.jpg';

import Javascript from '../images/Javascript.png';
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

function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      pauseOnHover={false}
      interval={4000}
    >
      <Carousel.Item>
        <img
          className="image-prop"
          src={Picture1}
          alt="Home Page"    
        />
        <Carousel.Caption>
          <h5>
              Don't get trapped in Online Courses and Video based Learnings
              <br />
              <br/>
              <br/>
              Learn from the Experts, We are here to get you a Job!
              <br/>
              <br/>
              <br/>
              <h4>That's a Promise!</h4>
              <br />
              <br/>
              <br/>
              <br/>
            
          </h5>
          <p className="ss1"> Come, Join us and Be Incessant!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image-prop"
          src={Picture2}
          alt="UI Universe"
        />
        <Carousel.Caption>
          <img className="ss1" src={ReactImg} alt="pic" width="80" height="80" hspace="60"/>
          <img className="ss1" src={AngualrImg} alt="pic" width="80" height="80" />
          <br/> <br/> <br/> <br/>
          <img className="ss1" src={HtmImg} alt="pic" width="60" height="60"  hspace="40"/>
          <img className="ss1" src={CssImg} alt="pic" width="60" height="60"/>
          <br/>   <br/>    <br/> <br/>
          <img className="ss1" src={JsImg} alt="pic" width="80" height="80"  hspace="60"/>
          <img className="ss1" src={BsImg} alt="pic" width="80" height="80" />
          <br/>   <br/>   <br/> <br/>
          <p className="ss1">A Universe of Web UI Frameworks</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <img
          className="image-prop"
          src={Picture4}
          alt="Testing Tools"
        /> */}
        <Canvas options={sample1} />
        <Carousel.Caption>
          <img className="ss1" src={TosImg} alt="pic" width="100" height="80" hspace="20"/>
          <img className="ss1" src={UftImg} alt="pic" width="100" height="80" hspace="20"/>
          <br/> <br/> <br/> <br/>
          <img className="ss1" src={SelImg} alt="pic" width="60" height="60"  hspace="20"/>
          <img className="ss1" src={SoaImg} alt="pic" width="60" height="60"  hspace="20"/>
          <br/><br/> <br/><br/> <br/>
          <img className="ss1" src={TesImg} alt="pic" width="100" height="80"  hspace="20"/>
          <img className="ss1" src={UipImg} alt="pic" width="100" height="80" hspace="20"/>
          <br/><br/> <br/>
          <p className="ss1">A Promising Career in Testing! From Manual to Automation</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="image-prop"
          src={Picture5}
          alt="AI Img"
        />

        <Carousel.Caption>
        <img className="ss1" src={RImg} alt="pic" width="100" height="100" hspace="40"/>
          <img className="ss1" src={PytImg} alt="pic" width="100" height="100" hspace="20"/>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <p className="ss1">A Deep Dive in AI & ML using R and Python</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default ControlledCarousel;
