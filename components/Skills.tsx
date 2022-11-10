import { motion } from 'framer-motion'
import React from 'react'

type Props = { dark: boolean }

export default function Skills({ dark }: Props) {
  return <motion.div initial={{}}
    className='section max-w-[2000px] xl:px-10 xl:space-y-0 text-center md:text-left'>
    <h3 className='sectionHeading'>Skills</h3>


  </motion.div>
}