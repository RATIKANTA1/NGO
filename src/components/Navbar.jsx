

// import { Avatar, Dropdown, Navbar } from "flowbite-react";
// import AboutMenu from "./DropDown";

// export default function Component() {
//   return (
//     <Navbar fluid rounded >
//       <Navbar.Brand href="#">
//         <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="NGO-Logo" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse >
//         <Navbar.Link href="#" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link href="#">{<AboutMenu/>}</Navbar.Link>
//         <Navbar.Link href="">Blog</Navbar.Link>
//         <Navbar.Link href="#">Pricing</Navbar.Link>
//         <Navbar.Link href="#">Contact</Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

import React from 'react'
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'
const Navbar = () => {
    const navItems=[
        {link:"Home",path:"home"},
        {link:"About",path:"about"},
        {link:"Our Member",path:"service"},
        {link:"Blog",path:"Blog"},
        {link:"Gallery",path:"gallery"},
        {link:"Join Us",path:"joinus"},
    ];
    const dropdown=[
        {link:"Dashbord",path:"dashbord"},
        {link:"Setting",path:"Setting"},
        {link:"Signout",path:"signout"},
    ];
  return (
    
    <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={logo} class="h-11 w-11" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kshitiksha Foundation</span>
            </a>
            <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {
                    navItems.map(({link,path}) => <Link to={path} spy={true} smooth={true} key={path}
                        offset={-100} className='block text-base text-gray-900 hover:text-green-700 first:font-medium cursor-pointer'> 
                        {link}</Link>)
                }
            </ul>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar


// import { MegaMenu, Navbar } from 'flowbite-react';
// import { HiArrowRight, HiChevronDown } from 'react-icons/hi';

// export default function Component() {
//   return (
//     <MegaMenu>
//       <Navbar.Brand href="/">
//         <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//       <Navbar.Collapse>
//         <Navbar.Link href="/Home">Home</Navbar.Link>
//         <MegaMenu.DropdownToggle>
//           Company
//           <HiChevronDown className="ml-2" />
//         </MegaMenu.DropdownToggle>
//         <Navbar.Link href="/">Marketplace</Navbar.Link>
//         <Navbar.Link href="/">Resources</Navbar.Link>
//         <Navbar.Link href="/">Contact</Navbar.Link>
//       </Navbar.Collapse>
//       <MegaMenu.Dropdown>
//         <div className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
//           <ul className="space-y-4 sm:mb-4 md:mb-0">
//             {/* <li>
//               <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
//                 Online Stores
//               </a>
//             </li> */}
//             <li>
//               <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
//                 Segmentation
//               </a>
//             </li>
//             {/* <li>
//               <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
//                 Marketing CRM
//               </a>
//             </li> */}
//             {/* <li>
//               <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
//                 Online Stores
//               </a>
//             </li> */}
//           </ul>
//           <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
//             <li>
//               <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
//                 Our Blog
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
//                 Terms & Conditions
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
//                 License
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
//                 Resources
//               </a>
//             </li>
//           </ul>
//           <div className="mt-4 md:mt-0">
//             <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
//             <p className="mb-2 text-gray-500 dark:text-gray-400">
//               At Flowbite, we have a portfolio of brands that cater to a variety of preferences.
//             </p>
//             <a
//               href="#"
//               className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
//             >
//               Explore our brands
//               <span className="sr-only">Explore our brands</span>
//               <HiArrowRight className="ml-2" />
//             </a>
//           </div>
//         </div>
//       </MegaMenu.Dropdown>
//     </MegaMenu>
//   );
// }

