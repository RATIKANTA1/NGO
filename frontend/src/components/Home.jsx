import { Carousel } from "flowbite-react";
import React from 'react';
import banner1 from '../assets/r.png';
import banner2 from '../assets/r2.png';
import banner3 from '../assets/r3.png';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Home = () => {
  return (
    <div className="h-56 sm:h-64 sm:w-[24rem]  md:h-[70vh] md:w-auto lg:h-[92vh] lg:w-auto xl:h-[115vh] xl:w-auto  2xl:h-[115vh] 2xl:w-auto">
      <Carousel slideInterval={5000} pauseOnHover indicators={false}
        leftControl={<IoIosArrowDropleftCircle className='text-gray-600 scale-[3]' />}
        rightControl={<IoIosArrowDroprightCircle className='text-gray-600 scale-[3]' />} >
        <img src={banner1} alt="..." />
        <img src={banner2} alt="..." />
        <img src={banner3} alt="..." />
      </Carousel>
    </div>)
}

export default Home
