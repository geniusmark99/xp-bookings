import React from 'react'
import Image from 'next/image'

export default function SectionThreeWidget() {
    return (
        <section>
            <div className="skew skew-top mr-for-radius">
                <svg
                    className="h-8 md:h-12 lg:h-20 w-full text-xp-color"
                    viewBox="0 0 10 10"
                    preserveAspectRatio="none"
                >
                    <polygon fill="currentColor" points="0 0 10 10 0 10" />
                </svg>
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg
                    className="h-8 md:h-12 lg:h-20 w-full text-xp-color"
                    viewBox="0 0 10 10"
                    preserveAspectRatio="none"
                >
                    <polygon fill="currentColor" points="0 10 10 0 10 10" />
                </svg>
            </div>
            <div className="py-20 bg-xp-color radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4 lg:px-10">
                            <div className="max-w-md">
                                <span className="text-rose-500 font-bold">
                                    XP-Bookings
                                </span>
                                <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                                    Sign up &amp; be a member
                                </h2>
                                <div className="mb-6 max-w-sm">
                                    <p className="text-gray-300 leading-loose">
                                        Unlock the doors to passion and romance with XP-Bookings.
                                        Dive into a world where every click brings you closer to your perfect match. Don&amps;t
                                        just dream about love experience it.
                                        Sign up now and let the adventure begin into your fantasy
                                    </p>
                                </div>
                                <div className="flex flex-wrap lg:-ml-5">
                                    <button className="lg:w-auto py-2 px-6 leading-loose lg:ml-5 text-gray-50 font-bold 
                                    bg-rose-600 hover:bg-rose-700 transition duration-200 rounded-l-xl rounded-t-xl">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="mb-4 flex flex-wrap items-end">
                                <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                    <Image
                                        className="w-full h-32 lg:h-48 object-cover rounded"
                                        width={200}
                                        height={200}
                                        style={{ width: "auto", height: "auto" }}
                                        src="/images/woman-1.jpg"
                                        alt="Beautiful Sexy women"
                                    />
                                </div>
                                <div className="w-full lg:w-1/3 px-3">
                                    <Image
                                        className="w-full h-32 object-cover rounded"
                                        width={200}
                                        height={200}
                                        style={{ width: "auto", height: "auto" }}
                                        src="/images/woman-1.jpg"
                                        alt="Beautiful Sexy women"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap items-start">
                                <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                    <Image
                                        className="w-full h-32 object-cover rounded"
                                        width={200}
                                        height={200}
                                        style={{ width: "auto", height: "auto" }}
                                        src="/images/woman-2.jpg"
                                        alt="Beautiful Sexy women"
                                    />
                                </div>
                                <div className="w-full lg:w-2/3 px-3">
                                    <Image
                                        className="w-full h-32 lg:h-48 object-cover rounded"
                                        width={200}
                                        height={200}
                                        style={{ width: "auto", height: "auto" }}
                                        src="/images/woman-3.jpg"
                                        alt="Beautiful Sexy women"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg
                    className="h-8 md:h-12 lg:h-20 w-full text-xp-color"
                    viewBox="0 0 10 10"
                    preserveAspectRatio="none"
                >
                    <polygon fill="currentColor" points="0 0 10 0 0 10" />
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg
                    className="h-8 md:h-12 lg:h-20 w-full text-xp-color"
                    viewBox="0 0 10 10"
                    preserveAspectRatio="none"
                >
                    <polygon fill="currentColor" points="0 0 10 0 10 10" />
                </svg>
            </div>
        </section>

    )
}
