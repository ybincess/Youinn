import React from 'react';
import FSDev from "../../images/FSDev.jpg";
import "../../CSS/index.css";
import "../../CSS/Ss.css";
import "../../CSS/ss2.css";

const slidewindow4 = props => {
  return (
    <div>
    <div className="text-center" style={{position: "absolute", top:"30%", width:"100%"}}>
        <span style={{color:"Yellow",fontSize:"30px", fontWeight:"bold", backgroundColor:'black'}}>
           &lt;Want to be a Full Stack Developer&gt;
           <br/>
                    We will take you There!
                    </span>
     </div>
      <img className="image-prop" src={FSDev} alt="Home Page"/>

     </div>
  )
}
export default slidewindow4;
