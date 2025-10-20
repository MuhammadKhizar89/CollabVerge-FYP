"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { InstagramIcon, TikTokIcon, YoutubeIcon, FacebookIcon } from "@/icons";
import styles from '@/styles/landing-page.module.css'

function HeroCard() {
    const [index, setIndex] = useState<number>(0);
    const [fade, setFade] = useState<boolean>(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % profiles.length);
                setFade(true);
            }, 500);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const current = profiles[index];

    return (
        <div className={`hidden animate-float relative lg:flex justify-center items-center h-[90vh] w-full lg:w-[34%]  ${styles.animateFloat}`}>
            <div className="lg:w-full lg:h-[85%] bg-red-600 rounded-full"></div>

            <div className="absolute top-8 w-full h-[90%] lg:w-[90%] overflow-hidden rounded-3xl">
                <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <Image
                        key={current.img}
                        className={`rounded-3xl object-cover transition-opacity duration-700 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
                        fill
                        src={current.img}
                        alt={current.name}
                    />
                    <div className="absolute w-full h-full rounded-3xl bg-black/40 px-4 py-3 flex flex-col gap-3 justify-end">
                        <div
                            className={`text-white transition-opacity duration-700 ease-in-out ${fade ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <h1 className="text-2xl font-[500]">{current.name}</h1>
                            <h2 className="text-sm font-[300]">{current.title}</h2>
                        </div>

                        {/* Social icons (static, not fading) */}
                        <div className="flex gap-1">
                            <div className="bg-gray-100 h-6 w-6 flex justify-center items-center rounded-full">
                                <InstagramIcon width={20} height={20} />
                            </div>
                            <div className="bg-gray-100 h-6 w-6 flex justify-center items-center rounded-full">
                                <TikTokIcon width={20} height={20} />
                            </div>
                            <div className="bg-gray-100 h-6 w-6 flex justify-center items-center rounded-full">
                                <YoutubeIcon width={20} height={20} />
                            </div>
                            <div className="bg-gray-100 h-6 w-6 flex justify-center items-center rounded-full">
                                <FacebookIcon width={20} height={20} />
                            </div>
                        </div>
                        <div
                            className={`flex justify-between transition-opacity duration-700 ease-in-out ${fade ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <div className="flex flex-col gap-1 items-center">
                                <p className="text-[#CCCCCC] text-sm">Followers</p>
                                <p className="text-xl text-white">{current.followers}</p>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <p className="text-[#CCCCCC] text-sm">Collaborations</p>
                                <p className="text-xl text-white">{current.collaborations}</p>
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                                <p className="text-[#CCCCCC] text-sm">Rating</p>
                                <p className="text-xl text-white">{current.rating}</p>
                            </div>
                        </div>
                        <button className="w-full bg-white py-2 rounded-xl cursor-pointer hover:bg-white/70">
                            Hire now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;

const profiles = [
    {
        name: "Ali Ahmed",
        title: "Vlogger",
        img: "/images/hero-1.jpg",
        followers: "140K",
        collaborations: "999+",
        rating: "4.8",
    },
    {
        name: "Sara Khan",
        title: "Travel Influencer",
        img: "/images/hero-2.jpg",
        followers: "180K",
        collaborations: "230",
        rating: "4.9",
    },
    {
        name: "Bilal Malik",
        title: "Tech Reviewer",
        img: "/images/hero-1.jpg",
        followers: "210K",
        collaborations: "500+",
        rating: "4.7",
    },
    {
        name: "Hania Zafar",
        title: "Lifestyle Blogger",
        img: "/images/hero-bg.png",
        followers: "95K",
        collaborations: "120",
        rating: "4.6",
    },
];