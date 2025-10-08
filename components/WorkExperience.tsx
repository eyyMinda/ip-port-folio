import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  dark: boolean;
  experiences: Experience[];
};

export default function WorkExperience({ dark, experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, right: 100 }}
      whileInView={{ opacity: 1, right: 0 }}
      transition={{ duration: 1.5 }}
      className="overflow-hidden px-0 mx-2 max-w-full text-left section sm:px-10">
      <h3 className="sectionHeading">Experience</h3>

      <div
        className={`w-full flex justify-{experiences?.length === 1 ? 'center' : 'start'} overflow-x-scroll py-5 mt-10 snap-x
      snap-mandatory scrollbar-thin ${!dark && "light"} space-x-5`}>
        {experiences?.map(exp => (
          <ExperienceCard key={exp._id} exp={exp} dark={dark} />
        ))}
      </div>
    </motion.div>
  );
}
