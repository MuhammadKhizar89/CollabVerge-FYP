"use client";
import { FlowerIcon } from "@/icons";
import React, { useEffect, useRef, useState } from "react";

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = containerRef.current;
    const sections = container?.querySelectorAll(".step-section");
    if (!sections) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) setActiveIndex(index);
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col gap-8 py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <h6 className="text-4xl lg:text-5xl 2xl:text-6xl text-wrap w-full lg:w-1/2 text-center lg:text-start">
          The Easiest Way to Build
          <span className="font-playfair text-primary  italic"> Powerful</span> Partnerships
        </h6>
        <p className="text-[#3F3F3F] text-sm text-center lg:w-1/3">
          We&apos;re redefining how brands and creators connect by removing the
          roadblocks that slow collaborations.
        </p>
      </div>

      <div ref={containerRef} className="relative h-[200vh] flex flex-col">
        <div className="sticky top-10 h-[90vh] flex items-center justify-center overflow-hidden">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`absolute inset-0 bg-primary rounded-xl p-6 lg:p-10 flex flex-col justify-between transition-all duration-700 ease-out ${
                i === activeIndex
                  ? "opacity-100 translate-x-0"
                  : i < activeIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}>
              <div className={`absolute inset-0 flex justify-end `}>
                <FlowerIcon />
              </div>
              <p className="text-7xl opacity-70 text-white font-bold z-10">
                {String(card.id).padStart(2, "0")}
              </p>
              <div className="flex flex-col gap-4  text-white items-start z-10">
                <h6 className="text-5xl ">{card.title}</h6>
                <p className="text-xl lg:w-[60%]">{card.text}</p>
                <button className="bg-transparent cursor-pointer border border-white px-6 py-2 rounded-full w-fit hover:bg-white hover:text-primary transition-all duration-500">
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {cards.map((_, i) => (
          <div
            key={i}
            data-index={i}
            className="step-section h-[40vh] w-full"
          ></div>
        ))}
      </div>
    </section>
  );
}

const cards = [
  {
    id: 1,
    title: "Create Your Profile",
    text: "Whether you’re a brand showcasing your vision or a creator highlighting your influence, this is where meaningful partnerships begin.",
    button: "Get Started",
  },
  {
    id: 2,
    title: "Find Your Match",
    text: "Use smart filters and AI recommendations to discover the best-fit creators or brands that align with your goals.",
    button: "Explore Now",
  },
  {
    id: 3,
    title: "Collaborate & Grow",
    text: "Connect, negotiate, and track your campaigns effortlessly — all in one platform built for powerful partnerships.",
    button: "Start Collaborating",
  },
];
