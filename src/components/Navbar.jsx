

// import { Avatar, Dropdown, Navbar } from "flowbite-react";
// import AboutMenu from "./DropDown";

// export default function Component() {
//   return (
//     <Navbar fluid rounded>
//       <Navbar.Brand href="https://flowbite-react.com">
//         <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
//         <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
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


import { MegaMenu, Navbar } from 'flowbite-react';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';

export default function Component() {
  return (
    <MegaMenu>
      <Navbar.Brand href="/">
        <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/Home">Home</Navbar.Link>
        <MegaMenu.DropdownToggle>
          Company
          <HiChevronDown className="ml-2" />
        </MegaMenu.DropdownToggle>
        <Navbar.Link href="/">Marketplace</Navbar.Link>
        <Navbar.Link href="/">Resources</Navbar.Link>
        <Navbar.Link href="/">Contact</Navbar.Link>
      </Navbar.Collapse>
      <MegaMenu.Dropdown>
        <div className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul className="space-y-4 sm:mb-4 md:mb-0">
            {/* <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Online Stores
              </a>
            </li> */}
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Segmentation
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Marketing CRM
              </a>
            </li> */}
            {/* <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Online Stores
              </a>
            </li> */}
          </ul>
          <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                License
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Resources
              </a>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              At Flowbite, we have a portfolio of brands that cater to a variety of preferences.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Explore our brands
              <span className="sr-only">Explore our brands</span>
              <HiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </MegaMenu.Dropdown>
    </MegaMenu>
  );
}

