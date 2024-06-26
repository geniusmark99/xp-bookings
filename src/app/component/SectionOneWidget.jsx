'use client';
import React, { useState } from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import MobileSidebar from './MobileSidebar';

export default function SectionOneWidget() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="pb-12 md:pb-24 lg:pb-32 bg-xp-color">
            <nav className="relative px-4 lg:px-16 py-9">
                <div className="flex items-center">
                    <a className="inline-block text-lg font-bold" href="#">
                        <Image
                            className="size-4 md:size-10"
                            src="./xp-logo.svg"
                            alt="XP-bookings Logo"
                            width={200}
                            height={200}
                            style={{ width: "auto", height: "auto" }}

                        />
                    </a>
                    <div className="lg:hidden ml-auto">
                        <button onClick={toggleMenu} className="navbar-burger flex items-center p-3 text-white hover:text-rose-500">

                            {isOpen ?
                                <div className='rounded-full size-6 bg-rose-500 flex justify-center items-center'>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className='size-4 fill-white'>
                                        <path
                                            d="M9.15625 6.3125L6.3125 9.15625L22.15625 25L6.21875 40.96875L9.03125 43.78125L25 27.84375L40.9375 43.78125L43.78125 40.9375L27.84375 25L43.6875 9.15625L40.84375 6.3125L25 22.15625Z"

                                        />
                                    </svg>
                                </div>


                                :

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='size-6 fill-gray-300'>
                                    <path
                                        d="M6 9 A 2.0002 2.0002 0 1 0 6 13L42 13 A 2.0002 2.0002 0 1 0 42 9L6 9 z M 6 22 A 2.0002 2.0002 0 1 0 6 26L42 26 A 2.0002 2.0002 0 1 0 42 22L6 22 z M 6 35 A 2.0002 2.0002 0 1 0 6 39L42 39 A 2.0002 2.0002 0 1 0 42 35L6 35 z"

                                    />
                                </svg>
                            }

                        </button>


                        {isOpen && (
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: isOpen ? 0 : '-100%' }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden bg-xp-color absolute border-r-2 border-rose-600 left-0 top-0 w-6/12 h-screen z-[1000]"
                            >
                                <ul className='mx-3 mt-10 flex flex-col gap-y-4 text-white'>
                                    <li className='hover:text-rose-600 hover:bg-white text-white bg-rose-500 flex justify-around gap-x-2 rounded-md  py-2.5 px-2 w-full text-xp-color cursor-pointer shadow-lg'>
                                        For men

                                        <svg
                                            className="fill-current size-6"
                                            width={18}
                                            height={41}
                                            viewBox="0 0 18 41"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15 0.750188C15 0.750188 15.6716 0 16.5 0C17.3284 0 18 0.680884 18 1.50038C18 2.91059 15.7906 4.52084 15.1639 4.94909C15.0646 5.01697 14.9354 5.01697 14.8361 4.94909C14.2094 4.52084 12 2.91059 12 1.50038C12 0.680884 12.6716 0 13.5 0C14.3284 0 15 0.750188 15 0.750188Z"
                                            />
                                            <path
                                                d="M6.00012 0C4.93926 0 3.92184 0.421427 3.1717 1.17157C2.42155 1.92172 2.00012 2.93913 2.00012 4C2.00012 5.06087 2.42155 6.07828 3.1717 6.82843C3.92184 7.57857 4.93926 8 6.00012 8C7.06099 8 8.0784 7.57857 8.82855 6.82843C9.57869 6.07828 10.0001 5.06087 10.0001 4C10.0001 2.93913 9.57869 1.92172 8.82855 1.17157C8.0784 0.421427 7.06099 0 6.00012 0ZM5.50012 10C2.48035 10 0.00012333 12.4802 0.00012333 15.5V27C-0.00389563 27.3135 0.0904005 27.6203 0.269763 27.8775C0.449126 28.1346 0.704541 28.3291 1.00012 28.4336V38.5C0.997312 38.6988 1.03403 38.8961 1.10816 39.0806C1.18228 39.265 1.29232 39.4329 1.43188 39.5745C1.57145 39.716 1.73776 39.8284 1.92114 39.9051C2.10453 39.9819 2.30134 40.0214 2.50012 40.0214C2.69891 40.0214 2.89572 39.9819 3.0791 39.9051C3.26249 39.8284 3.4288 39.716 3.56836 39.5745C3.70793 39.4329 3.81797 39.265 3.89209 39.0806C3.96621 38.8961 4.00293 38.6988 4.00012 38.5V28H8.00012V38.5C7.99731 38.6988 8.03403 38.8961 8.10816 39.0806C8.18228 39.265 8.29232 39.4329 8.43188 39.5745C8.57145 39.716 8.73776 39.8284 8.92114 39.9051C9.10453 39.9819 9.30134 40.0214 9.50012 40.0214C9.69891 40.0214 9.89572 39.9819 10.0791 39.9051C10.2625 39.8284 10.4288 39.716 10.5684 39.5745C10.7079 39.4329 10.818 39.265 10.8921 39.0806C10.9662 38.8961 11.0029 38.6988 11.0001 38.5V28.4336C11.2957 28.3291 11.5511 28.1346 11.7305 27.8775C11.9098 27.6203 12.0041 27.3135 12.0001 27V15.5C12.0001 12.4802 9.5199 10 6.50012 10H5.50012Z"
                                            />
                                        </svg>

                                    </li>

                                    <li className='hover:text-rose-600 hover:bg-white text-white bg-rose-500 flex justify-around gap-x-2 rounded-md  py-2.5 px-2 w-full text-xp-color cursor-pointer shadow-lg'>
                                        Find women

                                        <svg
                                            className="fill-current size-6"

                                            width={20}
                                            height={42}
                                            viewBox="0 0 20 42"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3 0.750188C3 0.750188 3.67157 0 4.5 0C5.32843 0 6 0.680884 6 1.50038C6 2.91059 3.79057 4.52084 3.16386 4.94909C3.06457 5.01697 2.93543 5.01697 2.83614 4.94909C2.20943 4.52084 0 2.91059 0 1.50038C0 0.680884 0.671572 0 1.5 0C2.32843 0 3 0.750188 3 0.750188Z"
                                            />
                                            <path
                                                d="M13.0649 1C10.8199 1 9.00044 2.791 9.00044 5C9.00044 7.209 10.8199 9 13.0649 9C15.3209 9 17.9559 6.89428 19.2309 5.73828C19.6709 5.33928 19.6709 4.65972 19.2309 4.26172C17.9559 3.10572 15.3209 1 13.0649 1ZM13.0004 11C10.2562 11 7.91587 13.0579 7.5649 15.7793L6.01216 27.8086C5.97961 28.0627 6.01267 28.321 6.10819 28.5587C6.20372 28.7964 6.35852 29.0057 6.55786 29.1667C6.75719 29.3277 6.99442 29.4349 7.24694 29.4782C7.49947 29.5215 7.75887 29.4994 8.00044 29.4141V39.5C7.99763 39.6988 8.03435 39.8961 8.10847 40.0806C8.1826 40.265 8.29264 40.4329 8.4322 40.5745C8.57177 40.716 8.73808 40.8284 8.92146 40.9051C9.10485 40.9819 9.30165 41.0214 9.50044 41.0214C9.69923 41.0214 9.89604 40.9819 10.0794 40.9051C10.2628 40.8284 10.4291 40.716 10.5687 40.5745C10.7082 40.4329 10.8183 40.265 10.8924 40.0806C10.9665 39.8961 11.0033 39.6988 11.0004 39.5V29H15.0004V39.5C14.9976 39.6988 15.0344 39.8961 15.1085 40.0806C15.1826 40.265 15.2926 40.4329 15.4322 40.5745C15.5718 40.716 15.7381 40.8284 15.9215 40.9051C16.1048 40.9819 16.3017 41.0214 16.5004 41.0214C16.6992 41.0214 16.896 40.9819 17.0794 40.9051C17.2628 40.8284 17.4291 40.716 17.5687 40.5745C17.7082 40.4329 17.8183 40.265 17.8924 40.0806C17.9665 39.8961 18.0033 39.6988 18.0004 39.5V29.416C18.2422 29.5015 18.5018 29.5236 18.7545 29.4802C19.0072 29.4368 19.2446 29.3294 19.444 29.1682C19.6434 29.007 19.7981 28.7974 19.8935 28.5594C19.9889 28.3214 20.0217 28.0629 19.9887 27.8086L18.436 15.7793C18.085 13.0579 15.7447 11 13.0004 11Z"
                                            />
                                        </svg>


                                    </li>
                                    <div className='mt-20'></div>

                                    <a href="#" className="py-2 px-3 border-2 bg-white text-rose-600 border-rose-500  hover:bg-xp-color rounded-full">
                                        <span className="text-sm font-bold">Sign in</span>
                                    </a>

                                    <a href="#" className="py-2 px-3 border-2 bg-white text-rose-600 border-rose-500  hover:bg-xp-color rounded-full">
                                        <span className="text-sm font-bold">Sign up</span>
                                    </a>
                                </ul>
                            </motion.div>
                        )}

                    </div>


                    <ul className="hidden lg:flex lg:w-auto lg:space-x-12 ml-16 mr-auto">
                        <li>
                            <a
                                className="group flex items-center gap-x-1  text-sm text-gray-50 hover:text-rose-500 font-medium"
                                href="#"
                            >
                                Find Women

                                <div className='relative'>
                                    <svg className='group-hover:rotate-45 transition-all size-3.5 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                                    </svg>

                                    <svg className='absolute transition-transform opacity-0 group-hover:opacity-100 -rotate-45  group-hover:translate-y-0 translate-y-1 size-2 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                                    </svg>


                                    <svg className='absolute -top-2 transition-transform opacity-0 group-hover:opacity-100 -rotate-45  group-hover:translate-y-0 translate-y-1 size-2 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                                    </svg>
                                </div>

                            </a>
                        </li>
                        <li>
                            <a
                                className="group flex items-center gap-x-1  text-sm text-gray-50 hover:text-rose-500 font-medium"
                                href="#"
                            >
                                Find Men

                                <div className='relative'>
                                    <svg className='group-hover:rotate-45 transition-all size-3.5 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                                    </svg>

                                    <svg className='absolute transition-transform opacity-0 group-hover:opacity-100 -rotate-45  group-hover:translate-y-0 translate-y-1 size-2 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                                    </svg>


                                    <svg className='absolute -top-2 transition-transform opacity-0 group-hover:opacity-100 -rotate-45  group-hover:translate-y-0 translate-y-1 size-2 fill-current' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                                        <path d="M15 7C8.9424416 7 4 11.942442 4 18C4 22.096154 7.0876448 25.952899 10.851562 29.908203C14.615481 33.863507 19.248379 37.869472 22.939453 41.560547 A 1.50015 1.50015 0 0 0 25.060547 41.560547C28.751621 37.869472 33.384518 33.863507 37.148438 29.908203C40.912356 25.952899 44 22.096154 44 18C44 11.942442 39.057558 7 33 7C29.523564 7 26.496821 8.8664883 24 12.037109C21.503179 8.8664883 18.476436 7 15 7 z" />
                                    </svg>
                                </div>

                            </a>
                        </li>


                    </ul>
                    <div className="hidden lg:block">
                        <div className="inline-flex items-center gap-x-2">

                            <a href="#" className="py-2 px-3 border-2 border-rose-500 bg-xp-color hover:bg-rose-400 rounded-full">
                                <span className="text-sm font-bold">Sign in</span>
                            </a>

                            <a href="#" className="py-2 px-3 border-2 border-xp-color hover:text-rose-500 hover:border-rose-500 rounded-full">
                                <span className="text-sm font-bold">Sign up</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container mx-auto px-4 relative">
                <div className="flex flex-wrap -mx-4 pt-20 justify-center items-center relative">
                    <div className="xl:w-1/2 px-4 xl:order-first">
                        <div className="block md:flex max-w-2xl lg:max-w-none mx-auto">

                            <div className='group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring'>

                                <span className="absolute inset-0 rounded-lg border-2 border-rose-600 group-active:border-red-500" />


                                <Image
                                    className="block mx-auto rounded-lg border border-rose-500 bg-rose-600 px-12 py-3 transition-transform  -translate-x-4  -translate-y-4"

                                    width={500}
                                    height={500}
                                    src="/images/woman-side-header.png"
                                    alt="Woman image"
                                    style={{ width: "auto", height: "auto" }}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-1/2 px-4 mb-16 lg:mb-0">
                        <div className="relative xl:-ml-40 max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:py-12">
                            <h1 className="block font-heading text-6xl sm:text-8xl md:text-10xl font-bold text-white">
                                MEET YOUR
                            </h1>
                            <h1 className="sm:pl-6 lg:pl-16 font-heading text-6xl sm:text-8xl md:text-10xl font-bold text-rose-500 mb-6">
                                PLAYMATE
                            </h1>
                            <div className="sm:ml-12 xl:ml-40">
                                <p className="text-2xl font-light text-white mb-6">
                                    Where <span className="font-bold text-rose-500">Love</span> Finds Its <span className="font-bold text-rose-500">Perfect Match!</span> Join our community of passionate individuals and discover
                                    meaningful connections.
                                    Your journey to love starts here.
                                </p>
                                <a
                                    className="group inline-flex items-center text-xl text-white hover:text-rose-500 font-bold"
                                    href="#"
                                >
                                    <span className="mr-3">Find your match</span>
                                    <span className="animate-bounce">
                                        <svg
                                            width={11}
                                            height={12}
                                            viewBox="0 0 11 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M2.95669 1.75742L9.55635 1.75742M9.55635 1.75742L9.55635 8.35709M9.55635 1.75742L1.07107 10.2427"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
                <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-2xl font-medium leading-none" href="#">

                        </a>
                        <button className="navbar-close">
                            <svg
                                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <a
                                    className="block p-4 font-medium text-black hover:bg-gray-50"
                                    href="#"
                                >
                                    Women
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 font-medium text-black hover:bg-gray-50"
                                    href="#"
                                >
                                    Men
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 font-medium text-black hover:bg-gray-50"
                                    href="#"
                                >
                                    Kids
                                </a>
                            </li>
                            <li className="mb-1">
                                <a
                                    className="block p-4 font-medium text-black hover:bg-gray-50"
                                    href="#"
                                >
                                    Browse
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a
                                className="block mb-2 py-3 text-sm text-center border border-gray-200 hover:border-gray-400 font-bold"
                                href="#"
                            >
                                Login
                            </a>
                            <a
                                className="block py-3 text-sm text-center text-black bg-rose-500 hover:bg-rose-600 font-bold transition duration-200"
                                href="#"
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </section>

    )
}
