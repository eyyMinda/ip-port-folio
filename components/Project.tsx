import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Project as ProjectType } from '../typings';

type Props = {
  project: ProjectType;
  dark: boolean;
  count: Array<number>;
}

export default function Project({ project, count, dark }: Props) {
  return <div className='h-screen w-screen flex-shrink-0 snap-center
        flex flex-col space-y-5 items-center justify-center p-5 sm:p-20 md:p-44'>
    <a href={project.linkToBuild} target='_blank' rel="noreferrer">
      <motion.img initial={{ y: -300, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }} viewport={{ once: true }}
        src={urlFor(project.image).url()} alt={project.title}
        className='w-auto h-44' />
    </a>

    <div className='space-y-10 px-0 md:px-10 max-w-6xl text-center'>

      <div className='flex justify-center gap-4'>
        {project.technologies.map(skill => (
          <img key={skill._id} className='w-12 h-auto' src={urlFor(skill.image).url()} alt={skill.title} />
        ))}
      </div>

      <h4 className={`${dark ? '' : 'light'} h4`}>
        <span>Case Study {count[0]} of {count[1]}:</span>{" "}{project.title}
      </h4>

      <p className='text-lg md:text-left'>{project.summary}</p>
    </div>
  </div>
}