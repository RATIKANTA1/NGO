import { Carousel } from "flowbite-react";
import React from 'react';
import banner1 from '../assets/t.jpg'
import banner2 from '../assets/ban2.png'
import banner3 from '../assets/ban3.png'



const Home = () => {
  return (
    <div className="h-56 sm:h-64  md:h-96 xl:h-screen 2xl:h-screen">
      <Carousel slideInterval={5000}>
        <img src={banner1} alt="..." />
        <img src={banner2} alt="..." />
        <img src={banner3} alt="..." />
        {/* <img src={Hero3} alt="..." /> */}
      </Carousel>
    </div>)
}

export default Home
