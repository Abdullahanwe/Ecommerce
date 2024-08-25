import React, { useState } from 'react'
import Slide1 from '../../assets/images/slider-image-1.jpeg'
import Slide2 from '../../assets/images/slider-image-2.jpeg'
import Slide3 from '../../assets/images/slider-image-3.jpeg'
import Slider from 'react-slick'

export default function MianSlide() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    slidesToShow: 1,
    slidesToScroll: 2,
  };
    
  return <>
    
<div className="flex">
  <div className="w-3/4">
    <Slider {...settings}>
      <img src={Slide1} className='w-full h-[400px]' alt="" />
      <img src={Slide2} className='w-full h-[400px]' alt="" />
      <img src={Slide3} className='w-full h-[400px]' alt="" />
    </Slider>

  </div>
  <div className="w-1/4">
  <img src={Slide1} className='w-full h-[200px]' alt="" />
  <img src={Slide2} className='w-full h-[200px]' alt="" />
  </div>
</div>

  </>
}
