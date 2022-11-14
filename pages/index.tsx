import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Header, Hero, About, WorkExperience, Skills, Projects, Contact }
  from '../components/index';
import { useState, useEffect } from 'react';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo, fetchExperiences, fetchSkills, fetchProjects, fetchSocials }
  from '../utils/fetchData';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


export default function Home(
  { pageInfo, experiences, skills, projects, socials }: Props) {
  //------------Get Screen Width-------------
  const isClient = typeof window === 'object';
  const getWidth = () => isClient ? window.innerWidth : 1024;

  const [screenWidth, setScreenWidth] = useState<number>(1024);

  useEffect(() => {
    if (!isClient) return undefined;
    const handleResize = () => setScreenWidth(getWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  //------------Dark/Light mode state-------------
  const [dark, setDark] = useState<boolean>(true);

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
        <WorkExperience dark={dark} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 43200, //Re-generate the page every 12 hours;
  }
}
