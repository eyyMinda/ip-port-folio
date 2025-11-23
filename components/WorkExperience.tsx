import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import { useEffect, useRef } from "react";

type Props = {
  dark: boolean;
  experiences: Experience[];
};

export default function WorkExperience({ dark, experiences }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="overflow-hidden px-0 mx-2 max-w-full text-left section sm:px-10">
      <h3 className="sectionHeading">Experience</h3>

      <div
        className={`w-full flex justify-{experiences?.length === 1 ? 'center' : 'start'} overflow-x-scroll py-5 mt-10 snap-x
      snap-mandatory scrollbar-thin ${!dark && "light"} space-x-5`}>
        {experiences?.map(exp => (
          <ExperienceCard key={exp._id} exp={exp} dark={dark} />
        ))}
      </div>
    </div>
  );
}
