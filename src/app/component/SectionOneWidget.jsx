'use client';
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LightIcon, DarkIcon, XPLogo } from '../icons';
import MobileSidebar from './MobileSidebar';

export default function SectionOneWidget() {

    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, []);


    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };




    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <section className="pb-12 md:pb-24 lg:pb-32 bg-white dark:bg-xp-color">
            <nav className={`${isScrolled ? 'bg-rose-500 border-white' : 'border-rose-500/50'} transition-colors duration-300 fixed w-full z-[2000] px-3 lg:px-16 py-4 border-b  shadow-sm shadow-rose-500/20`}>
                <div className="flex items-center">
                    <a className="inline-block text-lg font-bold" href="#">
                        <XPLogo className={`${isScrolled ? 'fill-white' : 'fill-rose-500'} w-[10rem]`} />

                    </a>
                    <MobileSidebar />

                    <div className='flex md:hidden ml-2'>
                        <motion.button
                            onClick={toggleDarkMode}
                            whileHover={{
                                scale: 1.1,
                                rotate: 360,
                                transition: {
                                    delay: 0.25,
                                    duration: 1,

                                }
                            }}

                            className={`${isScrolled ? 'bg-white dark:bg-akauntme-dark' : 'bg-rose-600 dark:bg-akauntme-dark'}  size-7 flex  relative overflow-hidden transition-all justify-center items-center 
                                rounded-full `}>

                            <LightIcon className={`${!darkMode ? '-translate-x-8' : 'translate-x-0'} ${isScrolled ? 'fill-xp-color' : 'fill-white'} size-3.5 transition-all  absolute`} />

                            <DarkIcon className={`${darkMode ? 'translate-x-8' : 'translate-x-0'}  ${isScrolled ? 'fill-xp-color' : 'fill-white'} size-3.5   transition-all absolute`} />

                        </motion.button>
                    </div>




                    <ul className={`${isScrolled ? '*:text-white' : ''} hidden lg:flex lg:w-auto lg:space-x-12 ml-16 mr-auto`}>
                        <li>
                            <a
                                className={` ${isScrolled ? 'text-white dark:text-white hover:text-white before:bg-white' : 'text-rose-500 dark:text-gray-100 hover:text-rose-500 before:bg-rose-600'} 
                                desktop-xp-link group flex items-center gap-x-1  text-sm   font-medium
                                `}
                                href="#"
                            >
                                Find Sexy Lady

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
                                className={` ${isScrolled ? 'text-white dark:text-white hover:text-white before:bg-white' : 'text-rose-500 dark:text-gray-100 hover:text-rose-500 before:bg-rose-600'} 
                                desktop-xp-link group flex items-center gap-x-1  text-sm   font-medium
                                `}
                                href="#"
                            >
                                Casual encounters

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
                        </li    >

                        <li>
                            <a
                                href="#"

                                className={` ${isScrolled ? 'text-white dark:text-white hover:text-white before:bg-white' : 'text-rose-500 dark:text-gray-100 hover:text-rose-500 before:bg-rose-600'} 
                                desktop-xp-link group flex items-center gap-x-1  text-sm   font-medium
                                `}
                            >
                                Find your match

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

                                className={` ${isScrolled ? 'text-white dark:text-white hover:text-white before:bg-white' : 'text-rose-500 dark:text-gray-100 hover:text-rose-500 before:bg-rose-600'} 
                                desktop-xp-link group flex items-center gap-x-1  text-sm   font-medium
                                `}
                                href="#"
                            >
                                Hookups

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

                                className={` ${isScrolled ? 'text-white dark:text-white hover:text-white before:bg-white' : 'text-rose-500 dark:text-gray-100 hover:text-rose-500 before:bg-rose-600'} 
                                desktop-xp-link group flex items-center gap-x-1  text-sm   font-medium
                                `}
                                href="#"
                            >
                                Bookings

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

                            <a href="#" className={` ${isScrolled ? 'bg-white hover:bg-white text-rose-500' : 'hover:bg-rose-500 dark:bg-xp-color hover:text-white  bg-white dark:text-white'} py-2 px-3 border-2 border-rose-500 text-rose-500 
                               rounded-full`}>
                                <span className="text-sm font-bold">Sign in</span>
                            </a>

                            <a href="#" className={`${isScrolled ? 'border-white' : 'border-transparent'} border-2  py-2 px-3 bg-rose-500 transition-all hover:scale-95
                              rounded-full`}>
                                <span className="text-sm font-bold">Be a member</span>
                            </a>

                            <motion.button
                                onClick={toggleDarkMode}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 360,
                                    transition: {
                                        delay: 0.25,
                                        duration: 1,

                                    }
                                }}

                                className={`${isScrolled ? 'bg-white dark:bg-akauntme-dark' : 'bg-rose-500 dark:bg-akauntme-dark'} size-7 flex relative overflow-hidden transition-all justify-center items-center 
                                rounded-full `}>

                                <LightIcon className={`${!darkMode ? '-translate-x-8' : 'translate-x-0'} ${isScrolled ? 'fill-xp-color' : 'fill-white'} size-3.5 transition-all  absolute`} />

                                <DarkIcon className={`${darkMode ? 'translate-x-8' : 'translate-x-0'}  ${isScrolled ? 'fill-xp-color' : 'fill-white'} size-3.5   transition-all absolute`} />

                            </motion.button>
                        </div>
                    </div>
                </div>
            </nav >

            <div className="container mx-auto px-4 relative pt-20">
                <div className="flex flex-wrap -mx-4 pt-20 justify-center items-center relative">
                    <div className="w-full xl:w-1/2 px-4 flex text-xp-color dark:text-white">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                                bulletClass: 'swiper-pagination-bullet',
                                bulletActiveClass: 'swiper-pagination-bullet-active'
                            }}
                            navigation={false}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>


                                <div className='text-center h-[50vh]'>
                                    <div className="flex flex-col  mx-auto relative">

                                        <div className='group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring'>

                                            <span className="absolute inset-0 rounded-lg border-2 border-rose-600 group-active:border-red-500" />

                                            <Image
                                                className="block mx-auto rounded-lg px-12 py-3 transition-transform  -translate-x-4  -translate-y-4"

                                                width={500}
                                                height={500}
                                                src="/images/woman-1.jpg"
                                                alt="Woman image"
                                                style={{ width: "auto", height: "auto" }}
                                                priority
                                            />

                                        </div>


                                        <div className="absolute right-0 bottom-0 xl:-ml-40 max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:py-12">
                                            <h1 className="block font-heading text-6xl sm:text-8xl md:text-10xl font-bold text-white">
                                                MEET YOUR
                                            </h1>
                                            <h1 className="sm:pl-6 lg:pl-16 text-left bg-clip-text bg-gradient-to-tl from-rose-500 via-emerald-500 to-cyan-500 text-transparent font-heading text-6xl sm:text-8xl md:text-10xl font-bold mb-6">
                                                PLAYMATE
                                            </h1>

                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center h-[50vh]'>
                                    <div className="flex flex-col  mx-auto relative">

                                        <div className='group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring'>

                                            <span className="absolute inset-0 rounded-lg border-2 border-rose-600 group-active:border-red-500" />

                                            <Image
                                                className="block mx-auto rounded-lg border border-rose-500 bg-rose-600 px-12 py-3 transition-transform  -translate-x-4  -translate-y-4"

                                                width={300}
                                                height={300}
                                                src="/images/woman-side-header.png"
                                                alt="Woman image"
                                                style={{ width: "auto", height: "auto" }}
                                                priority
                                            />

                                        </div>


                                        <div className="absolute right-0 bottom-0 xl:-ml-40 max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:py-12">
                                            <h1 className="block font-heading text-6xl sm:text-8xl md:text-10xl font-bold text-white">
                                                MEET YOUR
                                            </h1>
                                            <h1 className="sm:pl-6 lg:pl-16 text-left bg-clip-text bg-gradient-to-tl from-rose-500 via-emerald-500 to-cyan-500 text-transparent font-heading text-6xl sm:text-8xl md:text-10xl font-bold mb-6">
                                                PLAYMATE
                                            </h1>

                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-center h-[50vh]'>
                                    <div className="flex flex-col  mx-auto relative">

                                        <div className='group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring'>

                                            <span className="absolute inset-0 rounded-lg border-2 border-rose-600 group-active:border-red-500" />

                                            <Image
                                                className="block mx-auto rounded-lg px-12 py-3 transition-transform  -translate-x-4  -translate-y-4"

                                                width={500}
                                                height={500}
                                                src="/images/woman-3.jpg"
                                                alt="Woman image"
                                                style={{ width: "auto", height: "auto" }}
                                                priority
                                            />

                                        </div>


                                        <div className="absolute right-0 bottom-0 xl:-ml-40 max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:py-12">
                                            <h1 className="block font-heading text-6xl sm:text-8xl md:text-10xl font-bold text-white">
                                                MEET YOUR
                                            </h1>
                                            <h1 className="sm:pl-6 lg:pl-16 text-left bg-clip-text bg-gradient-to-tl from-rose-500 via-emerald-500 to-cyan-500 text-transparent font-heading text-6xl sm:text-8xl md:text-10xl font-bold mb-6">
                                                FANTASY
                                            </h1>

                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>
                        </Swiper>




                    </div>


                    {/* HERE */}
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="max-w-sm text-center mx-auto">
                            <div className="mb-4 px-6 py-8 bg-rose-500 dark:bg-xp-color rounded-xl">
                                <div className="mb-6">
                                    <span className="text-sm text-white dark">Sign Up</span>
                                    <h3 className="text-2xl font-bold">To be a member</h3>
                                </div>
                                <form action="">
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="mb-4 w-full lg:w-1/2 px-2">
                                            <input
                                                className="w-full p-4 text-xs bg-gray-50 outline-none rounded text-xp-color"
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="mb-4 w-full lg:w-1/2 px-2">
                                            <input
                                                className="w-full p-4 text-xs bg-gray-50 outline-none rounded text-xp-color"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4 flex p-4 bg-gray-50 rounded">
                                        <input
                                            className="w-full text-xs bg-gray-50 outline-none text-xp-color"
                                            type="email"
                                            placeholder="name@email.com"
                                        />
                                        <svg
                                            className="h-6 w-6 ml-4 my-auto text-gray-300"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                            />
                                        </svg>
                                    </div>
                                    <div className="mb-6 flex p-4 bg-gray-50 rounded">
                                        <input
                                            className="w-full text-xs bg-gray-50 outline-none text-xp-color"
                                            type="password"
                                            placeholder="Enter your password"
                                        />
                                        <button>
                                            <svg
                                                className="h-6 w-6 ml-4 my-auto text-gray-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <button className="mb-2 w-full py-4 bg-rose-600 hover:bg-rose-700 rounded text-sm font-bold text-gray-50 transition duration-200">
                                            Sign Up
                                        </button>
                                        <span className="text-gray-100 text-xs">
                                            Already have an account?{" "}
                                            <a className="text-rose-300 dark:text-rose-500 font-semibold hover:underline" href="#">
                                                Sign In
                                            </a>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <p className="text-xs text-xp-color dark:text-rose-500">
                                <a className="underline dark:text-white text-rose-500 hover:text-rose-600" href="#">
                                    Policy privacy
                                </a>{" "}
                                and{" "}
                                <a className="underline dark:text-white text-rose-500 hover:text-rose-600" href="#">
                                    Terms of Use
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* END OF HERE */}
                </div>

                {/* </div> */}
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
        </section >

    )
}
