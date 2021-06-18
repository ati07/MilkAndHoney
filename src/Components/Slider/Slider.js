import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
import './Slider.css'
function Slider() {
    const Images = ['/SliderImage/Alister.png','/SliderImage/Bombshell.png','/SliderImage/Lenny-and-Larrys.png',
                    '/SliderImage/Sambazon.png','/SliderImage/Vida-Cana.png','/SliderImage/Untitled-design-49.png',
                    '/SliderImage/Untitled-design-47.png']
    return (
        <div className='slider'>
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
            dots={true}
            showSides={true}
            sidesOpacity={.5}
            sideSize={.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={true}
            >
                {Images.map((img)=>(
                    <div>
                    <img
                      alt='SliderImg'
                      src={img}
                    />
                  </div>
                ))}
            </InfiniteCarousel>
        </div>
    )
}

export default Slider
