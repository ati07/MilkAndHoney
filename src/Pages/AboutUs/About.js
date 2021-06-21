import React,{useEffect} from "react";
import AboutSlider from "../../Components/AboutSlider/AboutSlider";
import ConicalSection from "../../Components/ConicalSection/ConicalSection";
import Footer from "../../Components/Footer/Footer";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function About() {
  useEffect(()=>{
    AOS.init({duration:1500})
  })
  // console.log("AboutUS");
  return (
    <div className="about">
      <div className="heading_about">
        <h1>About</h1>
      </div>
      <div className="about_conicalsection">
        <ConicalSection url1="https://milkandhoneydigital.com/wp-content/themes/dotdigital/img/parallax/breadcrumbs.jpg" />
      </div>
      <div className="about_photo">
        <img data-aos="zoom-in-up" src="https://milkandhoneydigital.com/wp-content/uploads/2018/06/Cropped-600x600.jpg" />

        <div data-aos="fade-up">
          <h2> Julia Anderson </h2>
          <h3>Digital Marketing Director</h3>
          <p>
            A diversely skilled marketing strategist with a firm understanding
            of the ins and outs of digital marketing, Julia founded Milk & Honey
            Digital in 2019. She consistently creates and executes strategies
            for organic growth online. She aims to break organizations’ social
            media records each month and her stats are competitive with other
            major players. In addition to her high level social media
            strategies, her website designs dazzle clients coast to coast.
          </p>
        </div>
      </div>
      <div className="AboutSlider">
        <AboutSlider />
        <div style={{marginTop:'-30px',height: 200,
    width: '100%'}}>
        {/* <ConicalSection url1="https://milkandhoneydigital.com/wp-content/themes/dotdigital/img/parallax/breadcrumbs.jpg" /> */}

      <ConicalSection clr={'#1f2732'}url1="https://milkandhoneydigital.com/wp-content/uploads/2018/04/texture.png" />
           {/* <ConicalSection />  */}
        </div>
        
      </div>
      <div className="about_footer">
          <Footer/>
      </div>
    </div>
  );
}

export default About;
