import { motion } from 'framer-motion';
import React from 'react';

type Props = { dark: boolean }

export default function About({ dark }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }} transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className='section text-center md:text-left max-w-7xl p-2 md:p-10'>

      <h3 className='sectionHeading'>About</h3>

      <motion.img initial={{ x: -200, opacity: 0 }} transition={{ duration: 1.4 }}
        whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        src="https://i.imgur.com/WG2hCZt.jpg"
        className='-mb-28 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
        object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'>

      </motion.img>
      <div className='space-y-4 sm:space-y-10 px-0 md:px-10 drop-shadow-2xl'>
        <h4 className='text-4xl font-semibold'>Know{' '}
          <span className={`${dark ? '' : 'light'} text-primary-800 underline decoration-primary-700`}>Thy</span>
          {' '}Author</h4>

        <p className='text-base tracking-wide'>
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
          <br />
          Below you will find my recent projects that showcase
          my skills in front end development.
        </p>
      </div>
    </motion.div>)
}