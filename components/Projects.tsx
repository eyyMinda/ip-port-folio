import { Project as ProjectType } from "../typings";
import Project from "./Project";
import { motion } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import SectionDescription from "./ui/SectionDescription";

type Props = {
  dark: boolean;
  projects: ProjectType[];
};

export default function Projects({ dark, projects }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, projects.length - cardsPerView);

  // Calculate the width of each card including padding
  const cardWidth = isMobile ? 100 : 50; // 100% for mobile (1 card), 50% for desktop (2 cards)

  const nextProject = useCallback(() => {
    if (isTransitioning || currentIndex >= maxIndex) return;

    setIsTransitioning(true);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);

    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentIndex, maxIndex]);

  const prevProject = useCallback(() => {
    if (isTransitioning || currentIndex <= 0) return;

    setIsTransitioning(true);
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);

    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setCurrentIndex(index);

      setTimeout(() => setIsTransitioning(false), 300);
    },
    [isTransitioning]
  );

  // Drag functionality
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isTransitioning) return;

    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
    setDragCurrent(clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || isTransitioning) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragCurrent(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging || isTransitioning) return;

    const dragDistance = dragCurrent - dragStart;
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        // Dragged right - go to previous
        prevProject();
      } else {
        // Dragged left - go to next
        nextProject();
      }
    }

    setIsDragging(false);
    setDragStart(0);
    setDragCurrent(0);
  };

  // Global mouse/touch event listeners for better drag handling
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handleDragMove(e as any);
      }
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleDragEnd();
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="section max-w-[2000px] xl:px-10">
      <h3 className="sectionHeading">Projects</h3>

      {/* Description */}
      <SectionDescription dark={dark}>
        A collection of my recent projects showcasing my skills in full-stack development, modern frameworks, and
        creative problem-solving.
      </SectionDescription>

      {/* Carousel Container */}
      <div className="px-4 mt-20 md:mt-24">
        <div className="relative mx-auto max-w-4xl">
          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out select-none cursor-grab active:cursor-grabbing"
              style={{
                transform: `translateX(calc(-${currentIndex * cardWidth}% + ${
                  isDragging ? (dragCurrent - dragStart) * 0.5 : 0
                }px))`,
                transition: isDragging ? "none" : "transform 300ms ease-in-out"
              }}
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}>
              {projects?.map((project, i) => (
                <div key={project._id} className={`flex-shrink-0 ${isMobile ? "px-2 w-full" : "px-2 w-1/2"}`}>
                  <Project project={project} dark={dark} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {projects.length > cardsPerView && (
            <>
              <button
                onClick={prevProject}
                disabled={currentIndex === 0 || isTransitioning}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 z-10 ${
                  currentIndex === 0 || isTransitioning
                    ? "bg-gray-700/30 text-gray-500 cursor-not-allowed"
                    : "bg-black/50 text-white hover:bg-black/70 cursor-pointer"
                }`}>
                <ChevronLeftIcon className="w-6 h-6" />
              </button>

              <button
                onClick={nextProject}
                disabled={currentIndex >= maxIndex || isTransitioning}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full transition-all duration-200 z-10 ${
                  currentIndex >= maxIndex || isTransitioning
                    ? "bg-gray-700/30 text-gray-500 cursor-not-allowed"
                    : "bg-black/50 text-white hover:bg-black/70 cursor-pointer"
                }`}>
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {projects.length > cardsPerView && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    i === currentIndex
                      ? dark
                        ? "bg-primary-500 scale-125"
                        : "bg-secondary-500 scale-125"
                      : "bg-gray-400 hover:bg-gray-300"
                  } ${isTransitioning ? "cursor-not-allowed" : "cursor-pointer"}`}
                />
              ))}
            </div>
          )}

          {/* Project Counter */}
          <div className="mt-4 text-center">
            <span className={`text-sm ${dark ? "text-gray-400" : "text-gray-600"}`}>
              {currentIndex + 1} of {maxIndex + 1}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
