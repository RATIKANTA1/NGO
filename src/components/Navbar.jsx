import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import grain from '../assets/logo2.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navItems = [
        { link: "Home", path: "home" },
        { link: "About", path: "about" },
        { link: "Our Member", path: "service" },
        { link: "Blog", path: "blog" },
        { link: "Gallery", path: "gallery" },
        { link: "Connect Us", path: "connectus" },
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (path) => {
        if (location.pathname !== '/' && location.pathname !== '/home') {
            navigate(`/?section=${path}`);
        }
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 sticky top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <RouterLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={grain} className="h-10" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kshitiksha Foundation</span>
                </RouterLink>
                <button
                    onClick={handleToggle}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-dropdown"
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                    <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navItems.map(({ link, path }) => (
                            location.pathname === '/' || location.pathname === '/home' ? (
                                <ScrollLink
                                    key={path}
                                    to={path}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    className="block text-base py-2 text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-white md:hover:text-white first:font-medium cursor-pointer rounded md:rounded hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 ease-in-out hover:px-4 md:hover:px-2"
                                    onClick={handleToggle}
                                >
                                    {link}
                                </ScrollLink>
                            ) : (
                                <div
                                    key={path}
                                    className="block text-base py-2 text-gray-900 dark:text-gray-300 hover:text-white dark:hover:text-white md:hover:text-white first:font-medium cursor-pointer rounded md:rounded hover:bg-green-500 dark:hover:bg-green-500 transition-all duration-300 ease-in-out hover:px-4 md:hover:px-2"
                                    onClick={() => handleNavClick(path)}
                                >
                                    {link}
                                </div>
                            )
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
