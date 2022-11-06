import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative max-w-7xl text-center md:text-left
  flex flex-col justify-evenly items-center md:flex-row p-2 md:p-10 mx-auto'>

      <h3 className='absolute top-24 uppercase tracking-[20px]
    text-gray-500 text-2xl'>About</h3>

      <motion.img initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.imgur.com/WG2hCZt.jpg"
        className='-mb-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
      object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'>

      </motion.img>
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Know{' '}
          <span className='text-red-700 underline decoration-red-900'>Thy</span>
          {' '}Author</h4>

        <p className='text-base tracking-wider'>
          Expert QA/Tester in my psyche.
          Whether it is an IT field, video games or psychology,
          social interactions and decision making.
          All of the experiences I had, built me to be continuously
          self development seeking individual.
          Therefore coding makes me feel alive,
          constantly solving problems, checking for faults
          and improvements to implement. Always thinking of the
          big picture and how things connect to each other
          which allows me to learn based on previous knowledge
          that some might take as completely irrelevant and unrelated.
        </p>
      </div>
    </motion.div>)
}