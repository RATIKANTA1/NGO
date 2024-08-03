import React from 'react';
import { Carousel } from "flowbite-react";
import hero3 from "../assets/cartoonTmg.png";

const BestVolunteer = () => {
    return (
        <div >
            <div className='px-4 md:px-14  py-12 max-w-screen-2xl mx-auto bg-gray-100' id="testimonial">
                <div className='md:w-1/2 mx-auto text-center' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                    <h2 className='text-4xl text-gray-500 font-semibold mb-2'>Our Best Volunteer</h2>
                </div>

                <div className='mt-8 px-4 lg:px-14 max-w-screen-2xl mx-auto h-[100vh] md:h-[40vh]'>
                    <Carousel className='w-full mx-auto' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                        <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                            <div className='md:w-1/3 flex justify-center'>
                                <img className='h-[65%] w-[65%] md:w-[50%] md:h-[50%]' src={hero3} alt='skb' />
                            </div>
                            {/* stats */}
                            <div className='md:w-2/3 mx-auto'>
                                <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Best Volunteer</h2>
                                <div>
                                    <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'><span className='font-bold'>Ratikanta Behera</span> exemplifies outstanding dedication and compassion as a volunteer. With unwavering commitment, Ratikanta inspires and leads initiatives, making a significant impact through tireless efforts and a genuine passion for helping others.
                                        Truly a beacon of selfless service.</p>
                                    <h5 className='text-green-400 text-xl font-semibold mb-2'>Ratikanta Behera</h5>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                            <div className='md:w-1/3 flex justify-center'>
                                <img className='h-[65%] w-[65%] md:w-[50%] md:h-[50%]' src={hero3} alt='skb' />
                            </div>
                            {/* stats */}
                            <div className='md:w-2/3 mx-auto'>
                                <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Best Intern</h2>
                                <div>
                                    <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'><span className='font-bold'>Suraj Kumar Behera</span> stands out as an exceptional intern, demonstrating remarkable dedication, creativity, and problem-solving skills.
                                        Their proactive approach and eagerness to learn have significantly contributed to our projects. Suraj’s ability to
                                        collaborate effectively and deliver high-quality work consistently makes them a valuable asset and a standout performer.</p>
                                    <h5 className='text-green-400 text-xl font-semibold mb-2'>Suraj Kumar Behera</h5>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                            <div className='md:w-1/3 flex justify-center'>
                                <img className='h-[65%] w-[65%] md:w-[50%] md:h-[50%]' src={hero3} alt='skb' />
                            </div>
                            {/* stats */}
                            <div className='md:w-2/3 mx-auto'>
                                <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Best Supporter</h2>
                                <div>
                                    <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'><span className='font-bold'>Rinku Dhurua</span> stands out as an exceptional supporter, consistently demonstrating unwavering commitment and dedication. His passion and proactive approach make his a driving force in advancing our mission.
                                        With his invaluable contributions and support, Rinku inspires others and significantly impacts our success and growth.</p>
                                    <h5 className='text-green-400 text-xl font-semibold mb-2'>Rinku Dhurua</h5>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>

            </div>
        </div>
    )
}

export default BestVolunteer