import { Button } from "@material-ui/core";
import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="banner_section">
        <div className='banner_section1'>
        <div style={{marginLeft: -487,
    width: 1346,marginTop: 41}}>
          <p style={{letterSpacing: 30,marginLeft: 80}}>WELCOME TO</p>
          <h1 style={{fontSize: '6em',
    lineHeight: 0,color:'#fff'}}>MILK & HONEY DIGITAL</h1>
          <h1 style={{fontSize: '3em'}}>Full Service Digital Marketing</h1>
        </div>
        <div  className= 'Banner_btn'>
          <Button>Our Services</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
