import React from 'react';
import intern from '../assets/intern2.png';
import volunteer from '../assets/volunteer1.jpg';
import Social from '../assets/Social2.png';
import Content from '../assets/content2.jpg';
import contact from '../assets/cont6.png';
import { Link } from 'react-router-dom';

const ConnectUs = () => {
    return <>
        {/* 
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-8 bg-gray-100' id='connectus'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center ' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Connect Us</h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>We believe in empowering women, conserving the environment, and helping stray animals to create lasting
                    change. Through education, sustainable development, we uplift those in need. Join us in building a brighter future for all.</p>
            </div>

            <section id="Projects" data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col" >
                    <img src={volunteer}
                        alt="Product" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">volunteer</p>
                        <div className="flex items-center justify-center">
                            <Link to={"https://surveyheart.com/form/636e16ede5fab37a9ba82483"} target='blank'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button>
                            </Link>                        </div>
                    </div>
                </div>

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col" >
                    <img src={Social}
                        alt="Product" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Social Marketing</p>
                        <div className="flex items-center justify-center">
                            <Link to={"https://surveyheart.com/form/653dee604d11f807b0362c4c"} target='blank'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button>
                            </Link>                        </div>
                    </div>
                </div>

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col" >
                    <img src={Content}
                        alt="Product" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Content-Writing</p>
                        <div className="flex items-center justify-center">
                            <Link to={"https://surveyheart.com/form/65e42badb0a9ff72bbbffb38"} target='blank'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button>
                            </Link>                        </div>
                    </div>
                </div>


                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  flex flex-col">
                    <img src={intern}
                        alt="Product" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Internship</p>
                        <div className="flex items-center justify-center">
                            <Link to={"https://surveyheart.com/form/653dedfe89f63007c655792f"} target='blank'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button></Link>
                        </div>
                    </div>
                </div>

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  flex flex-col" >
                    <img src={contact}
                        alt="Product" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Contact us</p>
                        <div className="flex items-center justify-center">
                            <Link to={"/Contact"}> <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Contact us</button></Link>
                        </div>
                    </div>
                </div>

            </section>

        </div> */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto py-8 bg-gray-100' id='connectus'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>Connect Us</h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>
                    We believe in empowering women, conserving the environment, and helping stray animals to create lasting change. Through education, sustainable development, we uplift those in need. Join us in building a brighter future for all.
                </p>
            </div>

            <div className="flex flex-wrap md:flex-col-3 justify-center gap-8 lg:gap-24 mt-10 mb-5">

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col">
                    <img src={volunteer} alt="Volunteer" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Volunteer</p>
                        <div className="flex items-center justify-center">
                            <Link to="https://surveyheart.com/form/636e16ede5fab37a9ba82483" target='_blank'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col">
                    <img src={Social} alt="Social Marketing" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Social Marketing</p>
                        <div className="flex items-center justify-center">
                            <Link to="https://surveyheart.com/form/653dee604d11f807b0362c4c" target='_blank'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col">
                    <img src={Content} alt="Content-Writing" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Content-Writing</p>
                        <div className="flex items-center justify-center">
                            <Link to="https://surveyheart.com/form/65e42badb0a9ff72bbbffb38" target='_blank'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col">
                    <img src={intern} alt="Internship" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Internship</p>
                        <div className="flex items-center justify-center">
                            <Link to="https://surveyheart.com/form/653dedfe89f63007c655792f" target='_blank'>
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Register</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl flex flex-col">
                    <img src={contact} alt="Contact us" className="h-60 w-65 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Contact us</p>
                        <div className="flex items-center justify-center">
                            <Link to="/Contact">
                                <button className='px-7 py-2 bg-green-400 text-white rounded hover:bg-slate-400'>Contact us</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
}

export default ConnectUs