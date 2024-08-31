import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import Loding from '../Loding/Loding';
import { Link } from 'react-router-dom';

export default function Cart() {

let {getCart,loding ,removeProduct, cart,updateProductCount}=useContext(CartContext);

console.log(cart);
useEffect (()=>{
  getCart();
},[])
    
  return <>
    

    {loding? <div className='flex h-screen justify-center items-center'><Loding/></div>  :<div> 
      {cart? <div className="relative overflow-x-auto  w-3/4 mx-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left mb-2 rtl:text-right text-gray-500 dark:text-gray-400">    
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      
      {cart?.data.products.map((product)=><tr key={product.product.id} className="bg-white border-b text-black ">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900">
          {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button onClick={()=> updateProductCount(product.product.id , product.count-1)} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 " type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
              <span>{product.count}</span>
            </div>
            <button onClick={()=> updateProductCount(product.product.id , product.count+1)} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 " type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-4 py-4 font-semibold text-gray-900 ">
          {product.price} EGP
        </td>
        <td className="px-6 py-4">
          <button onClick={()=> removeProduct(product.product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline"><i class="fa-solid fa-trash-can"></i> Remove</button>
        </td>
      </tr>)}
    </tbody>
    <tfoot className='w-full mb-3'>
      <tr className='font-semibold text-black text-xl '>
        <th colSpan={3} className='pl-3'>
          Total Cart Price
        </th>
        <th colSpan={3} className='text-center'>{cart.data.totalCartPrice} EGP</th>
      </tr>
    </tfoot>
  </table>
    <Link to={'/checkout'} className='bg-main text-white p-2 m-2 text-center rounded-md'>Check Out</Link>  

</div>:<h2 className='text-2xl text-black font-bold text-center'>Cart Is Empty</h2>}


</div>}
  
  </>
}
