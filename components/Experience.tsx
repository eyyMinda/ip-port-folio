import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function Experience({ }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
      className='h-screen relative overflow-hidden max-w-full px-10 mx-auto
      flex flex-col md:flex-rowjustify-evenly items-center text-left'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>

      <div>

      </div>
    </motion.div>
  )
}