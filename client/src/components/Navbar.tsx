"use client"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'

function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className=" flex   justify-between items-center ">
      <div className="flex gap-20 ">
        <div className="flex gap-1 items-center cursor-pointer">
          <Image src="/logo.svg" alt="logo" width={20} height={20} />
          <h1 className="text-lg font-medium">Collab Verge</h1>
        </div>
        <ul className="hidden lg:flex gap-4 items-center">
          <li className="hover:underline cursor-pointer">Hire Influencers</li>
          <li className="hover:underline cursor-pointer">Find brands</li>
          <li className="hover:underline cursor-pointer">Why us</li>
          <li className="hover:underline cursor-pointer">What’s new</li>
        </ul>
      </div>
      <div className="flex items-center gap-4 ">
        <a className="hover:underline cursor-pointer" href="">Login</a>
        <button className="bg-primary px-4 text-white py-2 rounded-xl cursor-pointer hover:bg-primary/70">Get Started</button>
      </div>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='fixed bottom-4 right-4 p-3 cursor-pointer z-50  rounded-xl border-2'>
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </nav>
  )
}

export default Navbar