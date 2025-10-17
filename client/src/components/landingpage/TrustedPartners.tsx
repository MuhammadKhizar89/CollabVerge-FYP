import React from 'react'

function TrustedPartners() {
  return (
    <section className='flex flex-col'>
      <div className='flex justify-between'>

        <div className='lg:w-[40%] flex flex-col gap-3'>
          <h4 className="text-6xl lg:text-5xl 2xl:text-6xl ">Trusted by the World&apos;s Most <span className="font-playfair italic text-primary">Influential</span> Brands</h4>
          <p className="text-[#3F3F3F] text-sm">We&apos;re proud to be the go-to marketplace for top brands and platforms that drive the creator economy forward.</p>
          <button className="self-start premiumButton">
            Find collaborations
          </button>
        </div>

        <div className='flex gap-2 items-start'>
          <div className='flex flex-col gap-2 bg-gray-100 rounded-xl p-7 pr-12 items-start'>
            {/* <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="46" height="46" rx="16" fill="#E10000" />
              <path d="M24 33H16C14 33 13 32 13 30V22C13 20 14 19 16 19H21V30C21 32 22 33 24 33Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.11 15C21.03 15.3 21 15.63 21 16V19H16V17C16 15.9 16.9 15 18 15H21.11Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 19V24" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M29 19V24" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M28 28H26C25.45 28 25 28.45 25 29V33H29V29C29 28.45 28.55 28 28 28Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17 24V28" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 30V16C21 14 22 13 24 13H30C32 13 33 14 33 16V30C33 32 32 33 30 33H24C22 33 21 32 21 30Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg> */}
            <p className='text-2xl'>Brands</p>
              <p className='text-5xl'>80k+</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TrustedPartners