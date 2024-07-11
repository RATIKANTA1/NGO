import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div  className='w-screen bg-gray-50 h-screen'>


           <Link to={"/"} className='text-2xl pointer underline hover:text-green-500'>Back to home</Link>
      
        <div className='grid lg:grid-cols-2 md:grid-cols-2  gap-x-10 md:p-10 bg-[#FFFF80] h-full'>
       <div className='flex-col'>
            <h1 className='text-2xl font-serif font-bold text-center mb-5 underline'>Contact Us</h1>

             <p className='sm:text-sm lg:text-xl font-semibold sm:leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur consequuntur, doloremque ab ipsa maxime tempora aut rerum tempore magni.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur consequuntur, doloremque ab ipsa maxime tempora aut rerum tempore magni.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A pariatur consequuntur, doloremque ab ipsa maxime tempora aut rerum tempore magni.</p>
             <p className='sm:text-sm md:text-xl font-semibold my-2 '>Email:email@gmail.com</p>
              
              <p className=' sm:text-sm md:text-xl font-semibold my-2'>Mobile:+91 000000000</p>
              
              <p className='sm:text-sm md:text-xl font-semibold my-2'>Email:email@gmail.com</p>


       </div>

 <div class="max-w-md w-full bg-white p-8 rounded-lg  md:h-[80%]">
        <form action="#" method="POST" class="space-y-4">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
            </div>
            <div>
                <label for="mobile" class="block text-sm font-medium text-gray-700">Mobile</label>
                <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="mobile" name="mobile" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required/>
            </div>
            <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
            </div>
            <div class="text-center">
                <button type="submit" class="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Send Message
                </button>
            </div>
        </form>
         </div> 
           

        </div>



    </div>
  )
}

export default Contact

{/**/}