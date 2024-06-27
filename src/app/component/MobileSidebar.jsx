import { useState } from 'react';
import { motion } from 'framer-motion';
import { XPLogo } from '../icons';

const MobileSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden ml-auto">
            <button onClick={toggleMenu} className="navbar-burger flex items-center p-3
        bg-rose-600 rounded-full size-10
        text-white hover:text-rose-500">

                {isOpen ?

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='size-6 fill-white' >
                        <path
                            d="M9.15625 6.3125L6.3125 9.15625L22.15625 25L6.21875 40.96875L9.03125 43.78125L25 27.84375L40.9375 43.78125L43.78125 40.9375L27.84375 25L43.6875 9.15625L40.84375 6.3125L25 22.15625Z"

                        />
                    </svg>



                    :

                    <svg
                        className='size-4 fill-white'
                        width={26}
                        height={13}
                        viewBox="0 0 26 13"
                    >
                        <rect width={26} height={2.5} rx={2} />
                        <rect y={9} width={26} height={2.5} rx={2} />
                    </svg>
                }

            </button>


            {isOpen && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: isOpen ? 0 : '-100%' }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden  bg-white dark:bg-xp-color absolute border-r-2 border-rose-600 left-0 top-0 w-9/12 h-screen z-[1000]"
                >
                    <div className='flex justify-center items-center'>

                        <ul className='mx-3 mt-10 flex flex-col gap-y-4 justify-center items-center w-7/12'>
                            <XPLogo className={` dark:fill-white fill-rose-500 w-[10rem]`} />

                            <li className='hover:text-rose-600 text-sm sm:text-base hover:bg-white text-white bg-rose-500 flex justify-around gap-x-2 rounded-md  py-2.5 px-2 w-full cursor-pointer shadow-lg hover:shadow-inner hover:shadow-rose-500/50'>
                                Escorts




                            </li>

                            <li className='hover:text-rose-600 text-sm sm:text-base hover:bg-white text-white bg-rose-500 flex justify-around gap-x-2 rounded-md  py-2.5 px-2 w-full cursor-pointer shadow-lg hover:shadow-inner hover:shadow-rose-500/50'>
                                Casual encounters



                            </li>

                            <li className='hover:text-rose-600 text-sm sm:text-base hover:bg-white text-white bg-rose-500 flex justify-around gap-x-2 rounded-md  py-2.5 px-2 w-full cursor-pointer shadow-lg hover:shadow-inner hover:shadow-rose-500/50'>
                                Find your match



                            </li>

                            <li className='hover:text-rose-600 text-sm sm:text-base hover:bg-white text-white bg-rose-500 flex justify-around gap-x-2 rounded-md  py-2.5 px-2 w-full cursor-pointer shadow-lg hover:shadow-inner hover:shadow-rose-500/50'>
                                Hookups
                            </li>

                            <li className='hover:text-rose-600 text-sm sm:text-base hover:bg-white text-white bg-rose-500 flex justify-around gap-x-2 rounded-md  py-2.5 px-2 w-full cursor-pointer shadow-lg hover:shadow-inner hover:shadow-rose-500/50'>
                                Bookings
                            </li>





                            <div className='mt-15'></div>

                            <a href="#" className="w-full text-center  py-2 px-3 border-2 bg-white text-rose-600 border-rose-500 hover:bg-rose-500 hover:text-white transition-transform hover:scale-95  dark:hover:bg-xp-color rounded-full">
                                <span className="text-sm font-bold">Sign in</span>
                            </a>

                            <a href="#" className="w-full text-center py-2 px-3 border-2 bg-white text-rose-600 border-rose-500 hover:bg-rose-500 hover:text-white transition-transform hover:scale-95  dark:hover:bg-xp-color rounded-full">
                                <span className="text-sm font-bold">Be a member</span>
                            </a>
                        </ul>
                    </div>

                </motion.div>
            )}

        </div>

    );
};

export default MobileSidebar;
