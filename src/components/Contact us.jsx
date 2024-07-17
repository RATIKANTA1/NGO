import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import MyFooter from './MyFooter'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "fc2bb99f-eb8d-4c4b-98a5-eb8ee0ffcb51");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
          
        event.target.reset();
        //for pop up
        Swal.fire({
            title: 'Success',
            text: 'Message successfully sent',
            icon: 'success',
            confirmButtonColor:'#3085d6',
             footer:'<a href="/">Go to Home</a>'
          });


      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };





    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex flex-col'>
                <div className='flex flex-1 flex-col md:flex-row justify-around items-center bg-gray-100 p-4 md:p-24'>
                    <div className='w-full md:w-1/3 p-4'>
                        <h1 className='text-4xl text-gray-500 font-semibold text-center mb-5 '>Contact Us</h1>
                        <p className=' md:block text-sm md:text-xl font-semibold text-justify text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur consequuntur, doloremque ab ipsa maxime tempora aut rerum tempore magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur consequuntur, doloremque ab ipsa maxime tempora aut rerum tempore magni. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur consequuntur, doloremque ab ipsa maxime tempora aut rerum tempore magni.</p>
                        <p className='text-sm md:text-xl font-semibold my-2 text-gray-500'>Email: email@gmail.com</p>
                        <p className='text-sm md:text-xl font-semibold my-2 text-gray-500'>Mobile: +91 000000000</p>
                    </div>
                    <div className='w-full md:w-1/3 bg-white p-8 rounded-lg'>
                        <form onSubmit={onSubmit} className='space-y-4'>
                       
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
                                <input type="tel" id="mobile" name="mobile" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
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
