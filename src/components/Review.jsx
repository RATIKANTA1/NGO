import React from 'react';
import { Carousel } from "flowbite-react";
import review  from './ReviewData.js';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";



const Review = () => {
    
    return (
        <div >
            <div className='px-4 md:px-14  py-6 max-w-screen-2xl mx-auto bg-custom-color bg-custom-gradient' id="testimonial">
                <div className='md:w-1/2 mx-auto text-center' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                    <h2 className='text-4xl text-gray-500 font-semibold mb-2'>Our Best Volunteer</h2>
                </div>

                <div className='mt-8 px-4 lg:px-14 max-w-screen-2xl mx-auto h-[100vh] md:h-[70vh] xl:h-[50vh] 2xl:h-[35vh]'>
                    <Carousel className='w-full mx-auto' data-aos="fade-up"  indicators={false} pauseOnHover 
                    leftControl={<IoIosArrowDropleftCircle className='text-green-500 scale-[3]' />} 
                    rightControl={<IoIosArrowDroprightCircle className='text-green-500 scale-[3]' />} >
                        {review.map((review) => (

                            <div class="max-w-xl mt-16 mx-auto">
                                <div class="flex flex-col items-center text-center">
                                    <img src={review.img} class="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white" />
                                    <div class="mt-4">
                                        <h4 class="text-gray-800 text-base font-extrabold">{review.name}</h4>
                                        
                                    </div>
                                </div>

                                <div class="mt-6 text-center px-2 lg:px-12">
                                    <p class="text-sm leading-relaxed">{review.review}</p>
                                </div>

                                <div class="flex justify-center space-x-1.5 mt-4">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <svg
                                            key={index}
                                            class={`w-[18px] ${index < review.star ? 'fill-[#facc15]' : 'fill-[#CED5D8]'}`}
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                    ))}

                                </div>
                            </div>
                        ))}

                    </Carousel>
                </div>

            </div>
        </div>
    )
}

export default Review
