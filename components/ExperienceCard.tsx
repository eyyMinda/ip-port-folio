import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

export default function ExperienceCard({ }: Props) {
  return <motion.article initial={{ opacity: 0.4 }}
    whileHover={{ opacity: 1 }} transition={{ duration: .4 }}
    className='flex flex-col rounded-2xl items-center space-y-4 flex-shrink-0
    w-[350px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-700 p-10 cursor-pointer
    overflow-hidden'>

    <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
      object-cover object-center'
      src="https://autosupirkimasvln.eu/logo.webp" alt="" />

    <div className='px-0 md:px-10 text-white'>
      <h4 className='text-4xl font-light'>Web Dev Freelancer</h4>
      <p className='font-bold text-2xl mt-1'>Freelance</p>

      <div className='flex space-x-2 my-2'>
        <img className='w-8 h-auto mr-1' alt="HTML"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
        <img className='w-8 h-auto mr-1' alt="CSS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        <img className='w-8 h-auto mr-1' alt="CSS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img className='w-8 h-auto mr-1' alt="CSS"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
      </div>

      <p className='uppercase py-4 text-gray-500'>Started: .. Ended: ...</p>
      <ul className='list-disc space-y-2 ml-5 text-lg'>
        <li>Comment Comment Comment Comment Comment Comment Comment Comment </li>
        <li>Comment Comment Comment Comment Comment Comment Comment Comment </li>
        <li>Comment Comment Comment Comment Comment Comment Comment Comment </li>
        <li>Comment Comment Comment Comment Comment Comment Comment Comment </li>
        <li>Comment Comment Comment Comment Comment Comment Comment Comment </li>
      </ul>
    </div>
  </motion.article>
}