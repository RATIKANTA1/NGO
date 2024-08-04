import React from 'react'

const Location = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center ' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Reach Us</h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>
                    ADDRESS: Plot No. 19/20, IIMT Ladder Business Foundation, Knowledge Park III, Greater Noida, Uttar Pradesh - 201310</p>
            </div>
            <div className="relative w-full h-96">
                <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0059784990217!2d77.48885299999999!3d28.479366600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea1ccbf49ea7%3A0x4037ede1a275b2af!2sIIMT%20Ladder%20Business%20Foundation!5e0!3m2!1sen!2sin!4v1722706670001!5m2!1sen!2sin" 
                width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

export default Location