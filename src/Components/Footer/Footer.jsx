import React, { useState } from 'react'
import style from './Footer.module.css'

export default function Footer() {



    
  return <>

  <div className=" w-full py-10 px-4 bg-gray-200">
    <h2 className='font-sans '>Get the Fresh Cart app</h2>
    <p className='text-gray-600'>We will send you a link, open it on your phone to downlod the app.</p>
    <div className="container flex justify-center py-3">
      <input type="text" className='w-3/4 '/>
      <button className='btn bg-main text-white rounded py-1 px-5 mx-3' >Share App Link</button>
      
    </div>
    <div className='flex justify-between'>
        <span>
          <p>Payment Partners</p>
        </span>
        <span>
        Get deliveries with FreshCar
        </span>
      </div>
  </div>
  
  </>
}
