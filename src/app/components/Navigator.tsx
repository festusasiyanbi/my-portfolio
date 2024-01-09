import Link from 'next/link';
import React from 'react'
import { FaBriefcase, FaCogs, FaEnvelope, FaInfo, FaLaptopCode } from 'react-icons/fa';
import { data } from '../data/data';

const Navigator = () => {
  return (
    <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 text-center'>
        <div className='gradient w-fit h-[60px] flex items-center justify-center space-x-5 border-slate-900 border-[1px] rounded-[20px] px-5'>
            {data.header.links.map((link, index) => (
                <Link
                    key={index}
                    href={link.link_to}
                    className="g-transition h-[40px] w-[40px] rounded-[50%] text-regular_brown bg-white flex items-center justify-center hover:text-white hover:bg-regular_brown">
                    {link.link_to === "#about"
                      ? <FaInfo /> 
                      : link.link_to === "#projects"
                      ? <FaBriefcase />
                      : link.link_to === "#experience"
                      ? <FaLaptopCode />
                      : link.link_to === "#skills"
                      ? <FaCogs />
                      : <FaEnvelope />
                    }
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Navigator;