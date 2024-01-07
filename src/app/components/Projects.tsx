import React from 'react'
import { data } from '../data/data'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
  return (
    <section id='projects' className='projects flex flex-col items-center justify-center w-full'>
        <h1 className='font-[700] text-[30px] pb-10'>Projects I have worked on </h1>
        <div className='flex w-full items-center justify-evenly flex-wrap'>
            {data.projects.map((project, index) => (
                <div
                  key={index}
                  className='project-image w-[350px] h-fit flex flex-col items-center justify-center rounded-[20px] p-2'
                >
                    <Image
                      src={project.img}
                      width={350}
                      height={0}
                      alt=''
                      className='rounded-[20px]'
                    />
                    <span className='center-content w-full pt-8 font-[600]'>{project.title}</span>
                    <span className='pt-8 text-[14px]'>{project.description}</span>
                    <span className='center-content w-full pt-8 text-[14px]'>
                        <span className='center-content w-full font-bold'>Technologies: &nbsp;</span>
                            {project.technologies}
                    </span>
                    <div className='center-content w-full space-x-5 py-5 text-[14px]'>
                        <button><Link href={project.github}>GitHub</Link></button>
                        <button><Link href={project.link}>Live Demo</Link></button>
                    </div>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default Projects