"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            handleNext();
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative w-full p-3 lg:p-10 text-white  overflow-hidden">
            <div className=" mb-10">
                <h2 className="text-4xl font-playfair italic">
                    Stories of Growth and Success
                </h2>
                <p className="text-sm text-white/80 mt-3">
                    From emerging creators to worldwide brands, discover how our platform
                    helps every collaboration thrive and scale.
                </p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="min-w-full flex flex-col lg:flex-row items-center justify-center gap-10 px-6"
                        >
                            <div className="relative w-[70%] lg:w-1/3 h-[350px] rounded-3xl overflow-hidden shadow-lg shrink-0 flex justify-center">
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                                <div className="absolute  flex  gap-6 text-black      rounded-full px-8 py-3  bg-[#FFFFFF80]  transition-all duration-500 bottom-4">
                                    <div className="">
                                        <h5 className=" text-sm">{t.name}</h5>
                                        <p className="text-[8px] text-start font-light ">{t.role}</p>
                                    </div>
                                    <div className="flex flex-col justify-center text-xs font-medium text-gray-900 text-right">
                                        <p className="font-light text-[8px]"> Followers</p>
                                        <p className="text-xs">{t.followers}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-3/4 flex flex-col justify-between bg-white text-black rounded-3xl p-8 shadow-lg">
                                <div>
                                    <p className="text-xs text-gray-600 mb-2">Testimonial</p>
                                    <p className="text-md lg:text-lg mb-4  leading-relaxed">
                                        {t.text}
                                    </p>
                                </div>
                                <div>
                                    <h5 className="">{t.name}</h5>
                                    <p className="text-xs text-gray-600">{t.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center items-center gap-3 mt-10">
                <button
                    onClick={handlePrev}
                    className="bg-white/30 hover:bg-white/50 w-16 h-16 cursor-pointer rounded-full transition"
                >
                    ◀
                </button>
                <button
                    onClick={handleNext}
                    className="bg-white/30 hover:bg-white/50 w-16 h-16 cursor-pointer rounded-full transition"
                >
                    ▶
                </button>
            </div>
        </div>
    );
}


const testimonials = [
    {
        name: "Samantha Lee",
        title: "Marketing Director, GlowSkincare Co.",
        role: "Fashion Influencer",
        followers: "140K",
        text: "Finding the right influencers used to take weeks of outreach and endless vetting. This platform completely transformed our process. We connected with verified creators in just days and launched our most successful campaign to date.",
        image: "/images/hero-1.jpg",
    },
    {
        name: "David Kim",
        title: "Marketing Lead, Wanderlust Travel",
        role: "Travel Creator",
        followers: "89K",
        text: "Finding the right influencers used to take weeks of outreach and endless vetting. This platform completely transformed our process. We connected with verified creators in just days and launched our most successful campaign to date.",
        image: "/images/hero-1.jpg",
    },
    {
        name: "Ava Martinez",
        title: "Brand Strategist, LuxeBeauty",
        role: "Beauty Blogger",
        followers: "200K",
        text: "Finding the right influencers used to take weeks of outreach and endless vetting. This platform completely transformed our process. We connected with verified creators in just days and launched our most successful campaign to date.",
        image: "/images/hero-1.jpg",
    },
];
