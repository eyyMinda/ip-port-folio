import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function Home() {
  const isClient = typeof window === 'object';
  const getWidth = () => isClient ? window.innerWidth : 1024;

  const [screenWidth, setScreenWidth] = useState<number>(1024);
  const [dark, setDark] = useState<boolean>(true);

  useEffect(() => {
    if (!isClient) return undefined;
    const handleResize = () => setScreenWidth(getWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <div className={`${dark ? '' : 'light'} layout scrollbar
     h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0`}>
      <Head>
        <title>IP:PORT --folio</title>
      </Head>

      <Header dark={dark} setDark={setDark} />

      <section id="hero" className='snap-start'>
        <Hero dark={dark} />
      </section>

      <section id="about" className='snap-center'>
        <About dark={dark} />
      </section>

      {/* <section id="experience" className='snap-center'>
        <Experience dark={dark} />
      </section> */}

      <section id="skills" className='snap-start'>
        <Skills dark={dark} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects dark={dark} />
      </section>

      <section id="contact" className='snap-start'>
        <Contact dark={dark} screenWidth={screenWidth} />
      </section>

      <Link href='#hero'>
        <footer className={`${dark ? '' : 'light'} back-to-top`}>
          <span></span>
          <span></span>
          <p>back to top</p>
        </footer>
      </Link>
    </div>
  )
}
