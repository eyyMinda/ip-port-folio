import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
  dark: boolean;
  pageInfo: PageInfo;
}

export default function Hero({ dark, pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`${pageInfo?.name}ugas Strakšys`, "Logical-Competitive.jsx", "<YetPlayful&Creative />"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
      <BackgroundCircles dark={dark} />

      <div className='z-20'>
        <h2 className={`${dark ? 'text-gray-500 ' : 'text-gray-800 '}
         text-sm uppercase tracking-[10px]`}>{pageInfo?.role}</h2>

        <h1 className='text-4xl lg:text-5xl font-semibold py-5 px-10'>
          <span>{text}</span>
          <Cursor cursorColor={dark ? 'darkred' : 'coral'} />
        </h1>

        <div className={`${dark ? '' : 'light'} pt-5`}>
          <Link href="#about"><button className='heroButton'>About</button></Link>
          <Link href="#experience"><button className='heroButton'>Experience</button></Link>
          <Link href="#skills"><button className='heroButton'>Skills</button></Link>
          <Link href="#projects"><button className='heroButton'>Projects</button></Link>
        </div>
      </div>

    </div>
  );
}