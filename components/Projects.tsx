import { Project as ProjectType } from '../typings';
import Project from './Project';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';

type Props = {
  dark: boolean;
  projects: ProjectType[];
}

export default function Projects({ dark, projects }: Props) {
  const [showLeft, setShowLeft] = useState<boolean>(false);
  const [showRight, setShowRight] = useState<boolean>(true);
  const wrap = useRef<HTMLDivElement>(null);

  const xScroll = (dir: string) => {
    if (!wrap.current) return;
  
    const pageW = wrap.current.clientWidth;
    const offsetChange = dir === 'left' ? -pageW : pageW;
    wrap.current.scrollLeft += offsetChange;
    const currentOffset = wrap.current.scrollLeft;
    
    setShowLeft(currentOffset >= 100);
    setShowRight(currentOffset < wrap.current.scrollWidth - pageW);
  }

  return <div className='section relative'>
    <h3 className='sectionHeading'>Projects</h3>

    <div ref={wrap} className={`${dark ? '' : 'light'} relative w-full flex scroll-smooth
     overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar`}>
      {projects?.map((project, i) => (
        <Project key={project._id} dark={dark} count={[i + 1, projects.length]} project={project} />
      ))}
    </div>

    <div className={`left-10 swipeBtn bg-gradient-to-l animate-gradientXreverse
    ${showLeft ? '' : 'hidden'} transition-opacity`}>
      <ChevronDoubleLeftIcon className='w-[100%] h-auto hidden md:block px-2' onClick={() => xScroll('left')} />
    </div>
    <div className={`right-10 swipeBtn bg-gradient-to-r animate-gradientX
    ${showRight ? '' : 'hidden'}`}>
      <ChevronDoubleRightIcon className='w-[100%] h-auto hidden md:block px-2' onClick={() => xScroll('right')} />
    </div>

    {/* Background Line */}
    <div className='w-full absolute top-[30%] bg-secondary-500/10 left-0 h-[500px] -skew-y-12'></div>
  </div>
}
