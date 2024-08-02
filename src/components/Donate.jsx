import React from 'react'

const Donate = () => {
    return (
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
            <div className='text-center md:w-3/4 mx-auto flex flex-col items-center ' data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-4'>
                    Donate for Those in Need</h2>
                <p className='md:w-3/4 text-sm text-gray-500 mb-8 text-center'>Your support has the power to change lives.
                    Whether it's offering food, shelter, medical assistance, or education, every contribution counts. Your generosity
                    makes a meaningful difference in the lives of those in need.</p>
            </div>

            <section id="Projects" data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl " >
                    <img src="./src/assets/env2.jpg"
                        alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Enviornmental Safety</p>
                        <div className="flex items-center justify-center">
                            <button className='btn-primary'>Donate</button>
                        </div>
                    </div>
                </div>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                    <img src="./src/assets/strayanimal.jpg"
                        alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Animals Safety</p>
                        <div className="flex items-center justify-center">
                            <button className='btn-primary'>Donate</button>
                        </div>
                    </div>
                </div>
                <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" >
                    <img src="./src/assets/women1.png"
                        alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-72">
                        <p className="text-lg font-bold text-black truncate block capitalize mb-2 text-center">Girls Education</p>
                        <div className="flex items-center justify-center">
                            <button className='btn-primary'>Donate</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Donate