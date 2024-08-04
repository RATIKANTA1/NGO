import React from 'react'
import Navbar from './Navbar'
import MyFooter from './MyFooter'
const Aboutmore = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-full min-h-screen bg-gray-100'>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2018/10/15/12/27/wormwood-some-competition-3748855_640.jpg" alt="Mission Image" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="flex flex-col justify-center text-center md:text-left">
                            <h2 className="text-2xl font-bold mb-4">Mission</h2>
                            <p className="text-gray-700 mb-4">
                                This is a sample text content that accompanies the image. It provides some details about the image and any additional information that is relevant.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg">
                        <div>
                            <img src="https://cdn.pixabay.com/photo/2018/10/15/12/27/wormwood-some-competition-3748855_640.jpg" alt="Vision Image" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="flex flex-col justify-center text-center md:text-left">
                            <h2 className="text-2xl font-bold mb-4">Vision</h2>
                            <p className="text-gray-700 mb-4">
                                This is a sample text content that accompanies the image. It provides some details about the image and any additional information that is relevant.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter></MyFooter>
        </>
    )
}


export default Aboutmore
