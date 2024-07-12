import { Carousel } from "flowbite-react";
import React from 'react';
import Hero1 from '../assets/hero1.png'
import Hero3 from '../assets/hero3.png'

const Home = () => {
  return (
    <div className='bg-gray-100' id="home">
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                <div className="my-28 md:my-8 md:py-12 flex flex-col md:flex-row-reverse items-center justify-evenly md:gap-12">
                    
                        <img className="w-full h-full mr-1" src={Hero3} alt='skb' />
                 
                    
                </div>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-evenly gap-12">

                <img className="w-full h-full mr-1" src={Hero3} alt='skb' />

                    {/* <div className="md:w-1/2 invisible md:visible">
                        <h1 className="text-5xl font-semibold mb-4 text-gray-500 md:w-3/4 leading-snug">Her Education make your 
                        <span className="text-green-500 leading-snug"> Family Smile</span></h1>
                        <p className="text-gray-500 text-base mb-8">Support,Contribute,Donate for the mission</p>
                        <button className="btn-primary">
                            Register</button>
                    </div> */}
                </div>
                <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-evenly gap-12">
                    
                <img className="w-full h-full mr-1" src={Hero3} alt='skb' />

                    {/* <div className="md:w-1/2 invisible md:visible">
                        <h1 className="text-5xl font-semibold mb-4 text-gray-500 md:w-3/4 leading-snug">Her Education make your 
                        <span className="text-green-500 leading-snug"> Family Smile</span></h1>
                        <p className="text-gray-500 text-base mb-8">Support,Contribute,Donate for the mission</p>
                        <button className="btn-primary">
                            Register</button>
                    </div> */}
                </div>
                
             </Carousel>
        </div>
    </div>
  )
}

export default Home