import React from 'react'

const Services = () => {
    const services = [
        { id: 1, title: "Manager", name: "Ratikanta Behera", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/profile.png" },
        { id: 2, title: "National Association", name: "Name", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/slogo.png" },
        { id: 3, title: "Clubs and Groups", name: "Name", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/slogo.png" },

    ]
    return (

        <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-gray-100' id='service'>

            <div className='mt-3 md:w-1/2 mx-auto text-center' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-2'>Our Features</h2>
                <p className='text-gray-500 '>We have been working with some fortune 500+ clients</p>
            </div>
            <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id} data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"
                        className='max-w-sm text-center  mx-auto overflow-hidden rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full '>
                        {/* <div >
                          <div className='bg-[#E8F5E9] mb-4 h-20 w-20 mx-auto rounded-tl-3xl rounded-br-3xl '>
                              <img src={service.image} alt='skb' className='-ml-5' />
                          </div>
                           <h4 className='text-2xl font-bold text-gray-500 mb-2 px-2'>{service.title}</h4>
                           <p className='text-sm text-gray-500'>{service.description}</p>
                      </div> */}

                        <div className=" bg-white rounded-tl-3xl rounded-br-3xl">
                            <div className="flex items-center justify-center p-6">
                                <img className="w-24 h-24 rounded-full" src={service.image} alt="Profile Picture" />
                            </div>
                            <div className="p-6 text-center">
                                <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
                                <p className="text-gray-600 mt-2">{service.title}</p>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                                {/* <div className="mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none">Follow</button>
            </div> */}
                            </div>
                        </div>

                    </div>)}


            </div>
        </div>
    )
}

export default Services