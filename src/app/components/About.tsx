import Image from 'next/image';
import React from 'react'
import { data } from '../data/data';
import Link from 'next/link';

const About = () => {
  return (
    <section id='about' className='about flex justify-center items-center space-x-20'>
        <div className='rounded-gradient-div flex justify-center items-center w-[350px] h-[440px] rounded-[20px]'>
            <div>
                <Image
                    src={data.about.image}
                    alt=''
                    width='350'
                    height='350'
                    className='about-image rounded-[20px]'
                />
            </div>
        </div>
        <div className='flex flex-col space-y-10 items-center justify-center w-[50%]'>
            <span className='text-[20px]'>Hi there 👋, I&apos;m</span>
            <span className='text-[40px] font-[600]'>{data.about.name[0]} {data.about.name[1]}</span>
            <span>{data.about.profession}</span>
            <div>
                <span className='flex items-center justify-center space-x-10'>
                    <a
                      href='/assets/FestusCV.pdf'
                      download
                      className='text-[#BD4F6C] font-[500]'
                    >
                        Download Resume
                    </a>
                    <a
                      href="#contact"
                      className='bg-[#BD4F6C] px-5 py-3 font-[500] rounded-[7px] flex items-center justify-center'
                    >
                        Contact me
                    </a>
                </span>
                <span></span>
            </div>
        </div>
    </section>
  )
}

export default About;