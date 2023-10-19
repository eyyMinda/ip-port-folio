import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
  exp: Experience;
}

export default function ExperienceCard({ exp }: Props) {
  const isBigScreen = useMediaQuery({query:"only screen and (min-width : 460px)"});
  return <motion.article initial={{ opacity: 0.4 }}
    whileInView={{ opacity: 1 }} transition={{ duration: .4 }}
    className='flex flex-col rounded-2xl items-center flex-shrink-0 snap-center
    w-full md:w-[600px] xl:w-[900px] space-y-0 sm:space-y-4 bg-gray-700 
    p-4 sm:p-10 overflow-hidden'>

    {isBigScreen && <motion.img initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className='w-16 h-16 rounded-full xl:w-[200px] xl:h-[200px]
      object-cover object-center'
      src={urlFor(exp.companyImage).url()} alt={exp.company} />}

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

      <ul className='list-disc xs:space-y-2 ml-5 text-lg pr-4
       max-h-[200px] xs:max-h-[300px] sm:max-h-[100%] overflow-y-scroll
      scrollbar-thin scrollbar-track-gray-900/20 scrollbar-thumb-gray-500'>
        {exp.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  </motion.article>
}
