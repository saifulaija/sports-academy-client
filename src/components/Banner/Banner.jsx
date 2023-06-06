import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../src/assets/banner1.jpg'
import banner2 from '../../../src/assets/banner2.jpg'
import banner3 from '../../../src/assets/banner3.jpg'
const Banner = () => {
  return (
    <div className='max-w-[1280px mx-auto]'>

<Carousel>
                <div>
                    <img src={banner1} />
                   
                </div>
                <div>
                    <img src={banner2} />
                    
                </div>
                <div>
                    <img src={banner3}/>
                    
                </div>
            </Carousel>
   

    </div>
  );
};

export default Banner;
