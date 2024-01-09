'use client'
import React from 'react'
import { data } from '../data/data';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ["latin"] });

const Header = () => {
  
  return (
    <header className='w-full flex justify-between items-center h-[70px] font-[600] px-10'>
      <div className="flex lg:flex-1">
        <Link href="#" className="-m-1.5 p-1.5">
          <p
            className={`${mont.className} font-bold text-3xl`}
            style={{ color: "#fff" }}
          >
            ge
          </p>
        </Link>
      </div>
      <div className='flex justify-between space-x-14'>
        {data.header.links.map((link, index) => (
          <Link
            key={index}
            href={link.link_to}
            className="capitalize">
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header;