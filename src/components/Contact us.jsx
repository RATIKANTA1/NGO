import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import MyFooter from './MyFooter'

const Contact = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex flex-col'>
                <div className='flex flex-1 flex-col md:flex-row justify-around items-center bg-[#FFFF80] p-4 md:p-24'>
                    <div className='w-full md:w-1/3 p-4'>
                        <h1 className='text-2xl font-serif font-bold text-center mb-5 underline'>Contact Us</h1>
                        <p className=' md:block text-sm md:text-xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur consequuntur, doloremque ab ipsa maxime tempora aut rerum tempore magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur consequuntur, doloremque ab ipsa maxime tempora aut rerum tempore magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur consequuntur, doloremque ab ipsa maxime tempora aut rerum tempore magni.</p>
                        <p className='text-sm md:text-xl font-semibold my-2'>Email: email@gmail.com</p>
                        <p className='text-sm md:text-xl font-semibold my-2'>Mobile: +91 000000000</p>
                    </div>
                    <div className='w-full md:w-1/3 bg-white p-8 rounded-lg'>
                        <form action="#" method="POST" className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                                <input type="text" id="name" name="name" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                                <input type="email" id="email" name="email" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
                            </div>
                            <div>
                                <label htmlFor="mobile" className='block text-sm font-medium text-gray-700'>Mobile</label>
                                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="mobile" name="mobile" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                                <textarea id="message" name="message" rows="4" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required></textarea>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}

export default Contact
