"use client"

const WhyChooseUs = () => {
  const paymentLogos = [
    { name: "Apple Pay", icon: "🍎", position: "top-0 left-1/2 -translate-x-1/2" },
    { name: "Google Pay", icon: "🔵", position: "top-1/4 right-0" },
    { name: "PayPal", icon: "🅿️", position: "bottom-1/4 right-0" },
    { name: "Stripe", icon: "💳", position: "bottom-0 left-1/2 -translate-x-1/2" },
    { name: "Payoneer", icon: "💰", position: "bottom-1/4 left-0" },
  ]

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-300 bg-white">
            <span className="text-gray-700 text-sm font-medium">Why choose us</span>
          </div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            The Most <span className="text-red-600 italic">trusted</span> Space for
            <br className="hidden sm:block" />
            Influencer Marketing
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            We're redefining how brands and creators connect by removing the roadblocks that slow collaborations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: 45K+ Stats */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 flex flex-col justify-center">
            <div className="text-6xl sm:text-7xl font-bold text-black mb-3">45K+</div>
            <p className="text-gray-700 text-base sm:text-lg">Brands trust our registered creators and influencers</p>
          </div>

          {/* Card 2: Payment Integrations */}
          <div className="rounded-2xl bg-red-600 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Payment integrations</h3>
              <p className="text-red-100 text-sm sm:text-base">
                Pay and get paid anywhere in the world with trusted, flexible payment integrations
              </p>
            </div>

            <div className="relative w-full h-48 sm:h-56 mt-8">
              {paymentLogos.map((logo, index) => (
                <div
                  key={index}
                  className={`absolute w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 ${logo.position}`}
                >
                  <span className="text-xl sm:text-2xl">{logo.icon}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Verified & Authentic Network */}
          <div
            className="rounded-2xl overflow-hidden md:col-span-1 h-64 sm:h-80 relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=600&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col justify-end text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Verified & Authentic Network</h3>
              <p className="text-gray-100 text-sm sm:text-base">
                Every brand and influencer is carefully vetted, ensuring real audiences and authentic collaborations
              </p>
            </div>
          </div>

          {/* Card 4: 25M+ Stats */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 flex flex-col justify-center">
            <div className="text-6xl sm:text-7xl font-bold text-black mb-3">25M+</div>
            <p className="text-gray-700 text-base sm:text-lg">Paid to creators</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
