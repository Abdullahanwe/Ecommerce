import React, { createContext, useContext, useEffect } from 'react';
import { CartContext } from '../../Context/CartContext';
import { WishlistContext } from '../../Context/WishlastContext';
import ProductDetails from '../ProductDetails/ProductDetails';
import Loding from '../Loding/Loding';

const Wishlist = () => {

let{wishlists,getWishList,deleteProduct}=useContext(WishlistContext)
console.log('heee',wishlists);
useEffect(()=>{
    getWishList()
    },[])
   


    return (
        
        <div>
        <h2>Your Wishlist</h2>
      
        {wishlists.length > 0 ? (
          <div className="flex flex-wrap justify-center mx-7">
            {wishlists.map((item) => (
              <div key={item._id} className="w-1/5 p-4 product relative">
                <div>
                  <img src={item.imageCover} className="w-full" alt={item.name} />
                  <h2 className="text-main text-sm">{item.name}</h2>
                  <h2 className="font-medium">
                    {item.title}
                  </h2>
                </div>
                <div className="flex justify-between my-2">
                <h3>{item.price} EGP</h3>
                <h3>
                    <i className="fas fa-star rating-color"></i> {item.ratingsAverage}
                </h3>
                </div>
                <button onClick={()=> deleteProduct(item._id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
            </div>
            ))}
        </div>
        ) : <div className='flex justify-center h-screen'><Loding/></div>}
      </div>
    )
}

export default Wishlist;


