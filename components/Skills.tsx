import { motion } from 'framer-motion';
import { Skill as SkillType } from '../typings';
import Skill from './Skill';

type Props = {
  dark: boolean;
  skills: SkillType[];
}

export default function Skills({ dark, skills }: Props) {
  return <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='section max-w-[2000px] xl:px-10 xl:space-y-0 text-center md:text-left'>
    <h3 className='sectionHeading'>Skills</h3>
    <h3 className='sectionHeading top-36 text-sm tracking-widest'>
      Hover to preview my current skill-progress
    </h3>

    <div className='grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-5'>
      {skills?.map((skill, i) => (<Skill key={skill._id} skill={skill}
      />))}
      {/* directionLeft */}
    </div>
  </motion.div>
}