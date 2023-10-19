import { Project as ProjectType } from '../typings';
import Project from './Project';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState, useEffect } from 'react';

type Props = {
  dark: boolean;
  projects: ProjectType[];
}

export default function Projects({ dark, projects }: Props) {
const [showLeft, setShowLeft] = useState(false);
const [showRight, setShowRight] = useState(true);
const wrapRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const wrap = wrapRef.current;
  const handleScroll = () => {
    const { scrollLeft, clientWidth } = wrap || {};
    if (scrollLeft !== undefined && clientWidth) {
      setShowLeft(scrollLeft >= 100);
      setShowRight(scrollLeft < (projects?.length || 0) * clientWidth - clientWidth);
    }
  };

  wrap?.addEventListener('scroll', handleScroll);
  return () => wrap?.removeEventListener('scroll', handleScroll);
}, [projects]);

const xScroll = (dir: 'left' | 'right') => {
  const { scrollLeft, clientWidth } = wrapRef.current || {};
  if (scrollLeft !== undefined && clientWidth) {
    wrapRef.current.scrollLeft = scrollLeft + (dir === 'left' ? -clientWidth : clientWidth);
  }
};


  return <div className='section relative'>
    <h3 className='sectionHeading'>Projects</h3>

    <div ref={wrapRef} className={`${!dark && 'light'} relative w-full flex scroll-smooth
     overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar`}>
      {projects?.map((project, i) => (
        <Project key={project._id} dark={dark} count={[i + 1, projects.length]} project={project} />
      ))}
    </div>

    <div className={`left-10 swipeBtn bg-gradient-to-l animate-gradientXreverse
    ${!showLeft && 'hidden'} transition-opacity`}>
      <ChevronDoubleLeftIcon className='w-[100%] h-auto hidden md:block px-2' onClick={() => xScroll('left')} />
    </div>
    <div className={`right-10 swipeBtn bg-gradient-to-r animate-gradientX
    ${!showRight && 'hidden'}`}>
      <ChevronDoubleRightIcon className='w-[100%] h-auto hidden md:block px-2' onClick={() => xScroll('right')} />
    </div>

    {/* Background Line */}
    <div className='w-full absolute top-[30%] bg-secondary-500/10 left-0 h-[500px] -skew-y-12'></div>
  </div>
}
