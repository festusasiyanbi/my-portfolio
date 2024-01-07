import React from 'react'
import { data } from '../data/data'
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <section className='center-content w-full flex-col'>
        <h1 className='font-[700] text-[30px] pb-10'>Skills </h1>
        <div className='center-content w-full space-x-10'>
            <div className='w-[25%] h-[420px] pb-5 bg-[#041E42] flex flex-col items-start justify-between'>
                <div className='end-content w-full'>
                    <h2 className='curve-heading'>
                        Frontend Skills
                    </h2>
                </div>
                {data.skills.frontend.map((skill, index) => (
                    <div key={index} className='pl-10'>
                        <div className='flex items-center justify-center space-x-3'>
                            <div>
                                <div className='text-regular_brown'><FaCheckCircle /></div>
                            </div>
                            <div className='text-[14px]'>{skill.skill} ({skill.proficiency})</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[25%] h-[420px] pb-5 bg-[#041E42] flex flex-col items-start justify-between'>
                <div className='end-content w-full'>
                    <h2 className='curve-heading'>
                        Backend Skills
                    </h2>
                </div>
                {data.skills.backend.map((skill, index) => (
                    <div key={index} className='pl-10'>
                        <div className='flex items-center justify-center space-x-3'>
                            <div>
                                <div className='text-regular_brown'><FaCheckCircle /></div>
                            </div>
                            <div className='text-[14px]'>{skill.skill} ({skill.proficiency})</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[25%] h-[420px] pb-5 bg-[#041E42] flex flex-col items-start justify-between'>
                <div className='end-content w-full'>
                    <h2 className='curve-heading'>
                        Other Skills
                    </h2>
                </div>
                {data.skills.technogies.map((skill, index) => (
                    <div key={index} className='pl-10'>
                        <div className='flex items-center justify-center space-x-3'>
                            <div>
                                <div className='text-regular_brown'><FaCheckCircle /></div>
                            </div>
                            <div className='text-[14px]'>{skill.skill} ({skill.proficiency})</div>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    </section>
  )
}

export default Skills