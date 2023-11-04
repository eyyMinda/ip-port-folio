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
    className='section max-w-[2000px] xl:px-10 text-center md:text-left'>
    <h3 className='sectionHeading'>Skills</h3>
    <h3 className='sectionHeading normal-case w-[95vw] sm:w-[75vw] lg:w-[60vw] top-36 text-xs sm:text-sm tracking-widest'>
      Percentages reflect my practical experience with each skill rather than a comprehensive mastery of all aspects - my ability to implement the skills effectively in real-world projects.
    </h3>

    <div className='grid grid-cols-3 gap-1 sm:grid-cols-4 sm:gap-5 mt-32'>
      {skills?.map((skill, i) => (
        <Skill key={skill._id} skill={skill}
          directionLeft={skills.length / 2 > i + 1} />))}
    </div>
  </motion.div>
}
