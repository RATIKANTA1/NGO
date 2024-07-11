import React from 'react';
 import intern from '../assets/intern.jpg'
 import volunteer from '../assets/volunteer.jpg'
  import contact from '../assets/contact.png'
  import { Link } from 'react-router-dom'
const Newsletter = () => {
    return  <>
    
               
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='joinus'>
        <div className='text-center md:w-3/4 mx-auto flex flex-col items-center ' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
            <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                Join us</h2>
            <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>Your support has the power to change lives. 
            Whether it's offering food, shelter, medical assistance, or education, every contribution counts. Your generosity 
            makes a meaningful difference in the lives of those in need.</p>
        </div>
        <section id="Projects" data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"
            className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                <img src={volunteer}
                    alt="Product" class="h-60 w-65 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    <p class="text-lg font-bold text-black truncate block capitalize mb-2 text-center">volunteer</p>
                    <div class="flex items-center justify-center">
                        <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button>
                    </div>
                </div>
            </div>
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <img src={intern}
                    alt="Product" class="h-60 w-65 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    <p class="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Internship</p>
                    <div class="flex items-center justify-center">
                        <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button>
                    </div>
                </div>
            </div>
            <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                <img src={contact}
                    alt="Product" class="h-60 w-65 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-72">
                    {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    {/* <p class="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Product Name</p> */}
                    <div class="flex items-center justify-center">
                       <Link to={"/Contact"}> <button className='px-7 py-2 mt-5 bg-green-400 text-white rounded hover:bg-slate-400'>Contact us</button></Link>
                    </div>
                </div>
            </div>
        </section>

    </div>




        
    
    </>
         
    
}

export default Newsletter