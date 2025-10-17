import React from 'react'
import BrandScroller from './BrandScoller'

function TrustedPartners() {
  return (
    <section className='flex flex-col gap-10 '>
      <div className='flex flex-col lg:flex-row gap-5 justify-between'>

        <div className='w-[80%] lg:w-[40%] flex flex-col gap-3'>
          <h4 className="text-6xl lg:text-5xl 2xl:text-6xl ">Trusted by the World&apos;s Most <span className="font-playfair italic text-primary">Influential</span> Brands</h4>
          <p className="text-[#3F3F3F] text-sm">We&apos;re proud to be the go-to marketplace for top brands and platforms that drive the creator economy forward.</p>
          <button className="self-start premiumButton">
            Find collaborations
          </button>
        </div>

        <div className='flex gap-2 justify-end  lg:items-start'>
          <div className='flex flex-col gap-2 bg-gray-100 rounded-xl p-7 pr-12 items-start'>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="16" fill="#E10000" />
              <path d="M24 33H16C14 33 13 32 13 30V22C13 20 14 19 16 19H21V30C21 32 22 33 24 33Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.11 15C21.03 15.3 21 15.63 21 16V19H16V17C16 15.9 16.9 15 18 15H21.11Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 19V24" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M29 19V24" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M28 28H26C25.45 28 25 28.45 25 29V33H29V29C29 28.45 28.55 28 28 28Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17 24V28" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 30V16C21 14 22 13 24 13H30C32 13 33 14 33 16V30C33 32 32 33 30 33H24C22 33 21 32 21 30Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='text-2xl'>Brands</p>
            <p className='text-5xl'>80k+</p>
          </div>
          <div className='flex flex-col gap-2 bg-gray-100 rounded-xl p-7 pr-10 items-start'>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="16" fill="#E10000" />
              <path d="M17 23H15C13.8954 23 13 23.8954 13 25V30C13 31.1046 13.8954 32 15 32C16.1046 32 17 31.1046 17 30M17 23H19.6536C19.8828 23 20.1104 23.0394 20.3262 23.1165L25.6727 25.026C26.4687 25.3102 27 26.0642 27 26.9094V28M17 23V30M17 30L22.7164 31.7864C24.2062 32.2519 25.7996 32.2715 27.3004 31.8427L30.9664 30.7953C31.5782 30.6205 32 30.0613 32 29.4251C32 28.638 31.362 28 30.5749 28H24.698C24.5663 28 24.435 27.987 24.3058 27.9612L22 27.5M31.1864 18.8086C32.2712 17.7225 32.2712 15.9616 31.1864 14.8755C30.324 14.012 29.283 13.7477 28.2326 14.2608C27.8157 14.4645 27.2691 14.8755 27 15.4124C26.7309 14.8755 26.1843 14.4645 25.7674 14.2608C24.717 13.7477 23.676 14.012 22.8136 14.8755C21.7288 15.9616 21.7288 17.7225 22.8136 18.8086L26.2925 22.2916C26.6831 22.6827 27.3169 22.6827 27.7075 22.2916L31.1864 18.8086Z" stroke="white" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p className='text-2xl'>Collaborations</p>
            <p className='text-5xl'>150k+</p>
          </div>
        </div>
      </div>
      <BrandScroller />
    </section>
  )
}

export default TrustedPartners