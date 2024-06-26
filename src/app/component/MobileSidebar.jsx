// components/Navbar.js
import { useState } from 'react';
import { motion } from 'framer-motion';

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl">Brand</div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white">
                        Home
                    </a>
                    <a href="#" className="text-white">
                        About
                    </a>
                    <a href="#" className="text-white">
                        Services
                    </a>
                    <a href="#" className="text-white">
                        Contact
                    </a>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    className="md:hidden bg-gray-800"
                >
                    <a href="#" className="block text-white px-4 py-2">
                        Home
                    </a>
                    <a href="#" className="block text-white px-4 py-2">
                        About
                    </a>
                    <a href="#" className="block text-white px-4 py-2">
                        Services
                    </a>
                    <a href="#" className="block text-white px-4 py-2">
                        Contact
                    </a>
                </motion.div>
            )}
        </nav>
    );
};

export default MobileSidebar;
