import React from 'react'
import Image from 'next/image'
import { XPLogo } from '../icons';


export default function FooterWidget() {
    return (
        <footer className="py-20 px-2 bg-white dark:bg-xp-color">
            <div className="container mx-auto px-4">
                <div className="-mx-4 mb-8 flex flex-wrap lg:mb-16">
                    <div className="mb-12 w-full px-4 lg:mb-0 lg:w-1/3">
                        <a className="text-2xl leading-none text-gray-600 mb-10" href="#">
                            <XPLogo className={` dark:fill-white fill-rose-500 w-[10rem]`} />

                            {/* <Image
                                className="h-8"
                                src="./xp-logo.svg"
                                style={{ width: "auto", height: "auto" }}
                                alt="Xp bookings logo"
                                width={200}
                                height={200}
                            /> */}
                        </a>

                        <div>
                            <a className="mr-8 inline-block h-6" href="#">
                                <Image
                                    className="mx-auto size-5"
                                    width={100}
                                    height={100}
                                    alt="Facebook Icons"
                                    style={{ width: "auto", height: "auto" }}
                                    src="/images/facebook.svg"

                                />
                            </a>

                            <a className="mr-8 inline-block h-6" href="#">
                                <Image
                                    className="mx-auto size-5"
                                    width={100}
                                    height={100}
                                    alt="Instagram Icons"
                                    style={{ width: "auto", height: "auto" }}
                                    src="/images/instagram.svg"
                                />
                            </a>
                            <a className="mr-8 inline-block h-6" href="#">
                                <Image
                                    className="mx-auto size-5"
                                    width={100}
                                    height={100}
                                    alt="Linkedln Icons"
                                    style={{ width: "auto", height: "auto" }}
                                    src="/images/linkedin.svg"

                                />
                            </a>
                            <a className="inline-block h-6" href="#">
                                <Image
                                    className="mx-auto"
                                    width={100}
                                    height={100}
                                    alt="Twitter Icons"
                                    style={{ width: "auto", height: "auto" }}
                                    src="/images/twitter.svg"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="w-full px-4 lg:w-2/3">
                        <div className="flex flex-wrap justify-between">
                            <div className="mb-8 w-1/2 lg:mb-0 lg:w-1/4">
                                <h3 className="font-heading mb-6 text-lg font-bold">Company</h3>
                                <ul className="text-sm">
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Careers
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Press
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-8 w-1/2 lg:mb-0 lg:w-1/4">
                                <h3 className="font-heading mb-6 text-lg font-bold">Pages</h3>
                                <ul className="text-sm">
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Login
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Register
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Add list
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-8 w-1/2 lg:mb-0 lg:w-1/4">
                                <h3 className="font-heading mb-6 text-lg font-bold">Legal</h3>
                                <ul className="text-sm">
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Terms
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Privacy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-1/2 lg:w-1/4">
                                <h3 className="font-heading mb-6 text-lg font-bold">Resources</h3>
                                <ul className="text-sm">
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Blog
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Service
                                        </a>
                                    </li>
                                    <li className="mb-4">
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Product
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-xp-color dark:text-gray-200 hover:text-rose-500" href="#">
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-8">
                    <p className="text-sm text-gray-500 lg:text-center">
                        All rights reserved. © XP-Bookings.
                    </p>
                </div>
            </div>
        </footer>
    )
}
