import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Experience } from "../typings";
import Image from "next/image";

type Props = {
  exp: Experience;
};

export default function ExperienceCard({ exp }: Props) {
  const isBigScreen = useMediaQuery({
    query: "only screen and (min-width : 460px)"
  });

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col flex-shrink-0 snap-center
        w-full md:w-[500px] xl:w-[600px] bg-gradient-to-br from-gray-800/90 to-gray-900/90
        backdrop-blur-sm border border-gray-700/50 rounded-2xl md:rounded-3xl overflow-hidden
        hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5
        transition-all duration-300 ease-out max-h-[85vh]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 from-primary-500/5 group-hover:opacity-100" />

      {/* Header section */}
      <div className="relative p-4 pb-3 md:p-6 md:pb-4">
        <div className="flex items-start space-x-4">
          {isBigScreen && (
            <div className="relative flex-shrink-0">
              <div className="overflow-hidden w-12 h-12 rounded-xl border sm:w-16 sm:h-16 md:rounded-2xl xl:w-20 xl:h-20 bg-gray-700/50 border-gray-600/50">
                <Image
                  src={urlFor(exp.companyImage).url()}
                  alt={exp.company}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r rounded-xl opacity-0 blur transition-opacity duration-300 md:rounded-2xl from-primary-500/20 to-secondary-500/20 group-hover:opacity-100" />
            </div>
          )}

          <div className="flex-1 min-w-0">
            <h4 className="mb-1 text-lg font-bold text-white sm:text-xl md:text-2xl xl:text-3xl">{exp.jobTitle}</h4>
            <p className="mb-2 text-sm font-semibold md:mb-3 sm:text-base md:text-lg xl:text-xl text-primary-400">
              {exp.company}
            </p>

            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
              {exp.technologies.map(tech => (
                <div
                  key={tech._id}
                  className="flex items-center space-x-1.5 md:space-x-2 px-2 py-1 md:px-3 md:py-1.5 bg-gray-700/50 rounded-full border border-gray-600/30 hover:border-primary-500/50 transition-colors duration-200">
                  <Image
                    src={urlFor(tech.image).url()}
                    alt={tech.title}
                    width={16}
                    height={16}
                    className="object-contain w-3 h-3 md:w-4 md:h-4"
                  />
                  <span className="text-xs font-medium text-gray-300">{tech.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Date badge */}
        <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full border bg-primary-500/10 border-primary-500/20">
          <span className="text-xs font-medium md:text-sm text-primary-300">
            {new Date(exp.dateStarted).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric"
            })}{" "}
            -{" "}
            {exp.currentlyWorking
              ? "Present"
              : new Date(exp.dateEnded).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric"
                })}
          </span>
        </div>
      </div>

      {/* Content section */}
      <div className="flex-1 px-4 pb-4 md:px-6 md:pb-6">
        <ul className="space-y-2 md:space-y-3 max-h-[120px] xs:max-h-[150px] sm:max-h-[180px] md:max-h-[200px] lg:max-h-[250px] xl:max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-track-gray-900/20 scrollbar-thumb-primary-500/50">
          {exp.points.map((point, i) => (
            <li key={i} className="flex items-start space-x-2 leading-relaxed text-gray-300 md:space-x-3">
              <div className="flex-shrink-0 mt-1.5 md:mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary-500" />
              <span className="text-xs sm:text-sm xl:text-base">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
