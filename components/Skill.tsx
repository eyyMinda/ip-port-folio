import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";

type Props = {
  skill: SkillType;
  dark: boolean;
};

export default function Skill({ skill, dark }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex relative flex-col items-center cursor-pointer group">
      {/* Skill Container */}
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28">
        {/* Background Circle */}
        <div
          className={`absolute inset-0 rounded-xl md:rounded-2xl border transition-all duration-300 ease-out ${
            dark
              ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 group-hover:border-primary-500/30"
              : "bg-gradient-to-br from-gray-100/90 to-gray-200/90 border-gray-300/50 group-hover:border-secondary-500/30"
          }`}
        />

        {/* Skill Image */}
        <div className="relative z-10 p-2 sm:p-3 md:p-4">
          <img
            src={urlFor(skill.image).url()}
            alt={skill.title}
            className="object-contain w-full h-full rounded-lg filter transition duration-300 ease-in-out group-hover:grayscale"
          />
        </div>

        {/* Progress Ring */}
        <div className="absolute inset-0 rounded-xl md:rounded-2xl">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className={dark ? "text-gray-700/30" : "text-gray-300/30"}
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 45}`}
              strokeDashoffset={`${2 * Math.PI * 45 * (1 - skill.progress / 100)}`}
              className={dark ? "text-primary-500" : "text-secondary-500"}
              style={{ strokeLinecap: "round" }}
            />
          </svg>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl ${
            dark
              ? "bg-gradient-to-br to-transparent from-primary-500/10"
              : "bg-gradient-to-br to-transparent from-secondary-500/10"
          }`}
        />
      </div>

      {/* Skill Info */}
      <div className="mt-1 text-center sm:mt-2">
        <p
          className={`text-xs font-medium transition-colors duration-300 truncate w-full ${
            dark ? "text-gray-300 group-hover:text-primary-300" : "text-gray-600 group-hover:text-secondary-600"
          }`}>
          {skill.title}
        </p>
        <p className={`text-xs font-semibold mt-0.5 ${dark ? "text-primary-400" : "text-secondary-500"}`}>
          {skill.progress}%
        </p>
      </div>
    </motion.div>
  );
}
