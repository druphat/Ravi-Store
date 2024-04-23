import React from 'react'
import HeroSection from './component/HeroSection';
import { useProductContext } from './context/producttext'



function About() {
    const {myName} = useProductContext();
  
  const data ={
    name : "Ravi Ecommerce"
  } 
  return (
    <>
    {myName}
      <HeroSection myData = {data}/>
    </>
  )
}

export default About
