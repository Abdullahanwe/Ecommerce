import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import Loding from '../Loding/Loding'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { WishlistContext } from '../../Context/WishlastContext';

export default function ProductDetails() {

let {id , category} = useParams();
var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows:false,
  autoplay:true,
  autoplaySpeed:1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

  let{addProudactToCart} = useContext(CartContext);
let{addWishlist}=useContext(WishlistContext)
const [productDetails, setProductDetails] = useState({})
  async function getProductDetails(id){
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    // console.log(data);
    setProductDetails(data.data)
    
  }

  const [sliderDedails, setSliderDedails] = useState([]);
 
const [isLoding, setIsLoding] = useState(false)
    async function fetchsliderDedails(category) {
      
      try{
        setIsLoding(true)
      let{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
      console.log(data?.data);
     let allProudacts =data?.data;
     let related = allProudacts.filter((product)=> product.category.name == category);
     console.log(related);
     
        setSliderDedails(related)
     setIsLoding(false)
      
    }catch(err){
      console.log(err);
    }
    }
  useEffect(()=>{
    getProductDetails(id);
    fetchsliderDedails(category); 
  },[id , category]);
  return <>
        {!isLoding? <>
    <div className="flex items-center py-10">
        <div className="w-1/4 p-4">
        <Slider {...settings}>
          {productDetails.images?.map((imgae , index)=> <img src={imgae} key={index} className='w-full' alt=''/>)}
          </Slider>
        </div>
        <div className="w-3/4">
          <div>
            <h2>{productDetails.title}</h2>
            <p className='my-6 text-gray-500'>{productDetails.description}</p>
            <h3>{productDetails.category?.name}</h3>
            <div className="flex justify-between my-2 mx-5 " >
                <h3>{productDetails.price} EGP</h3>
                <h3><i className='fas fa-star rating-color'></i> {productDetails.ratingsAverage}</h3>
            </div>
            <button onClick={()=>addProudactToCart(productDetails.id)} className='btn w-full bg-main text-white rounded py-1'>Add To Cart</button>
          </div>
        </div>
    </div>
    <div className="flex flex-wrap mx-5 " >
      {sliderDedails.map((product)=> 
        <div className=" w-1/5 p-4 product relative mx-">
              <button onClick={()=>addWishlist(product.id)} className='absolute right-3 wish text-2xl'><i className='fa-solid fa-heart  text-main'></i></button>
          <Link to={`/productdetails/${product.id}/${product.category.name}`}>
            <div className=''>
              <img src={product.imageCover} className='w-full' alt={product.title} />
              <h2 className='text-main text-sm'>{product.category.name}</h2>

              <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
            </div>
            <div className="flex justify-between my-2" >
              <h3>{product.price} EGP</h3>
              <h3><i className='fas fa-star rating-color'></i> {product.ratingsAverage}</h3>
            </div>
          </Link>
            <button onClick={()=>addProudactToCart(productDetails.id)} className='btn w-full bg-main text-white rounded py-1'>Add To Cart</button>
        </div>)}
    </div>
      </>:<div className="flex h-screen justify-center items-center"> <Loding/></div>}
  </>
}
