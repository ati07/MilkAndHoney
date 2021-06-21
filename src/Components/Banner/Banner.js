import { Button } from "@material-ui/core";
import React,{useEffect} from "react";
import "./Banner.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Banner() {
  useEffect(()=>{
    AOS.init({duration:1500})
  })
  return (
    <div className="banner">
      <div className="banner_section">
        <div className='banner_section1'>
        <div style={{marginLeft: -470,
    width: 1346,marginTop: 41}}>
          <p data-aos="zoom-in-up"style={{letterSpacing: 30,marginLeft: 80}}>WELCOME TO</p>
          <h1 data-aos="fade-up-right" style={{fontSize: '6em',
    lineHeight: 0,color:'#fff'}}>MILK & HONEY DIGITAL</h1>
          <h1 data-aos="zoom-in-down" style={{fontSize: '3em'}}>Full Service Digital Marketing</h1>
        </div>
        <div  data-aos="zoom-in-down" className= 'Banner_btn'>
          <Button>Our Services</Button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
