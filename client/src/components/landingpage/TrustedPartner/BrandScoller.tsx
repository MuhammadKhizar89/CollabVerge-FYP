"use client";
import { InstagramIcon } from "@/icons";
import style from "@/styles/landing-page.module.css";
const brands = [
  { name: "Snapchat", icon: "/images/hero-2.jpg" },
  { name: "Nike", icon: "/images/hero-2.jpg" },
  { name: "Instagram", icon: "/images/hero-2.jpg" },
  { name: "Apple", icon: "/images/hero-2.jpg" },
  { name: "Adidas", icon: "/images/hero-2.jpg" },
];

function ScrollingRow({ speed, reverse }: { speed: number; reverse?: boolean }) {
  return (
    <div
      className="overflow-hidden whitespace-nowrap"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
      }}
    >
      <div
        className={`flex gap-4 ${style.animateScroll}`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...brands,...brands,...brands, ...brands].map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border shrink-0"
          >
            <InstagramIcon/>
            <span className="text-sm font-medium text-gray-800">{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandScroller() {
  return (
    <div className="w-full flex flex-col gap-4 py-10">
      <ScrollingRow speed={40} />
      <ScrollingRow speed={55} reverse />
      <ScrollingRow speed={50} />
      <ScrollingRow speed={60} reverse />
      <ScrollingRow speed={45} />
    </div>
  );
}

