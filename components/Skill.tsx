import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Skill as SkillType } from '../typings';

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
}

// TEMPLATE ONLY, DATA FROM BACKEND

export default function Skill({ directionLeft, skill }: Props) {
  const isSmScreen = useMediaQuery({ query: '(min-width: 640px)' });

  return <div className='group relative flex cursor-pointer'>
    <motion.img initial={{ x: directionLeft && isSmScreen ? -100 : 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .3 }}
      src={urlFor(skill.image).url()} alt={skill.title}
      className='rounded-full border border-gray-700 object-cover h-auto w-20 md:w-28
      xl:w-32 filter group-hover:grayscale transition duration-300 ease-in-out'
    />
    <div className='absolute opacity-0 group-hover:opacity-60 transition duration-300 ease-in-out
    group-hover:bg-white w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
      <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
      </div>
    </div>
  </div>
}