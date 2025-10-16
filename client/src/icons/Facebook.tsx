import React from 'react'

function Facebook({width=18, height=19}: {width?: number, height?: number}) {
    return (
        <svg width={width} height={height} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="18" height="18" rx="9" fill="#0062E0" />
            <g clipPath="url(#clip0_132_592)">
                <g filter="url(#filter0_i_132_592)">
                    <path d="M11.4242 10.1948L11.7249 8.25353H9.87222V6.99168C9.87222 6.46085 10.1309 5.94215 10.958 5.94215H11.8121V4.289C11.3147 4.20842 10.8121 4.16482 10.3083 4.15857C8.78346 4.15857 7.78794 5.08979 7.78794 6.77328V8.25353H6.09766V10.1948H7.78794V14.8904H9.87222V10.1948H11.4242Z" fill="white" />
                </g>
            </g>
            <defs>
                <filter id="filter0_i_132_592" x="6.09766" y="4.15857" width="5.71436" height="11.2318" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="0.5" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_132_592" />
                </filter>
                <clipPath id="clip0_132_592">
                    <rect width="10.9757" height="10.9757" fill="white" transform="translate(3.41455 3.91467)" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Facebook