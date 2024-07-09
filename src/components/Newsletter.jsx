import React from 'react'
import { Handshake } from 'lucide-react'
const Newsletter = () => {
    return  <>
    
               
        <div className='px-4  max-w-screen-2xl md:h-[70vh] mx-auto bg-gray-100 '>

            {/* <div>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                    Pellentesque suscipite libero eu</h2>
                <div className='flex items-center justify-center gap=8'>
                    <button className='btn-primary text-white'>Get a Demo</button>
                </div>
            </div>
        </div> */}
                  





            <div className=' w-full h-full flex sm:flex-wrap items-center justify-center  bg-neutral-300'>
                <div className=' sm:w-1/4 md:w-1/3 md:h-full  mr-10'>
                    <h2>hello</h2>
                </div>

                <div className='sm:w-1/4 md:w-1/2 md:h-full border-l-4 border-indigo-500 flex justify-between items-center px-10 flex-col'>

                    <h2 className='text-4xl mt-6 font-serif'>Join us </h2>
                    <div className='flex justify-between items-center h-[90%] w-full'>

                        <div className='w-1/2 h-[70%] flex flex-col items-center'>

                            <img src="https://img.freepik.com/premium-vector/volunteer-trash-clean-up-logo-template-design-vector-emblem-design-concept-creative-symbol-icon_316488-975.jpg?w=740" className="w-[60%] h=[60%] rounded-md" alt="internship" />

                            <a href="#" className='text-xl text-white border-2 px-2 py-3 bg-blue-500 rounded-md my-2'>Volunteer</a>
                        </div>


                        <div className='w-1/2 h-[70%] ml-4 flex flex-col items-center '>
                            <img src="../src/assets/intern.jpg" className="w-[60%] h=[60%]border-2  rounded-md " alt="internship" />

                            <a href="#" className='text-xl text-white border-2 px-2 py-3 bg-blue-500 rounded-md my-2'>Intership</a>
                        </div>

                    </div>
                </div>
            </div>





        </div>
    
    </>
         
    
}

export default Newsletter