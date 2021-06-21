import React from "react";
import InfiniteCarousel from "react-leaf-carousel";
import "./AboutSlider.css";
import { Link } from "react-router-dom";

function AboutSlider() {
  const Services = {
    Title: [
      "Web Design",
      "Graphics",
      "Graphics",
      "Graphics",
      "Content",
      "Content",
    ],
    Images: [
      "/AboutSliderImages/Indigo.png",
      "/AboutSliderImages/Laguna-Logo.png",
      "/AboutSliderImages/OUTSIDE.png",
      "/AboutSliderImages/Brochure-Secondary.png",
      "/AboutSliderImages/Tula.png",
      "/AboutSliderImages/IMG.png",
    ],
    ItemTitle: [
      " Indigo Land & Minerals ",
      " Laguna Moon Outdoors ",
      " Coastal Vacation Home Services ",
      " Provenir Healthcare ",
      " Island Gatherings ",
      " Vida Caña ",
    ],
    link: ["", "", "", "", "", ""],
  };

  return (
    <div className="slider">
      <InfiniteCarousel
        // autoCycle={true}
        // swipe= {true}
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
        slidesSpacing={0}
      >
        {Services["Images"].map((img, i) => (
          <>
            <div>
              <img
                style={{ height: 300, width: 323 }}
                alt="SliderImg"
                src={img}
              />
            </div>
            <div className="About_detail">
              <Link to={Services["link"][i]}>
                <h2>{Services["Title"][i]}</h2>
                <p>{Services["ItemTitle"][i]}</p>
              </Link>
            </div>
          </>
        ))}
      </InfiniteCarousel>
    </div>
  );
}

export default AboutSlider;
