import React from 'react';
import { motion } from 'framer-motion';

type Props = { dark: boolean }

export default function Experience({ dark }: Props) {
  return (
    <motion.div initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }}
      className='section overflow-hidden text-left max-w-full px-10'>
      <h3 className='sectionHeading'>
        Experience
      </h3>

      <div>

      </div>
    </motion.div>
  )
}