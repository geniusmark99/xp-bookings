'use client';
import React, { useState } from 'react'
import Image from "next/image";
import MobileSidebar from './MobileSidebar';

export default function SectionOneWidget() {

    return (
        <section className="pb-12 md:pb-24 lg:pb-32 bg-xp-color">
            <nav className="relative px-6 lg:px-16 py-9">
                <div className="flex items-center">
                    <a className="inline-block text-lg font-bold" href="#">
                        <Image
                            className="h-10"
                            src="./xp-logo.svg"
                            alt="XP-bookings Logo"
                            width={200}
                            height={200}
                            style={{ width: "auto", height: "auto" }}

                        />
                    </a>
                    <div className="lg:hidden ml-auto">
                        <button className="navbar-burger flex items-center p-3 text-white hover:text-rose-500">
                            <svg
                                className="block h-4 w-4"
                                stroke="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Mobile menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
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

                            <div>
                                <Image
                                    className="block mx-auto rounded-lg shadow-lg border-2 border-transparent  hover:border-rose-600"
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
