import React from 'react'
import Image from "next/image";


export default function SectionTwoWidget() {
    return (
        <section className="relative pt-64 pb-40 bg-xp-color overflow-hidden">
            <div className="absolute top-0 left-1/2">
                <div className="w-px h-16 bg-rose-300" />
                <div className="w-px h-24 bg-rose-500" />
            </div>
            <div className="container px-4 mx-auto">
                <div className="flex items-center mb-18">
                    <span className="font-heading text-xl"></span>
                    <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                    <span className="font-heading text-xl">Customer review</span>
                </div>
                <div className="max-w-4xl mx-auto text-center mb-24 sm:mb-52">
                    <h2 className="font-heading text-5xl sm:text-6xl">
                        Don&apos;t take our word for it. Trust our stats
                    </h2>
                </div>
                <div className="flex flex-wrap -mx-4 3xl:-mx-20 mb-36">
                    <div className="w-full lg:w-1/2 px-4 3xl:px-20 mb-36 lg:mb-0">
                        <div className="relative pt-14 pb-20 px-8 sm:pl-14 sm:pr-24 bg-black-2 rounded-md">
                            <p className="max-w-lg font-light mb-6">
                                “A real nice tools and app. It comes with a few free plug-ins that
                                will be more than enough for beginners. For more advansed users,
                                you&apos;ll need to get a few more plug-ins for an extra cost on 3rd
                                party websites, but Wressa makes it quite easy to set them up.”
                            </p>
                            <svg
                                width={107}
                                height={18}
                                viewBox="0 0 107 18"
                                className='fill-gray-500'
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
                                    <span className="text-lg font-medium mr-3">Saidy Blackstone</span>
                                    <span className="text-gray-300">Spotify</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4 3xl:px-20 lg:-mt-24">
                        <div className="relative pt-14 pb-20 px-8 sm:pl-14 sm:pr-24 mb-36 bg-black-2 rounded-md">
                            <p className="max-w-lg font-light mb-6">
                                “The only reason not to give 5 stars is the fact that I had to
                                separately claim for the offered cash back deal, rather it being
                                automatic, and this info wasn&apos;t stated anywhere.”
                            </p>
                            <svg
                                width={107}
                                height={18}
                                viewBox="0 0 107 18"
                                className='fill-gray-500'
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
                                    <span className="text-lg font-medium mr-3">Helen Kruse</span>
                                    <span className="text-gray-300">Miro</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative pt-14 pb-20 px-8 sm:pl-14 sm:pr-24 bg-black-2 rounded-md">
                            <p className="max-w-lg font-light mb-6">
                                “A real nice tools and app. It comes with a few free plug-ins that
                                will be more than enough for beginners. For more advansed users,
                                you&apos;ll need to get a few more plug-ins for an extra cost on 3rd
                                party websites, but Wressa makes it quite easy to set them up.”
                            </p>
                            <svg
                                width={107}
                                height={18}
                                viewBox="0 0 107 18"
                                className='fill-gray-500'
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
                                    <span className="text-lg font-medium mr-3">Saidy Blackstone</span>
                                    <span className="text-gray-300">Spotify</span>
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
