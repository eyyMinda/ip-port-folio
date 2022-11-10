import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type DarkMode = {
  dark: boolean,
  setDark: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ dark, setDark }: DarkMode) {
  const toggleDarkMode = (checked: boolean) => {
    setDark(checked);
  };

  const [fgcolor, setFgcolor] = useState<string>('gray');
  useEffect(() => {
    setFgcolor(_ => dark ? 'gray' : 'coral');
  }, [dark]);

  // return <header className={`sticky top-0 p-5 flex justify-between items-center
  // mx-auto max-w-7xl z-20 ${dark ? '' : 'light'}`}>
  return <header className={`sticky top-0 p-5 flex justify-items-center
  mx-auto max-w-7xl z-20 items-center ${dark ? '' : 'light'}`}>

    <motion.div className='flex flex-row items-center flex-grow md:flex-grow-0'
      initial={{ x: -500, opacity: 0, scale: .5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
      <SocialIcon url='https://www.facebook.com/RE.Mindau' className='socialIcons'
        fgColor={fgcolor} bgColor='transparent' />
      <SocialIcon url='https://www.linkedin.com/in/eyyminda/' className='socialIcons'
        fgColor={fgcolor} bgColor='transparent' />
      <SocialIcon url='https://github.com/eyyMinda' className='socialIcons'
        fgColor={fgcolor} bgColor='transparent' />
    </motion.div>

    <div className='md:flex-grow mt-1 mr-4 md:mr-0 mb-0 flex justify-center'>
      <DarkModeSwitch checked={dark} onChange={toggleDarkMode}
        size={30} sunColor={'#FCE570'} moonColor={'#FEFCD7'} />
    </div>

    <motion.div className='flex flex-row items-center cursor-pointer md:pr-3 socialIcons'
      initial={{ x: 500, opacity: 0, scale: .5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.3 }}>

      <SocialIcon className='cursor-pointer' network="email"
        fgColor={fgcolor} bgColor='transparent' />
      <p className='uppercase hidden md:inline-flex text-sm font-semibold'> Get In Touch</p>
    </motion.div>

  </header >
}
