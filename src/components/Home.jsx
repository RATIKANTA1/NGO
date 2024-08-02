import { Carousel } from "flowbite-react";
import React from 'react';
import Hero3 from '../assets/hero3.png'

const Home = () => {
  return (
    <div className="h-56 sm:h-64  md:h-96 xl:h-screen 2xl:h-screen">
      <Carousel slideInterval={5000}>
        <img src={Hero3} alt="..." />
        <img src={Hero3} alt="..." />
        <img src={Hero3} alt="..." />
        <img src={Hero3} alt="..." />
      </Carousel>
    </div>)
}

export default Home
