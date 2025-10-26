"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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
        text: "Our campaigns saw a 3x boost in engagement after using this platform. The ease of collaboration and quality of creators are unmatched.",
        image: "/images/hero-1.jpg",
    },
    {
        name: "Ava Martinez",
        title: "Brand Strategist, LuxeBeauty",
        role: "Beauty Blogger",
        followers: "200K",
        text: "This platform made influencer marketing effortless. We found creators who truly matched our brand’s aesthetic.",
        image: "/images/hero-1.jpg",
    },
];

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
        <div className="relative w-full text-white  overflow-hidden">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-playfair italic">
                    Stories of Growth and Success
                </h2>
                <p className="text-sm text-white/80 mt-3">
                    From emerging creators to worldwide brands, discover how our platform
                    helps every collaboration thrive and scale.
                </p>
            </div>

            {/* Slider container */}
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
                            {/* Image Card */}
                            <div className="relative w-[250px] h-[300px] rounded-3xl overflow-hidden shadow-lg shrink-0 flex justify-center">
                                <Image
                                    src={t.image}
                                    alt={t.name}
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                                <div className="absolute bottom-4  bg-[#ffffffa6] text-black px-8 py-4 flex  items-center rounded-3xl gap-4 backdrop-blur-md">
                                    <div className="">
                                        <h5 className=" text-sm">{t.name}</h5>
                                        <p className="text-[8px] text-start font-light ">{t.role}</p>
                                    </div>
                                    <div className="flex flex-col justify-center text-xs font-medium text-gray-900 text-right">
                                        <p className="font-light text-xs"> Followers</p>
                                        <p className="text-xs">{t.followers}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Text Box */}
                            <div className="max-w-lg bg-white text-black rounded-3xl p-8 shadow-lg">
                                <p className="text-xs text-gray-600 mb-2">Testimonial</p>
                                <p className="text-sm mb-4  leading-relaxed">
                                    {t.text}
                                </p>
                                <h5 className="">{t.name}</h5>
                                <p className="text-xs text-gray-600">{t.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center gap-3 mt-10">
                <button
                    onClick={handlePrev}
                    className="bg-white/30 hover:bg-white/50 w-10 h-10 cursor-pointer rounded-full transition"
                >
                    ◀
                </button>
                <button
                    onClick={handleNext}
                    className="bg-white/30 hover:bg-white/50 w-10 h-10 cursor-pointer rounded-full transition"
                >
                    ▶
                </button>
            </div>
        </div>
    );
}
