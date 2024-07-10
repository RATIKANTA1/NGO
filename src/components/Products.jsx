import React from 'react';
import { Carousel } from "flowbite-react";
import hero2 from "../assets/hero2.png"
import hero3 from "../assets/cartoonTmg.png";

const Products = () => {
  return (
    <div >

        {/* about text */}
        {/* <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='product'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <div data-aos="zoom-out-left" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                    <img className='md:w-4/5 md:h-4/5 animate-bounceSlow' src={hero2} alt='skb' />
                </div>
                <div className='md:w-3/4 mx-auto' data-aos="zoom-out-right" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                    <h2 className='text-4xl text-gray-500 font-semibold mb-4 md:w-4/5'>
                        The unseen of spending three years at pixelgrade</h2>
                    <p className='md:w-3/4 text-sm text-gray-500 mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Quae rem dolor ab quisquam eaque aspernatur temporibus alias autem sit doloremque nesciunt accusamus 
                    facere ad voluptatibus fugiat reiciendis eum suscipit aut, nemo quia ullam quis ratione cum. Amet sed modi 
                    quod enim quibusdam sint adipisci voluptatibus impedit quidem perspiciatis? Libero, laboriosam.</p>
                    <button className='btn-primary'>Learn More</button>
                </div>
            </div>
        </div> */}

        {/* companies stats */}
        {/* <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-16 bg-gray-100' id='testimonial'>
        
            <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                <div className='md:w-1/3'>
                    <img className='md:w-2/3 md:h-2/3' src={hero2} alt='skb' />
                </div>
                
                <div className='md:w-2/3 mx-auto'>
                    <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Products Review</h2>
                    <div>
                        <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                        cupiditate officiis, doloremque vel nihil libero omnis, aliquid, ipsam asperiores quos voluptas quis vitae! Libero possimus aliquam 
                        recusandae nihil nostrum obcaecati magnam esse quidem deleniti nam! Libero nulla, doloremque similique rem et aut dolorum incidunt 
                        natus optio voluptatem, modi labore quia?</p>
                        <h5 className='text-green-400 text-xl font-semibold mb-2'>Stev Smeet</h5>
                    </div>
                </div>
            </div>
             
        </div> */}

        {/* testing */}
        <div className='bg-gray-100 py-6' id="testimonial">
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto h-[100vh] md:h-[40vh]'>
                <Carousel className='w-full mx-auto' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                    <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                        <div className='md:w-1/3 flex justify-center'>
                            <img className='h-3/4 w-3/4 md:w-2/3 md:h-2/3 ' src={hero3} alt='skb' />
                        </div>
                        {/* stats */}
                        <div className='md:w-2/3 mx-auto'>
                            <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Products Review</h2>
                            <div>
                                <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                                cupiditate officiis, doloremque vel nihil libero omnis, aliquid, ipsam asperiores quos voluptas quis vitae! Libero possimus aliquam 
                                recusandae nihil nostrum obcaecati magnam esse quidem deleniti nam! Libero nulla, doloremque similique rem et aut dolorum incidunt 
                                natus optio voluptatem, modi labore quia?</p>
                                <h5 className='text-green-400 text-xl font-semibold mb-2'>Stev Smeet</h5>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                        <div className='md:w-1/3 flex justify-center'>
                            <img className='h-3/4 w-3/4 md:w-2/3 md:h-2/3 ' src={hero3} alt='skb' />
                        </div>
                        {/* stats */}
                        <div className='md:w-2/3 mx-auto'>
                            <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Products Review</h2>
                            <div>
                                <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                                cupiditate officiis, doloremque vel nihil libero omnis, aliquid, ipsam asperiores quos voluptas quis vitae! Libero possimus aliquam 
                                recusandae nihil nostrum obcaecati magnam esse quidem deleniti nam! Libero nulla, doloremque similique rem et aut dolorum incidunt 
                                natus optio voluptatem, modi labore quia?</p>
                                <h5 className='text-green-400 text-xl font-semibold mb-2'>Stev Smeet</h5>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center py-6'>
                        <div className='md:w-1/3 flex justify-center'>
                            <img className='h-3/4 w-3/4 md:w-2/3 md:h-2/3 ' src={hero3} alt='skb' />
                        </div>
                        {/* stats */}
                        <div className='md:w-2/3 mx-auto'>
                            <h2 className='text-4xl text-green-400 font-semibold mb-4 md:w-4/5'>Products Review</h2>
                            <div>
                                <p className='md:w-4/5 text-base text-gray-500 mb-4 leading-7'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt 
                                cupiditate officiis, doloremque vel nihil libero omnis, aliquid, ipsam asperiores quos voluptas quis vitae! Libero possimus aliquam 
                                recusandae nihil nostrum obcaecati magnam esse quidem deleniti nam! Libero nulla, doloremque similique rem et aut dolorum incidunt 
                                natus optio voluptatem, modi labore quia?</p>
                                <h5 className='text-green-400 text-xl font-semibold mb-2'>Stev Smeet</h5>
                            </div>
                        </div>
                    </div>
                    
                </Carousel>
            </div>
        </div>

    </div>
  )
}

export default Products