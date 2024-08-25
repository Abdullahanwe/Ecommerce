import React, { useState } from 'react'
import style from './Loding.module.css'
import { RevolvingDot } from 'react-loader-spinner'

export default function Loding() {



    
  return <>
    
    <RevolvingDot
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  
  </>
}
