import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
  exp: Experience;
}

// TEMPLATE ONLY, DATA FROM BACKEND

export default function ExperienceCard({ exp }: Props) {
  return <motion.article initial={{ opacity: 0.4 }}
    whileInView={{ opacity: 1 }} transition={{ duration: .4 }}
    className='flex flex-col rounded-2xl items-center space-y-4 flex-shrink-0
    w-[350px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-700
    p-10 cursor-pointer overflow-hidden'>

    <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
      object-cover object-center'
      src={urlFor(exp.companyImage).url()} alt={exp.company} />

    <div className='px-0 md:px-10 text-white'>
      <h4 className='text-4xl font-light'>{exp.jobTitle}</h4>
      <p className='font-bold text-2xl mt-1'>{exp.company}</p>

      <div className='flex space-x-2 my-2'>
        {exp.technologies.map(tech => (
          <img className='w-8 h-auto mr-1' key={tech._id}
            src={urlFor(tech.image).url()} alt={tech.title} />
        ))}
      </div>

      <p className='py-4 text-gray-500'>
        {new Date(exp.dateStarted).toDateString()} -{' '}
        {exp.currentlyWorking ? 'Present' : new Date(exp.dateEnded).toDateString()}
      </p>

      <ul className='list-disc space-y-2 ml-5 text-lg pr-4
       overflow-y-scroll scrollbar scrollbar-track-gray-700'>
        {exp.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  </motion.article>
}