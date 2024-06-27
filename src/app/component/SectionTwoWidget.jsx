import React from 'react'
import Image from "next/image";


export default function SectionTwoWidget() {
    return (
        <section className="relative pt-64 pb-40 bg-white dark:bg-xp-color overflow-hidden">

            <div className='flex justify-center items-center'>

                <div className='flex gap-x-2'>

                    <a
                        className="inline-block rounded border border-rose-600 bg-rose-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"
                    >
                        Be a member
                    </a>


                    <a
                        className="inline-block rounded border border-rose-600 bg-rose-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500"
                    >
                        Be a playmate
                    </a>

                </div>
            </div>


            {/* <div className="absolute top-0 left-[40%] sm:left-1/2 flex flex-col justify-center items-center">



                <button id='water-ripple' className='bg-rose-500 size-20 rounded-full text-white flex justify-center items-center flex-col'>

                    <svg className="fill-current size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path d="M23.970703 3.9726562 A 2.0002 2.0002 0 0 0 22 6L22 22 A 2.0002 2.0002 0 1 0 26 22L26 6 A 2.0002 2.0002 0 0 0 23.970703 3.9726562 z M 17.03125 9.5957031 A 2.0002 2.0002 0 0 0 16.125 9.8105469C10.126881 12.732506 6 18.900262 6 26C6 35.917759 14.082241 44 24 44C33.917759 44 42 35.917759 42 26C42 18.900051 37.873521 12.733423 31.876953 9.8105469 A 2.0003292 2.0003292 0 1 0 30.123047 13.40625C34.782479 15.677373 38 20.447949 38 26C38 33.756241 31.756241 40 24 40C16.243759 40 10 33.756241 10 26C10 20.447738 13.215119 15.676291 17.875 13.40625 A 2.0002 2.0002 0 0 0 17.03125 9.5957031 z" />

                    </svg>
                    Start
                </button>




                <div className="w-px h-16 bg-rose-300" />
                <div className="w-px h-24 bg-rose-500" />
            </div> */}
            <div className="container px-4 mx-auto">
                <div className="flex items-center mb-18 justify-center ">
                    <span className="font-heading text-xl"></span>
                    {/* <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" /> */}
                    <span className="font-heading text-xl">Customer review</span>
                </div>
                <div className="max-w-4xl mx-auto text-center mb-24 sm:mb-52">
                    <h2 className="font-heading text-5xl sm:text-6xl">
                        Don&apos;t take our word for it. Trust our stats
                    </h2>
                </div>
                <div className="flex flex-wrap -mx-4 3xl:-mx-20 mb-36">
                    <div className="w-full lg:w-1/2 px-4 3xl:px-20 mb-36 lg:mb-0">
                        <div className="relative pt-14 pb-20 px-8 sm:pl-14 sm:pr-24 bg-rose-600  dark:bg-black-2 rounded-md">
                            <p className="max-w-lg font-light mb-6">
                                &quot;XP-Bookings made it so easy to find my perfect match! The site is user-friendly, and the community is amazing.
                                I never thought I&apos;d find someone so compatible. Highly recommend!&quot;
                            </p>
                            <svg
                                width={107}
                                height={18}
                                viewBox="0 0 107 18"
                                className='fill-white dark:fill-gray-500'
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.6328 7.12501H11.8078L9.63284 0.375L7.45781 7.12501H0.632812L6.19782 11.085L4.06783 17.625L9.63284 13.575L15.1979 17.625L13.0678 11.085L18.6328 7.12501Z"
                                />
                                <path
                                    d="M40.7236 7.12501H33.8986L31.7237 0.375L29.5486 7.12501H22.7236L28.2886 11.085L26.1586 17.625L31.7237 13.575L37.2887 17.625L35.1586 11.085L40.7236 7.12501Z"
                                />
                                <path
                                    d="M62.8145 7.12501H55.9895L53.8145 0.375L51.6394 7.12501H44.8145L50.3795 11.085L48.2495 17.625L53.8145 13.575L59.3795 17.625L57.2494 11.085L62.8145 7.12501Z"
                                />
                                <path
                                    d="M84.9053 7.12501H78.0803L75.9053 0.375L73.7303 7.12501H66.9053L72.4703 11.085L70.3403 17.625L75.9053 13.575L81.4703 17.625L79.3403 11.085L84.9053 7.12501Z"
                                />
                                <path
                                    d="M106.996 7.12501H100.171L97.9961 0.375L95.8211 7.12501H88.9961L94.5611 11.085L92.4311 17.625L97.9961 13.575L103.561 17.625L101.431 11.085L106.996 7.12501Z"
                                />
                            </svg>
                            <div className="absolute bottom-0 left-0 ml-8 sm:ml-14 -mb-16">
                                <div className="flex-shrink-0 relative max-w-max mb-4">
                                    <Image
                                        className="size-12 rounded-full object-cover"
                                        src="/images/avatar-women1.png"
                                        alt="XP IMAGES"
                                        width={500}
                                        height={500}
                                    />
                                    <Image
                                        className="absolute size-4 bottom-0 right-0 -mb-1 -mr-1"
                                        src="/images/spotify-logo-small-icon.svg"
                                        alt="XP IMAGES"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <div className="flex items-center">


                                    <span className="text-lg font-medium mr-3 text-xp-color dark:text-gray-300">Saidy Blackstone</span>
                                    <span className="text-xp-color dark:text-gray-300">Spotify</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 3xl:px-20 lg:-mt-24">
                        <div className="relative pt-14 pb-20 px-8 sm:pl-14 sm:pr-24 mb-36 bg-rose-600  dark:bg-black-2 rounded-md">
                            <p className="max-w-lg font-light mb-6">
                                &quot;I was skeptical at first, but XP-Bookings exceeded my expectations.
                                The detailed profiles and advanced matching system really helped me find someone who shares my interests and values.
                                Thank you!&quot;

                            </p>
                            <svg
                                width={107}
                                height={18}
                                viewBox="0 0 107 18"
                                className='fill-white dark:fill-gray-500'
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.6328 7.12501H11.8078L9.63284 0.375L7.45781 7.12501H0.632812L6.19782 11.085L4.06783 17.625L9.63284 13.575L15.1979 17.625L13.0678 11.085L18.6328 7.12501Z"
                                />
                                <path
                                    d="M40.7236 7.12501H33.8986L31.7237 0.375L29.5486 7.12501H22.7236L28.2886 11.085L26.1586 17.625L31.7237 13.575L37.2887 17.625L35.1586 11.085L40.7236 7.12501Z"
                                />
                                <path
                                    d="M62.8145 7.12501H55.9895L53.8145 0.375L51.6394 7.12501H44.8145L50.3795 11.085L48.2495 17.625L53.8145 13.575L59.3795 17.625L57.2494 11.085L62.8145 7.12501Z"
                                />
                                <path
                                    d="M84.9053 7.12501H78.0803L75.9053 0.375L73.7303 7.12501H66.9053L72.4703 11.085L70.3403 17.625L75.9053 13.575L81.4703 17.625L79.3403 11.085L84.9053 7.12501Z"
                                />
                                <path
                                    d="M106.996 7.12501H100.171L97.9961 0.375L95.8211 7.12501H88.9961L94.5611 11.085L92.4311 17.625L97.9961 13.575L103.561 17.625L101.431 11.085L106.996 7.12501Z"
                                />
                            </svg>
                            <div className="absolute bottom-0 left-0 ml-8 sm:ml-14 -mb-16">
                                <div className="flex-shrink-0 relative max-w-max mb-4">
                                    <Image
                                        className="size-12 rounded-full object-cover"
                                        src="/images/avatar-women2.png"
                                        width={500}
                                        height={500}
                                        alt="XP IMAGES"
                                    />
                                    <Image
                                        className="absolute size-4 bottom-0 right-0 -mb-1 -mr-1"
                                        src="/images/spotify-logo-small-icon.svg"
                                        width={500}
                                        height={500}
                                        alt="XP IMAGES"
                                    />
                                </div>
                                <div className="flex items-center">

                                    <span className="text-lg font-medium mr-3 text-xp-color dark:text-gray-300">Helen Kruse</span>
                                    <span className="text-xp-color dark:text-gray-300">Miro</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-14 pb-20 px-8 sm:pl-14 sm:pr-24 bg-rose-600  dark:bg-black-2 rounded-md">
                            <p className="max-w-lg font-light mb-6">
                                &quot;XP-Bookings is a game-changer! I found the love of my life here, and the experience wa
                                s fantastic from start to finish. The support team was always there to help,
                                making the whole process smooth and enjoyable.&quot;
                            </p>
                            <svg
                                width={107}
                                height={18}
                                viewBox="0 0 107 18"
                                className='fill-white dark:fill-gray-500'
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.6328 7.12501H11.8078L9.63284 0.375L7.45781 7.12501H0.632812L6.19782 11.085L4.06783 17.625L9.63284 13.575L15.1979 17.625L13.0678 11.085L18.6328 7.12501Z"
                                />
                                <path
                                    d="M40.7236 7.12501H33.8986L31.7237 0.375L29.5486 7.12501H22.7236L28.2886 11.085L26.1586 17.625L31.7237 13.575L37.2887 17.625L35.1586 11.085L40.7236 7.12501Z"
                                />
                                <path
                                    d="M62.8145 7.12501H55.9895L53.8145 0.375L51.6394 7.12501H44.8145L50.3795 11.085L48.2495 17.625L53.8145 13.575L59.3795 17.625L57.2494 11.085L62.8145 7.12501Z"
                                />
                                <path
                                    d="M84.9053 7.12501H78.0803L75.9053 0.375L73.7303 7.12501H66.9053L72.4703 11.085L70.3403 17.625L75.9053 13.575L81.4703 17.625L79.3403 11.085L84.9053 7.12501Z"
                                />
                                <path
                                    d="M106.996 7.12501H100.171L97.9961 0.375L95.8211 7.12501H88.9961L94.5611 11.085L92.4311 17.625L97.9961 13.575L103.561 17.625L101.431 11.085L106.996 7.12501Z"
                                />
                            </svg>
                            <div className="absolute bottom-0 left-0 ml-8 sm:ml-14 -mb-16">
                                <div className="flex-shrink-0 relative max-w-max mb-4">
                                    <Image
                                        className="size-12 rounded-full object-cover"
                                        src="/images/avatar-women1.png"
                                        width={500}
                                        height={500}
                                        alt="XP IMAGE"
                                    />
                                    <Image
                                        className="absolute size-4 bottom-0 right-0 -mb-1 -mr-1"
                                        src="/images/miro-logo-small-icon.svg"
                                        width={500}
                                        height={500}
                                        alt="XP IMAGE"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <span className="text-lg font-medium mr-3 text-xp-color dark:text-gray-300">Saidy Blackstone</span>
                                    <span className="text-xp-color dark:text-gray-300">Spotify</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a
                        className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-rose-500 hover:bg-rose-600 text-white rounded transition duration-250"
                        href="#"
                    >
                        All Reviews
                    </a>
                </div>
            </div>
        </section>

    )
}
