import React, { useEffect, useState } from 'react'
import style from './categoriesSlider.module.css'
import Slider from "react-slick";
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function CategoriesSlider() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
    slidesToShow: 7,
    slidesToScroll: 2,
  };

  const [categories, setCategories] = useState([]); 
 
  async function getResentCategories() {
      try{
      let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
      console.log(data?.data);
      setCategories(data.data)
    }catch(err){
      console.log(err); 
        }
  }
  
  useEffect(()=>{
    getResentCategories()
  },[]);
  return <>

    <Slider {...settings}>
        {categories?.map((category , index)=> <div key={index} className='my-6'>
          <img src={category.image}   className='w-full h-[200px] mt-4' alt=''/>
          <h3>{category.name}</h3>
        </div>)}
    </Slider>

  </>
}
