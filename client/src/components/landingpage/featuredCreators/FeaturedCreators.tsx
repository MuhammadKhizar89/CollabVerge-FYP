import { FlowerIcon } from "@/icons";
import Image from "next/image";
import React from "react";
import Testimonials from "./Testimonials";

function FeaturedCreators() {

    return (
        <div className="bg-primary relative flex flex-col gap-16 w-full h-fit rounded-3xl overflow-hidden py-10">

            <Image fill src="/images/featured-creators-layer.png" alt="layer" className="rounded-3xl  object-cover opacity- absolute inset-0 top-0 bottom-0 right-0" />
            <div className="relative flex flex-col items-center justify-center text-white text-center gap-2 p-3  z-10 ">
                <div className={`absolute inset-0 flex justify-end rotate-180 opacity-50 `}>
                    <FlowerIcon />
                </div>
                <div className="border border-white/50 px-3 py-2 rounded-full bg-[#FFFFFF33] text-xs">
                    Featured Talent
                </div>
                <h4 className="text-3xl lg:text-5xl 2xl:text-6xl ">Meet our Creators & Influencers</h4>
                <p className="text-sm max-w-xl text-white/80">
                    From emerging creators to worldwide brands, discover how our platform
                    helps every collaboration thrive and scale.
                </p>
                <div className="flex justify-center gap-6 mt-6 flex-wrap transition-all duration-500">
                    {creators.map((creator, index) => (
                        <div
                            key={index}
                            className="relative flex justify-center  group w-[150px] h-[300px]  rounded-[2rem] cursor-pointer overflow-hidden shadow-lg transition-all duration-500 hover:w-[250px] hover:shadow-2xl "
                        >
                            <Image
                                src={creator.src}
                                alt={creator.name}
                                fill
                                className="object-cover group-hover:scale-110  transition-transform duration-700"
                            />

                            <div className="absolute  flex  gap-6 text-black      bottom-[-100%] left-s0 rounded-full px-8 py-3  bg-[#FFFFFF80]  transition-all duration-500 group-hover:bottom-4">
                                <div className="">
                                    <h5 className=" text-sm">{creator.name}</h5>
                                    <p className="text-[8px] text-start font-light ">{creator.role}</p>
                                </div>
                                <div className="flex flex-col justify-center text-xs font-medium text-gray-900 text-right">
                                    <p className="font-light text-[8px]"> Followers</p>
                                    <p className="text-xs">{creator.followers}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="primaryButton mt-7">
                    Find collaborations
                </button>

            </div>
            <Testimonials />
        </div>
    );
}

export default FeaturedCreators;

const creators = [
    {
        src: "/images/hero-1.jpg",
        name: "Samantha Lee",
        role: "Fashion Influencer",
        followers: "140K",
    },
    {
        src: "/images/hero-1.jpg",
        name: "David Kim",
        role: "Travel Creator",
        followers: "89K",
    },
    {
        src: "/images/hero-1.jpg",
        name: "Ava Martinez",
        role: "Beauty Blogger",
        followers: "200K",
    },
    {
        src: "/images/hero-1.jpg",
        name: "Liam Smith",
        role: "Fitness Coach",
        followers: "110K",
    },
    {
        src: "/images/hero-1.jpg",
        name: "Noah Chen",
        role: "Lifestyle Vlogger",
        followers: "95K",
    },
    {
        src: "/images/hero-1.jpg",
        name: "Olivia Brown",
        role: "Food Enthusiast",
        followers: "150K",
    },
];