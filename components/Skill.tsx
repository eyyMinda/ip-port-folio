import { motion } from 'framer-motion'
import React from 'react'

type Props = { directionLeft?: boolean }

// TEMPLATE ONLY, DATA FROM BACKEND

export default function Skill({ directionLeft }: Props) {
  return <div className='group relative flex cursor-pointer'>
    <motion.img initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} alt="HTML"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
      className='rounded-full border border-gray-500 object-cover h-auto w-20 md:w-28
      xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
    />
    <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
    group-hover:bg-white w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
      <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-black opacity-100'>100%</p>
      </div>
    </div>
  </div>
}