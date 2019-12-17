import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Slidewindow from './slidewindow';
import Slidewindow1 from './slidewindow1';
import Slidewindow2 from './slidewindow2';
import Slidewindow3 from './slidewindow3';



class Slider extends React.Component{
    render(){
        return (
            <Carousel
                dynamicHeight={true}
                showStatus={false}
                showThumbs={false}
                showArrows={true}>
                <div style={{width:"100vw", height:"90vh", backgroundColor:"blue", position:"relative"}}>
                <Slidewindow />
                </div>
                {/* <div style={{backgroundColor: "blue", height:"100%", width: "100%"}}>
                <Slidewindow1 num="2"/>
                </div>
                <div style={{backgroundColor: "blue", height:"100%", width: "100%"}}>
                <Slidewindow2 num="3"/>
                </div>
                <div style={{backgroundColor: "blue", height:"100%", width: "100%"}}>
                <Slidewindow3 num="4"/>
                </div> */}
              {/* <div width="100%" height="90vh">
                    <img src="AI.png" />
                    <p className="legend">Legend 1</p>
                </div>
                {/* <div>
                    <img src="logo192.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="logo192.png" />
                    <p className="legend">Legend 3</p>
                </div> */}
            </Carousel>
        );
    }
}
export default Slider;