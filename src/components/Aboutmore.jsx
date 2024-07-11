import React from 'react'
import { Link } from 'react-router-dom'
 import { Card } from 'flowbite-react'
const Aboutmore = () => {
  return (
    <div className='w-full h-[180vh]  bg-gray-100 '>
                <Link to={"/"}><p className='text-xl text-center font-semibold hover:bg-green-200'>Back to home</p></Link>

                <div class="container mx-auto p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg">
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/10/15/12/27/wormwood-some-competition-3748855_640.jpg" alt="Placeholder Image" class="w-full h-auto rounded-lg"/>
            </div>
            <div class="flex flex-col justify-center text-center">
                <h2 class="text-2xl font-bold mb-4 text-center">Mission</h2>
                <p class="text-gray-700 mb-4">This is a sample text content that accompanies the image. It provides some details about the image and any additional information that is relevant.
                This is a sample text content that accompanies the image. It provides some details about the image and any additional information that is relevant.
                This is a sample text content that accompanies the image. It provides some details about the image and any additional information that is relevant.
                </p>
                
            </div>
        </div>
          </div>    
          
          
           <div class="container mx-auto p-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg">
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/10/15/12/27/wormwood-some-competition-3748855_640.jpg" alt="Placeholder Image" class="w-full h-auto rounded-lg"/>
            </div>
            <div class="flex flex-col justify-center items-start">
                <h2 class="text-2xl font-bold mb-4">Vision</h2>
                <p class="text-gray-700 mb-4">This is a sample text content that accompanies the image. It provides some details about the image and any additional information that is relevant.
                This is a sample text content that accompanies the image. It provides some details about the image and any additional information that is relevant.
                This is a sample text content that accompanies the image. It provides some details about the image and any additional information that is relevant.
                This is a sample text content that accompanies the image. It provides some details about the image and any additional information that is relevant.
                </p>
              
            </div>
        </div>
          </div>

  
    </div>
  )
}
  

export default Aboutmore
