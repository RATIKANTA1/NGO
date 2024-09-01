import React from 'react'
import { IoIosArrowUp } from 'react-icons/io';
import { useState, useEffect } from 'react';

const Scrolltop = () => {
     const [isVisible, setIsVisible] = useState(false);

     const toggleVisibility = () => {
          if (window.scrollY > 400) {
               setIsVisible(true);
          } else {
               setIsVisible(false);
          }
     };

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth'
          });
     };

     useEffect(() => {
          window.addEventListener('scroll', toggleVisibility);
          return () => {
               window.removeEventListener('scroll', toggleVisibility);
          };
     }, []);
     return (
          <div className="fixed bottom-5 right-5">
               {isVisible && (
                    <button
                         type="button"
                         onClick={scrollToTop}
                         className="bg-gray-500 text-white p-3 rounded-full shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition-all duration-300">
                         <IoIosArrowUp className='text-white' />
                    </button>
               )}
          </div>
     )
};



export default Scrolltop
