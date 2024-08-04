import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyFooter from './MyFooter';
import Navbar from './Navbar';

const MoreGallery = () => {
    const [visibility, setVisibility] = useState(true);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    return (
        <>
        <Navbar></Navbar>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='gallery'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Gallery
                </h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>
                    Your support has the power to change lives. Whether it's offering food, shelter, medical assistance, or education, every contribution counts. Your generosity makes a meaningful difference in the lives of those in need.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-8">
            <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover-scale-95"
                        src="/src/assets/g1.jpg" alt="g1" />
                </div>
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src="/src/assets/g.png" alt="" />
                </div>
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src="/src/assets/g2.jpg" alt="" />
                </div>
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src="/src/assets/g3.jpg" alt="" />
                </div>
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src="/src/assets/g4.jpg" alt="g4" />
                </div>
                <div className='hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src="/src/assets/g5.png" alt="g5" />
                </div>

                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src="/src/assets/g6.png" alt="g6" />
                </div>
                 <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src="/src/assets/blog2.jfif" alt="g7" />
                </div>
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" alt="" />
                </div>


            </div>
            <div className="text-end mt-4 text-blue-700">
                <button >
                    <Link to="/?section=gallery">{visibility ? 'Back...' : ' More...'}</Link>
                </button>
            </div>

        </div>
        <MyFooter></MyFooter>
        </>
    );
}

export default MoreGallery;
