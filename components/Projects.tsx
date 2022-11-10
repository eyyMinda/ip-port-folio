import { motion } from 'framer-motion';
import React from 'react'

type Props = { dark: boolean }

export default function Projects({ dark }: Props) {

  const projects = [1, 2, 3, 4, 5];

  return <div className='section'>
    <h3 className='sectionHeading'>Projects</h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
     snap-x snap-mandatory z-20 scrollbar'>
      {projects.map((project, i) => (
        <div
          className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
        items-center justify-center p-20 md:p-44 h-screen'>

          <motion.img initial={{ y: -300, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }} viewport={{ once: true }}
            src="https://static.vecteezy.com/system/resources/thumbnails/003/705/333/small/landing-page-web-header-colorful-background-for-website-banner-poster-vector.jpg"
            alt="" />

          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-4xl font-semibold text-center'>
              <span className='underline decoration-secondary-500/50'>
                Case Study {i + 1} of {projects.length}:
              </span>{" "}Landing
            </h4>

            <p className='text-lg text-center md:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum voluptatum placeat, soluta laborum fugiat a veritatis
              hic quos itaque nisi architecto officiis quo odio recusandae
              repellendus mollitia ipsa alias delectus dolore incidunt?</p>
          </div>
        </div>
      ))}
    </div>

    <div className='w-full absolute top-[30%] bg-secondary-300/10 left-0 h-[500px] -skew-y-12'>

    </div>
  </div>
}