import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Header, Hero, About, WorkExperience, Skills, Projects, Contact }
  from '../components/index';
import { useState } from 'react';
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

export default function Home({ pageInfo, experiences, skills, projects, socials }: Props) {
  //------------Dark/Light mode state-------------
  const [dark, setDark] = useState<boolean>(true);

  return (
    <div className={`${!dark && 'light'} layout scrollbar
     h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0`}>
      <Head>
        <title>IP:PORT --folio</title>
        <meta name="description" content="Nextjs portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
        <script>(function() {emailjs.init({publicKey: process.env.NEXT_PUBLIC_EMAILJS_ID});})();</script>
      </Head>

      <Header dark={dark} setDark={setDark} socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero dark={dark} pageInfo={pageInfo} isExperiences={experiences.length} />
      </section>

      <section id="about" className='snap-center'>
        <About dark={dark} pageInfo={pageInfo} />
      </section>

      {experiences.length && <section id="experience" className='snap-center'>
        <WorkExperience dark={dark} experiences={experiences} />
      </section>}

      <section id="skills" className='snap-start'>
        <Skills dark={dark} skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects dark={dark} projects={projects} />
      </section>

      <section id="contact" className='snap-start'>
        <Contact dark={dark} pageInfo={pageInfo} />
      </section>

      <Link href='#hero'>
        <footer className={`${!dark && 'light '}back-to-top`}>
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
    revalidate: 60 * 5,
  }
};
