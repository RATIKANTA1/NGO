import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import g from '../assets/g.png';
import g1 from '../assets/g1.jpg';
import g2 from '../assets/g2.jpg';
import g3 from '../assets/g3.jpg';
import g4 from '../assets/g4.jpg';
import g5 from '../assets/g5.png';

const Gallery = () => {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='gallery'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Gallery
                </h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>
                Explore Our Journey in Environmental Sustainability, Women's Empowerment, and Community Development Initiatives: Discover the stories, projects, and successes that showcase our commitment to fostering sustainable practices, uplifting women, and transforming communities for a brighter, greener future.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-8">
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src={g} alt="g1" />
                </div>
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src={g1} alt="" />
                </div>
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src={g2} alt="" />
                </div>
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src={g3} alt="" />
                </div>
                <div className=' hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src={g4} alt="g4" />
                </div>
                <div className='hover:blur-none'>
                    <img className="h-auto max-w-full rounded-lg hover:scale-95"
                        src={g5} alt="g5" />
                </div>
                
            </div>
            <div className="text-end mt-4 text-blue-700">
                <button onClick={toggleVisibility}>
                    <Link to={"/moregallery"}>{visibility ? 'Back' : 'More'}</Link>
                    
                </button>
            </div>
        </div>
    );
};

export default Gallery;
