import React from 'react'
import { data } from '../data/data'
import Link from 'next/link'
import { FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id='contact' className='contact center-content w-full'>
        <div className='flex items-start justify-start space-x-20'>
            <div className='center-content flex-col space-y-7'>
                <div><input type='text' placeholder='Full Name' /></div>
                <div><input type='text' placeholder='example@gmail.com' /></div>
                <div><textarea placeholder='Message' /></div>
                <div className='flex items-center justify-start w-full'>
                    <button className=''>Send Message</button>
                </div>
            </div>
            <div className='center-content flex-col space-y-10'>
                {data.contact.map((contact, index) => (
                    <div key={index} className='center-content w-full flex-col space-y-2 bg-[#002D62] px-2 py-4 rounded-[5px]'>
                        <span>
                            {contact.type === "Email" 
                                ? <FaEnvelope /> 
                                : contact.type === "LinkedIn" 
                                ? <FaLinkedin /> 
                                : <FaTwitter />
                            }
                        </span>
                        <span>{contact.type}</span>
                        <span>{contact.username}</span>
                        <Link 
                          href={contact.link === "festusasiyanbi80@gmail.com" 
                            ? `mailto:${contact.link}`
                            : `${contact.link}`}
                          className='text-regular_brown'
                        >
                            Send Message
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Contact