import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slidewindow from "./slidewindow";
import Slidewindow1 from "./slidewindow1";
import Slidewindow2 from "./slidewindow2";
import Slidewindow3 from "./slidewindow3";
import Slidewindow4 from "./slidewindow4";

class Slider extends React.Component {
  render() {
    return (
      <Carousel
        dynamicHeight={true}
        showStatus={false}
        showThumbs={false}
        showArrows={true}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}

      >
        <div
          style={{
            width: "100vw",
            height: "90vh",
            backgroundColor: "navy",
            position: "relative"
          }}
        >
          <Slidewindow />
        </div>
        <Slidewindow1 /> 
        <Slidewindow4 />
        <Slidewindow2 />
        <div style={{width: "100vw", height: "90vh",backgroundColor: "navy", position: "relative"}}>
        <Slidewindow3 />        
        </div>

      </Carousel>
    );
  }
}
export default Slider;
