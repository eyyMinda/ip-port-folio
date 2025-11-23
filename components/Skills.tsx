import { Skill as SkillType } from "../typings";
import Skill from "./Skill";
import SectionDescription from "./ui/SectionDescription";
import { useEffect, useRef } from "react";

type Props = {
  dark: boolean;
  skills: SkillType[];
};

export default function Skills({ dark, skills }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const children = Array.from(gridRef.current.children);
    children.forEach(child => observer.observe(child));

    return () => {
      children.forEach(child => observer.unobserve(child));
      observer.disconnect();
    };
  }, [skills]);

  return (
    <div className="section max-w-[2000px] xl:px-10 text-center md:text-left">
      <h3 className="sectionHeading">Skills</h3>

      {/* Description */}
      <SectionDescription dark={dark}>
        Percentages reflect my practical experience with each skill rather than comprehensive mastery - my ability to
        implement skills effectively in real-world projects.
      </SectionDescription>

      {/* Skills Grid */}
      <div
        ref={gridRef}
        className="grid grid-cols-5 gap-1.5 px-1 mt-24 sm:grid-cols-5 sm:gap-3 md:grid-cols-6 md:gap-4 lg:grid-cols-7 xl:grid-cols-8 md:mt-20 lg:mt-24 md:px-0 max-h-[55vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-900/20 scrollbar-thumb-primary-500/50">
        {skills?.map((skill, i) => (
          <Skill key={skill._id} skill={skill} dark={dark} />
        ))}
      </div>
    </div>
  );
}
