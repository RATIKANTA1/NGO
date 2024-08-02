import React from 'react'

const Location = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center ' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Reach Us</h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>
                    ADDRESS: 303, Block 12, HIG Apartments, Omicron I, Greater Noida, Mathurapur, Uttar Pradesh 201310</p>
            </div>
            <div className="relative w-full h-96">
                <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13336.104361786427!2d77.5633748!3d28.4621309!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbff815555555%3A0x2c0ea01fb95108ca!2sKshitiksha%20Foundation!5e1!3m2!1sen!2sin!4v1722580555272!5m2!1sen!2sin" 
                width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

export default Location