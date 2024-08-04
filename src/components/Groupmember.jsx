import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const Groupmember = () => {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    return (
        <div className='md:px-14 px-4 py-8 max-w-screen-2xl mx-auto' id='group'>
            <div className='mt-3 md:w-1/2 mx-auto text-center' data-aos="zoom-out-up" data-aos-duration="1000" data-aos-offset="170" data-aos-easing="ease-in-out">
                <h2 className='text-4xl text-gray-500 font-semibold mb-2'>Team Members</h2>
                {/* <p className='text-gray-500 '>We have been working with some fortune 500+ clients</p> */}
            </div>

            <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-500 hover:scale-105 hover:shadow-xl"
                    data-aos="zoom-out-up">
                    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </div>
                        <div class="p-6 text-center">
                            <h5 className="mb-1 text-xl font-medium text-gray-700 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-500 hover:scale-105 hover:shadow-xl"
                    data-aos="zoom-out-up">
                    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </div>
                        <div class="p-6 text-center">
                            <h5 className="mb-1 text-xl font-medium text-gray-700 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-500 hover:scale-105 hover:shadow-xl"
                    data-aos="zoom-out-up">
                    <div class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
                        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                            <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
                        </div>
                        <div class="p-6 text-center">
                            <h5 className="mb-1 text-xl font-medium text-gray-700 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="text-end mt-4 text-blue-700">
                <button onClick={toggleVisibility}>
                    <Link to={"/moremember"}>{visibility ? 'Show Less...' : 'Show More...'}</Link>

                </button>
            </div>



        </div>
    )
}

export default Groupmember