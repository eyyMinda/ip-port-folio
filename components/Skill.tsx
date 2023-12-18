import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { Skill as SkillType } from '../typings';

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
}

export default function Skill({ directionLeft, skill }: Props) {
  const isSmScreen = useMediaQuery({query:"only screen and (min-width : 768px)"});

  return <div className='group relative flex cursor-pointer'>
    <motion.img
      src={urlFor(skill.image).url()} alt={skill.title}
      className='rounded-full border border-gray-700 object-cover h-auto w-20 md:w-24 xl:w-28 aspect-square filter group-hover:grayscale transition duration-300 ease-in-out'
      initial={isSmScreen ? { x: directionLeft ? -100 : 100, opacity: 0 } : {}}
      whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}
    />

    <div className='absolute opacity-0 group-hover:opacity-70 transition duration-300 ease-in-out
      group-hover:bg-white w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full z-0'>
      <div className='flex flex-col items-center justify-center h-full font-bold text-black'>
        <p className='text-sm md:text-xl opacity-100'>{skill.title}</p>
        <p className='text-xl md:text-3xl opacity-100'>{skill.progress}%</p>
      </div>
    </div>
  </div>
}
