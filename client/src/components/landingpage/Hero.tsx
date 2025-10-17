import React from 'react'
import HeroCard from './HeroCard';
import Image from 'next/image';

function Hero() {
    return (
        <main className="flex flex-col mt-20 lg:mt-0 lg:flex-row w-full   gap-5 lg:justify-between lg:px-10">
            <div className="flex flex-col items-start justify-center gap-3 lg:w-1/2 ">
                <div className="border p-2 rounded-full text-xs flex gap-1 items-center "><svg width="18" height="18" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.458252 8.9425L10.2941 20.74C10.3801 20.843 10.4877 20.9259 10.6093 20.9827C10.7309 21.0396 10.8634 21.069 10.9976 21.069C11.1318 21.069 11.2644 21.0396 11.386 20.9827C11.5075 20.9259 11.6151 20.843 11.7012 20.74L21.5416 8.9425H0.458252Z" fill="#299ACC" />
                    <path d="M16.7749 2.06751H5.22492C4.89295 2.06712 4.5671 2.15687 4.28216 2.3272C3.99721 2.49752 3.76386 2.74201 3.607 3.03459L0.458252 8.94251H21.5416L18.3928 3.03459C18.236 2.74201 18.0026 2.49752 17.7177 2.3272C17.4327 2.15687 17.1069 2.06712 16.7749 2.06751Z" fill="#38B1E7" />
                    <path d="M10.12 20.3825L6.875 8.9425H15.125L11.88 20.4008C11.8225 20.5907 11.705 20.7568 11.5451 20.8742C11.3852 20.9915 11.1915 21.0539 10.9931 21.0518C10.7948 21.0497 10.6024 20.9834 10.445 20.8627C10.2876 20.742 10.1735 20.5735 10.12 20.3825Z" fill="#61C0EA" />
                    <path d="M15.1251 8.9425H6.87508L6.41675 2.0675H15.5834L15.1251 8.9425Z" fill="#89D0EF" />
                </svg>
                    #1 Collaboration platform</div>
                <h6 className="text-6xl lg:text-5xl 2xl:text-6xl ">Where Brands & Influencers Meet <span className="font-playfair italic text-primary">Create </span>to Create Global Impact</h6>
                <p className="text-[#3F3F3F] text-sm">The first-ever marketplace for brands to collaborate with creators and influencers. Build authentic partnerships that drive results.</p>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full lg:max-w-xl border border-gray-300 rounded-lg lg:rounded-xl px-2 lg:px-4 py-2 shadow-sm bg-white">
                    <input
                        type="text"
                        placeholder="Search brands or influencers"
                        className="flex-1 outline-none bg-transparent placeholder:text-sm lg:placeholder:text-base  text-gray-700 placeholder-gray-400"
                    />
                    <div className="flex flex-col items-end gap-1">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4, 5].map((i) => <div key={i} className="relative w-6 h-6 rounded-full overflow-hidden">
                                <Image src="/images/hero-1.jpg" alt="profile" fill className="object-cover" />
                            </div>)}
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap">
                            100K+ Influencers & brands
                        </span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button className="premiumButton">
                        Find collaborations
                    </button>
                    <button className="px-7 py-3 rounded-lg bg-white text-black  hover:text-white border border-black hover:bg-black transition duration-300 cursor-pointer">
                        Hire influencers
                    </button>
                </div>
            </div>
            <HeroCard />

        </main>
    )
}

export default Hero