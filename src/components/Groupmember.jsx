import React from 'react'
import profile from '../assets/profile2.png'
 import ig from '../assets/instagram.png'
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";

const Groupmember = () => {
    return (
        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='group'>
            <div className='mt-3 md:w-1/2 mx-auto text-center' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-2'>Team Members</h2>
                <p className='text-gray-500 '>We have been working with some fortune 500+ clients</p>
            </div>

            <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-500 hover:scale-105 hover:shadow-xl" 
                data-aos="zoom-out-up">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-36 h-36 mb-3 rounded-full shadow-lg" src={profile} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-700 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div className="mt-4 flex space-x-6">
                            <a className="text-blue-700 hover:text-blue-900" href="https://in.linkedin.com/company/kshitiksha-foundation" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin size={24} />
                            </a>
                            <a className="text-blue-600 hover:text-blue-800" href="https://www.facebook.com/p/Kshitiksha-Foundation-100079763515404/" target="_blank" rel="noopener noreferrer">
                                <BsFacebook size={24} />
                            </a>
                            <a className="text-blue-400 hover:text-blue-600" href="https://twitter.com/KshitikshaF" target="_blank" rel="noopener noreferrer">
                                <BsTwitter size={24} />
                            </a>
                            <a className="opacity-85 hover:opacity-100" href="https://www.instagram.com/kshitikshafoundation/?hl=en" target="_blank" rel="noopener noreferrer">
                                <img src={ig} alt="" className='w-[24px] h-[24px]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-500 hover:scale-105 hover:shadow-xl" 
                data-aos="zoom-out-up">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-36 h-36 mb-3 rounded-full shadow-lg" src={profile} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-700 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div className="mt-4 flex space-x-6">
                            <a className="text-blue-700 hover:text-blue-900" href="https://in.linkedin.com/company/kshitiksha-foundation" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin size={24} />
                            </a>
                            <a className="text-blue-600 hover:text-blue-800" href="https://www.facebook.com/p/Kshitiksha-Foundation-100079763515404/" target="_blank" rel="noopener noreferrer">
                                <BsFacebook size={24} />
                            </a>
                            <a className="text-blue-400 hover:text-blue-600" href="https://twitter.com/KshitikshaF" target="_blank" rel="noopener noreferrer">
                                <BsTwitter size={24} />
                            </a>
                            <a className="opacity-85 hover:opacity-100" href="https://www.instagram.com/kshitikshafoundation/?hl=en" target="_blank" rel="noopener noreferrer">
                                <img src={ig} alt="" className='w-[24px] h-[24px]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl" 
                data-aos="zoom-out-up">
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-36 h-36 mb-3 rounded-full shadow-lg" src={profile} alt="Bonnie image" />
                        <h5 className="mb-1 text-xl font-medium text-gray-700 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        <div className="mt-4 flex space-x-6">
                            <a className="text-blue-700 hover:text-blue-900" href="https://in.linkedin.com/company/kshitiksha-foundation" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin size={24} />
                            </a>
                            <a className="text-blue-600 hover:text-blue-800" href="https://www.facebook.com/p/Kshitiksha-Foundation-100079763515404/" target="_blank" rel="noopener noreferrer">
                                <BsFacebook size={24} />
                            </a>
                            <a className="text-blue-400 hover:text-blue-600" href="https://twitter.com/KshitikshaF" target="_blank" rel="noopener noreferrer">
                                <BsTwitter size={24} />
                            </a>
                            <a className="opacity-85 hover:opacity-100" href="https://www.instagram.com/kshitikshafoundation/?hl=en" target="_blank" rel="noopener noreferrer">
                                <img src={ig} alt="" className='w-[24px] h-[24px]' />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Groupmember