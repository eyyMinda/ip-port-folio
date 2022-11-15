import { Project as ProjectType } from '../typings';
import Project from './Project';

type Props = {
  dark: boolean;
  projects: ProjectType[];
}

export default function Projects({ dark, projects }: Props) {

  return <div className='section'>
    <h3 className='sectionHeading'>Projects</h3>

    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
     snap-x snap-mandatory z-10 scrollbar'>
      {projects?.map((project, i) => (
        <Project key={project._id} dark={dark} count={[i + 1, projects.length]} project={project} />
      ))}
    </div>

    {/* Background Line */}
    <div className='w-full absolute top-[30%] bg-secondary-300/10 left-0 h-[500px] -skew-y-12'></div>
  </div>
}