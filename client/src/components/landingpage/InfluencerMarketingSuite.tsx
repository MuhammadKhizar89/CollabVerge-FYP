import { FlowerIcon } from "@/icons";

export default function InfluencerMarketingSuite() {
    return (
        <section className="flex flex-col items-center gap-10">
            <div className="w-full lg:w-1/2 text-center flex flex-col gap-2">
                <div className="border px-3 py-2 self-center rounded-full text-xs flex gap-1 items-center w-fit ">Services</div>
                <h4 className="text-3xl lg:text-5xl 2xl:text-6xl ">Your Complete<span className="font-playfair italic text-primary">Influencer</span> Marketing Suite</h4>
                <p className="text-[#3F3F3F] text-sm text-wrap">Connect with the right influencers, tools, and insights to make every campaign smarter and more impactful.</p>
            </div>
            <div className="flex flex-wrap w-full gap-5 justify-center items-center">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group flex flex-col justify-center items-center gap-3 w-full lg:w-[25%] h-[40vh] lg:h-[40vh] cursor-pointer  relative border border-gray-400 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-primary hover:text-white">
                        <div className="bg-primary text-white rounded-xl p-4 transition-all duration-500 group-hover:bg-white group-hover:text-primary">
                            {service.icon}
                        </div>
                        <p className="text-xl text-center w-4/5 transition-all duration-500 group-hover:scale-105">
                            {service.title}
                        </p>
                        <div
                            className={`absolute inset-0 ${(index === 1 || index === 4) && 'rotate-180 '} flex justify-end`}
                        >
                            <FlowerIcon />
                        </div>
                    </div>
                ))}

            </div>
        </section >
    );
}

const services = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
        title: "Influencer Discovery & Matching",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
        ),
        title: "Social Media Content Creation",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        title: "Sponsored Campaign Management",
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Brand Ambassador Programs"
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Paid Ad Integration with Influencers"
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: "UGC (User-Generated Content)"
    }
];