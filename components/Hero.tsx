import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: ["Hey! Call Me Minda 【 ͠° ͜ʖ ͡°】", "Guy-Who-Loves-To-Fly.tsx", "<ButCodingIsAsExciting />"],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 tracking-[10px]'>
          Junior Front-End Developer
        </h2>
        <h1 className='text-4xl lg:text-5xl font-semibold py-5 px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#8B0000' />
        </h1>

        <div className='pt-5'>
          <Link href="#about"><button className='heroButton'>About</button></Link>
          <Link href="#experience"><button className='heroButton'>Experience</button></Link>
          <Link href="#skills"><button className='heroButton'>Skills</button></Link>
          <Link href="#projects"><button className='heroButton'>Projects</button></Link>
        </div>
      </div>
    </div>
  );
}