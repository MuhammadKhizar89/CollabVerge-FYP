import Image from "next/image";
import React from "react";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white border  pt-16 pb-8 overflow-hidden">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10 px-16">
        {/* Logo */}
        <div className="flex flex-col space-y-6">
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white text-[#e50914] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <FaTelegramPlane size={20} />
            </div>
            <div className="w-10 h-10 bg-white text-[#e50914] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <FaWhatsapp size={20} />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-white">
            <li>Services</li>
            <li>Why us</li>
            <li>Testimonials</li>
            <li>Brands</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 mb-4">SOCIALS</h3>
          <ul className="space-y-2 text-white">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Indeed</li>
          </ul>
        </div>

        {/* Purpose */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 mb-4">PURPOSE</h3>
          <ul className="space-y-2 text-white">
            <li>Hire Creator & Influencer</li>
            <li>Register as brand</li>
          </ul>
        </div>
      </div>



      {/* Decorative Background Pattern */}

      <div className="absolute top-0 bottom-[1vw] right-0 h-[24vw] w-[35vw]">
 <Image
 src="/images/landingPage/footer.svg" alt="loading..." fill className=" opacity-85"/>
      </div>

<div className="h-[8vw] "></div>

      {/* Big Background Text */}
      <h1 className=" w-full text-[14.19vw] font-bold text-[#FF6161]/75 leading-none tracking-wide">
        <span className=" relative -left-7 ">COLLAB</span><span className=" relative right-7">VERGE</span>
      </h1>
    </footer>
  );
};

export default Footer;
