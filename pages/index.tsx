import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import { useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <div className={`${dark ? '' : 'light'} layout scrollbar
     h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0`}>
      <Head>
        <title>IP:PORT --folio</title>
      </Head>

      <Header dark={dark} setDark={setDark} />

      <section id="hero" className='snap-always snap-start'>
        <Hero dark={dark} />
      </section>

      <section id="about" className='snap-always snap-center'>
        <About dark={dark} />
      </section>

      <section id="experience" className='snap-always snap-center'>
        <Experience dark={dark} />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
      <a href='#hero' className={`${dark ? '' : 'light'} back-to-top`}>
        <span></span>
        <span></span>
        <p>back to top</p>
      </a>
    </div>
  )
}
