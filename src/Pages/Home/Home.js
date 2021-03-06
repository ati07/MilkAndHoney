import React, { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import ConicalSection from "../../Components/ConicalSection/ConicalSection";
import Header from "../../Components/Header/Header";
import { Button } from "@material-ui/core";
import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import ConicalSectionabove from "../../Components/ConicalSectionabove/ConicalSectionabove";
import FooterupSection from "../../Components/FooterupSection/FooterupSection";
import Footer from "../../Components/Footer/Footer";
// import { img } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Home() {
  const [x, setX] = useState(20);
  const [y, setY] = useState(50);
  const [images,setImages]=useState([])

  useEffect(()=>{
    AOS.init({duration:1500})
  })
  // const Xvalue = useRef(0)
  // useEffect(()=>{
  //   setImages([

  //   ])
  // })
  const position = () => {
    if (window.pageYOffset > 1600 && window.pageXOffset < 3300) {
      // console.log('window',window.pageYOffset)
      setX(window.pageYOffset);
    }
    
    // console.log(window.pageYOffset)
  };
  useEffect(() => {
    
      window.addEventListener("scroll", position);
      
      return () => window.removeEventListener("scroll", position);
    
    
  },[]);
  // console.log('X',x);

  return (
    <div>
      <Header />
      <Banner />
      <div className="home_section1">
        <ConicalSection />
      </div>
      <div className="home_section2">
        <div>
          <div>
            <img src="/img/Navy-Dashed-e1593621199628.png" />
          </div>
          <div>
            <h1 style={{ fontWeight: 500 }}>
              We create impactful digital experiences that help businesses grow.
            </h1>
            <p className="h_p">
              We are a digital marketing agency moving brands forward with our
              “creativity meets strategy” approach.
              <br />
              We take pride in our work, just like you do, and leverage our
              services to best meet your digital needs!
            </p>
            <p className="h_p">
              Here, you will find a level of service that blows the competition
              away.
              <br />
              We consistently create strategic solutions that generate lasting
              results.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="home_section2_btn">
          <Button>Our Work</Button>
        </div>
      </div>
      <div  className="home_section3">
        <div className="home_section3_1">
          <div style={{ margin: 45 }}>
            <img effect="blur" src="/img/Navy-Dashed-e1593621199628.png" />
          </div>
          <div className="home_services">
            <div data-aos="fade-left" className="home_services_logo">
              <img  effect="blur" className="services_logo" src="https://milkandhoneydigital.com/wp-content/uploads/2021/06/Graphics-Icon.png" />
              <h1 style={{ lineHeight: 1, fontSize: 25, fontWeight: 600 }}>
                Graphic Design
              </h1>
              <p>
                Enhance how you <br />
                communicate with your
              </p>
            </div>
            <div data-aos="fade-right" className="home_services_logo">
              <img effect="blur" className="services_logo" src="https://milkandhoneydigital.com/wp-content/uploads/2021/06/Email-Icon.png" />
              <h1 style={{ lineHeight: 1, fontSize: 25, fontWeight: 600 }}>
                Email Marketing
              </h1>
              <p>
                The perfect complement to <br />
                your current marketing
              </p>
              <p></p>
            </div>
            <div data-aos="fade-left" className="home_services_logo">
              <img  effect="blur" className="services_logo" src="https://milkandhoneydigital.com/wp-content/uploads/2018/03/SMM-Icon.png" />
              <h1 style={{ lineHeight: 1, fontSize: 25, fontWeight: 600 }}>
                Social Media <br />
                Management
              </h1>
              <p>
                Curating and executing <br />
                strategies to drive traffic to
              </p>
            </div>
            <div data-aos="fade-right" className="home_services_logo">
              <img effect="blur" className="services_logo" src="https://milkandhoneydigital.com/wp-content/uploads/2018/03/Web-Icon.png" />
              <h1 style={{ lineHeight: 1, fontSize: 25, fontWeight: 600 }}>
                Web Design
              </h1>
              <p>
                Impress your customers <br />
                online, just like you do in
              </p>
              <p></p>
            </div>
          </div>
          <div style={{ margin: 45 }}>
            <img src="/img/Navy-Dashed-e1593621199628.png" />
          </div>
        </div>
      </div>
      <div
        className="home_section4"
        style={{
          backgroundPositionX: `${x * 0.1 + 20}px`,
          backgroundPositionY: `${y}%`,
        }}
      ></div>
      <div className="home_section5">
        <div style={{ backgroundColor: "#fff", width: 1 }}>
          <img src="/img/Navy-Dashed-e1593621199628.png" />
        </div>
        <div className="home_section5_1">
          <div data-aos="fade-left" className="strategy">
            <h1 style={{ fontSize: "12em", padding: 0, lineHeight: 0 }}>01</h1>
            <h2 style={{ fontSize: "3em" }}>Strategy</h2>
          </div>
          <div className="strategy_img">
            <img  effect="blur" src="https://milkandhoneydigital.com/wp-content/uploads/2020/07/strategy-round.png" />
          </div>
          <div className='ArrowR' style={{position: 'relative',
    top: 160}}>
            <img src='https://milkandhoneydigital.com/wp-content/themes/dotdigital/css/../img/right_arrow.png' alt='ArrowRight'/>
          </div>
          <div className="stategy_p">
            <p>
              We define your competition and target audience, discover what is
              working in your industry, then strategize accordingly.
            </p>
          </div>
        </div>
        <div className="home_section5_1_reverse">
          <div data-aos="fade-right" className="strategy_reverse">
            <h1 style={{ fontSize: "12em", padding: 0, lineHeight: 0 }}>02</h1>
            <h2 style={{ fontSize: "3em" }}>Design</h2>
          </div>
          
          <div className="strategy_img">
            <img effect="blur" src="https://milkandhoneydigital.com/wp-content/uploads/2020/07/design-round.png" />
          </div>
          <div className='ArrowL' style={{position: 'relative',
    top: 160,right: 25}}>
            <img src='https://milkandhoneydigital.com/wp-content/themes/dotdigital/css/../img/left_arrow.png'/>
          </div>
          <div className="stategy_p">
            <p>
              Cohesive branding and style is what sets you apart from the rest.
              We ensure your branding is consistent and achieve great results in
              doing so.
            </p>
          </div>
        </div>
        <div className="home_section5_1">
          <div data-aos="fade-left" className="strategy">
            <h1 style={{ fontSize: "12em", padding: 0, lineHeight: 0 }}>03</h1>
            <h2 style={{ fontSize: "3em" }}>Develop</h2>
          </div>
          
          <div className="strategy_img">
            <img effect="blur" src="https://milkandhoneydigital.com/wp-content/uploads/2020/07/develop-round.png" />
          </div>
          <div className='ArrowR' style={{position: 'relative',
    top: 160}}>
            <img src='https://milkandhoneydigital.com/wp-content/themes/dotdigital/css/../img/right_arrow.png' alt='ArrowRight'/>
          </div>
          <div className="stategy_p">
            <p>
              We turn your ideas into a reality, whether a it's a website,
              growing social media channels, or leveraging the audience of
              influencers!
            </p>
          </div>
        </div>
        <div className="home_section5_1_reverse">
          <div data-aos="fade-right" className="strategy_reverse">
            <h1 style={{ fontSize: "12em", padding: 0, lineHeight: 0 }}>04</h1>
            <h2 style={{ fontSize: "3em" }}>Support</h2>
          </div>
          <div className="strategy_img">
            <img  effect="blur" src="https://milkandhoneydigital.com/wp-content/uploads/2020/07/support-round.png" />
          </div>
          
          <div className="stategy_p">
            <p>
              We'll be at your side the entire way. We are available 7 days a
              week to answer questions and help you!
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: 35,
            backgroundColor: "#fff",
            width: 1,
            // marginLeft: -30,
          }}
        >
          <img src="/img/Navy-Dashed-e1593621199628.png" />
        </div>
      </div>
      <div data-aos="fade-up" className='Service_btn'>
        <Button>
          VIEW ALL SERVICES
        </Button>
      </div>
      
      <div className="home_section6">
        <div style={{ backgroundColor: "#fff", width: 1,position:'relative',top: -111 }}>
          <img src="/img/Navy-Dashed-e1593621199628.png" />
        </div>
        <div className='brand_h1'>
          <h1>Brands We've Worked With</h1>
        </div>
        <Slider/>
        <div data-aos="fade-up" className="View_btn">
          <Button>VIEW MORE</Button>
        </div>
        
      </div>
      <div className='home_section7'>
            {/* <ConicalSectionabove/> */}
            <FooterupSection/>
          </div>
          <div className='home_section8'>
            <Footer clr1={'rgb(244 244 245)'}/>
          </div>
    </div>
  );
}

export default Home;
