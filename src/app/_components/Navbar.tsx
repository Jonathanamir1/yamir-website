'use client'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="">
      <div className=" flex flex-wrap items-center  mx-auto p-24">
          <Image src="/logo-black.png" alt="YAmir Logo" width={80} height={80} className='ml-40' />
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-primary bg-secondary rounded-3xl py-3 px-4 mr-2 font-montserrat font-bold text-s tracking-wide">CONTACT ME</button>
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5 stroke-current text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>
      <div className="hidden w-full md:block md:w-auto md:ml-auto" id="navbar-solid-bg">

        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <a href="#" className="text-secondary pr-10 mr-2 font-montserrat font-bold text-s tracking-wide">About me</a>
          </li>
          <li>
            <a href="#" className="text-secondary pr-10 mr-2 font-montserrat font-bold text-s tracking-wide">Skills</a>
          </li>
          <li>
          <a href="#" className="text-secondary pr-10 mr-8 font-montserrat font-bold text-s tracking-wide">Portfolio</a>
          </li>

        </ul>
      </div>
      </div>
  </nav>

  )
}

