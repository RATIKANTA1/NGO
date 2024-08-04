import React from 'react'
import Navbar from './Navbar'
import MyFooter from './MyFooter'
import Swal from 'sweetalert2'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "fc2bb99f-eb8d-4c4b-98a5-eb8ee0ffcb51");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");

            event.target.reset();
            //for pop up
            Swal.fire({
                title: 'Success',
                text: 'Message successfully sent',
                icon: 'success',
                confirmButtonColor: '#3085d6',
                footer: '<a href="/">Go to Home</a>'
            });


        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 flex flex-col'>
                <div className='flex flex-1 flex-col justify-around items-center bg-orange-50 p-4 md:p-12'>
                    <h1 className='text-4xl text-gray-500 font-semibold text-center mb-5 '>Contact Us</h1>

                    {/* images */}

                    <div className='w-full md:w-1/3 bg-white p-8 rounded-lg'>
                        <form onSubmit={onSubmit} className='space-y-4'>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                                <input type="text" id="name" name="name" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                                <input type="email" id="email" name="email" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
                            </div>
                            <div>
                                <label htmlFor="mobile" className='block text-sm font-medium text-gray-700'>Mobile</label>
                                <input type="tel" id="mobile" name="mobile" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                                <textarea id="message" name="message" rows="4" className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' required></textarea>
                            </div>
                            <div className='text-center'>
                                <button type="submit" className='w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row justify-around'>
                <div className='w-full md:w-2/5 p-4 md:p-[2.5rem]'>
                    <h1 className='text-4xl text-gray-500 font-semibold text-center mb-5 '>Contact Us</h1>
                    <div className='inline-flex items-center '>
                        <MdOutlineLocationOn className="text-red-600 mr-4 md:mr-5 text-[2.6rem] md:text-[2rem]" />
                        <p className="text-base md:text-base font-semibold my-2 text-gray-500 ">
                            Address : Plot No. 19/20, IIMT Ladder Business Foundation, Knowledge Park III, Greater Noida, Uttar Pradesh - 201310</p>
                    </div>
                    <div className='inline-flex items-center'>
                        <MdOutlineEmail className="text-red-600 mr-4 text-base md:text-[1.5rem]" />
                        <p className="text-base md:text-base font-semibold my-2 text-gray-500 ">
                            Email Id : deepak.kumarssnwa@gmail.com</p>
                    </div>
                    <div className='inline-flex items-center'>
                        <MdCall className="text-red-600 mr-4 text-base md:text-[1.5rem]" />
                        <p className="text-base md:text-base font-semibold my-2 text-gray-500 ">
                            Phone No. : +91 7848978256</p>
                    </div>

                </div>
                <div className="relative w-full md:w-3/5 h-96">
                    <iframe className="absolute top-0 left-0 w-full h-full p-4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0059784990217!2d77.48885299999999!3d28.479366600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea1ccbf49ea7%3A0x4037ede1a275b2af!2sIIMT%20Ladder%20Business%20Foundation!5e0!3m2!1sen!2sin!4v1722706670001!5m2!1sen!2sin"
                        width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <MyFooter />
        </div>
    )
}

export default Contact
