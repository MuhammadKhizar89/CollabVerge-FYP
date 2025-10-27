"use client";

import Image from "next/image";

const WhyChooseUs = () => {
  const paymentLogos = [
    { name: "Stripe", icon: "/images/landingPage/stripe.svg" },
    { name: "Apple Pay", icon: "/images/landingPage/applepay.svg" },
    { name: "Google Pay", icon: "/images/landingPage/googlePay.svg" },
    { name: "PayPal", icon: "/images/landingPage/paypal.svg" },
    { name: "Payoneer", icon: "/images/landingPage/payoneer.svg" },
  ];

  return (
    <div className="w-full  py-16 px-4 sm:px-2">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-300 bg-white">
            <span className="text-gray-700 text-xs font-medium">Why choose us</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-light mb-4 leading-tight">
            The Most <span className="font-playfair italic text-primary">trusted</span> Space for
            <br className="hidden sm:block" />
            Influencer Marketing
          </h1>
          <p className="text-[#3F3F3F] text-xl max-w-lg mx-auto">
            We're redefining how brands and creators connect by removing the roadblocks that slow collaborations.
          </p>
        </div>

        <div className="flex gap-x-4">
          <div className="rounded-2xl border border-gray-200 p-8  flex flex-col justify-center w-[60%]">
            <div className="text-6xl sm:text-8xl font-light  mb-3 mt-20">45K+</div>
            <p className="text-gray-700 dark:text-white text-base sm:text-lg">
              Brands trust our registered creators and influencers
            </p>
          </div>

          <div className="rounded-2xl bg-primary p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Payment integrations</h3>
            <p className="text-red-100 text-sm sm:text-lg w-[70%]">
              Pay and get paid anywhere in the world with trusted, flexible payment integrations
            </p>

            <div className="relative w-full flex justify-center mt-20">
              <div className="relative mt-16 flex items-end justify-center">
                {paymentLogos.map((logo, index) => {
                  const total = paymentLogos.length
                  const angleStep = 45 / (total - 1) // wider arc = more gap
                  const baseAngle = -22 // tilt start
                  const angle = baseAngle + index * angleStep
                  const rotate = angle // keeps icons aligned with curve

                  const radius = 110 // how curved the line is
                  const spacing = 3.7 // horizontal spacing multiplier
                  const x = Math.sin((angle * Math.PI) / 180) * radius * spacing
                  const y = Math.cos((angle * Math.PI) / 180) * radius

                  return (
                    <div
                      key={index}
                      className="absolute w-16 h-16 bg-white border rounded-xl shadow-lg  flex items-center justify-center"
                      style={{
                        transform: `translate(${x}px, ${60 - y}px) rotate(${rotate}deg)`,
                      }}
                    >
                      <Image
                        src={logo.icon}
                        alt={logo.name}
                        width={35}
                        height={35}
                        className="object-contain"
                      />
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex mt-6 gap-x-4">
          {/* Card 3 */}
          <div
            className="rounded-2xl overflow-hidden md:col-span-1 h-64 sm:h-80 relative w-[70%]"
            style={{
              backgroundImage: "url('/images/landingPage/verified_authentic_network.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-gray-200 p-8 flex flex-col justify-center w-[30%]">
            <div className="text-6xl sm:text-8xl font-light  mt-16">25M+</div>
            <p className="text-gray-700 dark:text-white text-base sm:text-lg">Paid to creators</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
