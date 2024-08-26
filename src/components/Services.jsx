import React from 'react';
import env1 from '../assets/env1.png';
import animal from '../assets/animal.png';
import women from '../assets/women.png';

const Services = () => {
    const services = [
        { id: 1, title: "Manager", name: "Promote Enviornmental Conservation", description: "Sustain the earth, secure our legacy: support environmental conservation efforts.", image: env1 },
        { id: 2, title: "National Association", name: "Care for Stray Animals", description: "Stray animals need our kindness: caring for them is a step towards a more humane and loving society.", image: animal },
        { id: 3, title: "Clubs and Groups", name: "Women Empowerment", description: "When women rise, society rises: empower women to create transformative change and unlock limitless possibilities.", image: women },

    ]
    return (

        <div className='px-4 md:px-14  py-12 max-w-screen-2xl mx-auto bg-gray-100' id='service'>
            <div className='md:w-1/2 mx-auto text-center' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-2'>Our Services</h2>
                <p className='text-gray-500 '>we are dedicated to making a positive impact through our comprehensive range of services. Each service is designed to address specific needs and foster meaningful change. </p>
            </div>

            <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => <div key={service.id} data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out"
                        className='max-w-sm text-center  mx-auto overflow-hidden rounded-md shadow cursor-pointer hover:translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full '>
                        <div className=" bg-white rounded-tl-3xl rounded-br-3xl">
                            <div className="flex items-center justify-center p-6">
                                <img className="w-24 h-24 rounded-full" src={service.image} alt="Profile Picture" />
                            </div>
                            <div className="p-6 text-center">
                                <h2 className="text-xl font-semibold text-gray-800">{service.name}</h2>
                                <p className="text-gray-600 mt-2">{service.description}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Services