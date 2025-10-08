import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import { Project as ProjectType } from "../typings";
import Image from "next/image";
import { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import ImageModal from "./ui/ImageModal";

type Props = {
  project: ProjectType;
  dark: boolean;
};

export default function Project({ project, dark }: Props) {
  const [isImageOpen, setIsImageOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden relative mx-auto w-full max-w-sm bg-gradient-to-br rounded-2xl border backdrop-blur-sm transition-all duration-300 ease-out group from-gray-800/90 to-gray-900/90 border-gray-700/50 md:rounded-3xl hover:border-primary-500/30 hover:shadow-xl hover:shadow-primary-500/5 md:max-w-none">
        {/* Project Image */}
        <div
          className="overflow-hidden relative h-48 cursor-pointer sm:h-56 md:h-64"
          onClick={() => setIsImageOpen(true)}>
          <Image
            src={urlFor(project.image).url()}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 pointer-events-none group-hover:scale-105"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-300 from-black/60 group-hover:opacity-100" />

          {/* Preview Button */}
          <button
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              setIsImageOpen(true);
            }}
            className="absolute top-4 right-4 z-10 p-2 rounded-full opacity-0 transition-all duration-300 cursor-pointer bg-black/50 group-hover:opacity-100 hover:bg-black/70">
            <EyeIcon className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Project Content */}
        <div className="p-4 md:p-6">
          {/* Project Title */}
          <h4 className={`text-lg md:text-xl font-bold mb-3 ${dark ? "text-white" : "text-gray-900"}`}>
            {project.title}
          </h4>

          {/* Project Summary */}
          <div
            className={`text-sm md:text-base mb-4 leading-relaxed max-h-[150px] overflow-y-auto scrollbar-thin scrollbar-track-gray-900/20 scrollbar-thumb-primary-500/50 ${
              dark ? "text-gray-300" : "text-gray-600"
            }`}>
            {project.summary}
          </div>

          {/* Technologies and Link Row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <div
                  key={tech._id}
                  className={`flex items-center space-x-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                    dark
                      ? "bg-gray-700/50 text-gray-300 border border-gray-600/30"
                      : "bg-gray-100/50 text-gray-600 border border-gray-300/30"
                  }`}>
                  <Image
                    src={urlFor(tech.image).url()}
                    alt={tech.title}
                    width={12}
                    height={12}
                    className="object-contain w-3 h-3"
                  />
                  <span>{tech.title}</span>
                </div>
              ))}
            </div>

            {/* Project Link */}
            <a
              href={project.linkToBuild}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                dark
                  ? "border bg-primary-500/10 text-primary-400 border-primary-500/20 hover:bg-primary-500/20 hover:border-primary-500/40"
                  : "border bg-secondary-500/10 text-secondary-600 border-secondary-500/20 hover:bg-secondary-500/20 hover:border-secondary-500/40"
              }`}>
              View Project
            </a>
          </div>
        </div>
      </motion.div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageOpen}
        onClose={() => setIsImageOpen(false)}
        imageUrl={urlFor(project.image).url()}
        alt={project.title}
      />
    </>
  );
}
