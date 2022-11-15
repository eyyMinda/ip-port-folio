import { motion } from 'framer-motion';
import React from 'react'
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
  dark: boolean;
  projects: Project[];
}

export default function Projects({ dark, projects }: Props) {

  return <div className='section'>
    <h3 className='sectionHeading'>Projects</h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
     snap-x snap-mandatory z-10 scrollbar'>
      {projects?.map((project, i) => (
        <div key={project._id} className='h-screen w-screen flex-shrink-0 snap-center
        flex flex-col space-y-5 items-center justify-center p-5 sm:p-20 md:p-44'>
          <a href={project.linkToBuild} target='_blank' rel="noreferrer">
            <motion.img initial={{ y: -300, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }} viewport={{ once: true }}
              src={urlFor(project.image).url()} alt={project.title}
              className='w-auto h-44' />
          </a>

          <div className='space-y-10 px-0 md:px-10 max-w-6xl text-center'>
            <div className='flex justify-center gap-4'>
              {project.technologies.map(skill => (
                <img src={urlFor(skill.image).url()} alt={skill.title} className='w-12 h-auto' />
              ))}</div>

            <h4 className={`${dark ? '' : 'light'} h4`}>
              <span>Case Study {i + 1} of {projects.length}:</span>{" "}{project.title}
            </h4>

            <p className='text-lg md:text-left'>{project.summary}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Background Line */}
    <div className='w-full absolute top-[30%] bg-secondary-300/10 left-0 h-[500px] -skew-y-12'></div>
  </div>
}