import { Project as ProjectType } from '../typings';
import Project from './Project';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

type Props = {
  dark: boolean;
  projects: ProjectType[];
}

export default function Projects({ dark, projects }: Props) {
  return <div className='section relative'>
    <h3 className='sectionHeading'>Projects</h3>

    <div className={`${dark ? '' : 'light'} relative w-full flex
     overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-10 scrollbar`}>
      {projects?.map((project, i) => (
        <Project key={project._id} dark={dark} count={[i + 1, projects.length]} project={project} />
      ))}
    </div>

    <div className='left-10 swipeBtn bg-gradient-to-l animate-gradientXreverse'>
      <ChevronDoubleLeftIcon className='w-7 h-auto hidden md:block' /></div>
    <div className='right-10 swipeBtn bg-gradient-to-r animate-gradientX'>
      <ChevronDoubleRightIcon className='w-7 h-auto hidden md:block' /></div>

    {/* Background Line */}
    <div className='w-full absolute top-[30%] bg-secondary-500/10 left-0 h-[500px] -skew-y-12'></div>
  </div>
}