import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = { dark: boolean }

export default function Experience({ dark }: Props) {
  return (
    <motion.div initial={{ opacity: 0, right: -100 }}
      whileInView={{ opacity: 1, right: 0 }} transition={{ duration: 1.5 }}
      className='section overflow-hidden text-left max-w-full px-10'>
      <h3 className='sectionHeading'>
        Experience
      </h3>

      <div className={`w-full flex overflow-x-scroll p-5 mt-10 snap-x
      snap-mandatory scrollbar ${dark ? '' : 'light'} space-x-5`}>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}