import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import { useState, useRef, useEffect, useCallback } from "react";

type Props = {
  dark: boolean;
  experiences: Experience[];
};

export default function WorkExperience({ dark, experiences }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragCurrent, setDragCurrent] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, experiences.length - cardsPerView);

  // Calculate the width of each card including padding
  const cardWidth = isMobile ? 100 : 50; // 100% for mobile (1 card), 50% for desktop (2 cards)

  const nextExperience = useCallback(() => {
    if (isTransitioning || currentIndex >= maxIndex) return;

    setIsTransitioning(true);
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);

    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentIndex, maxIndex]);

  const prevExperience = useCallback(() => {
    if (isTransitioning || currentIndex <= 0) return;

    setIsTransitioning(true);
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);

    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, currentIndex]);

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
        prevExperience();
      } else {
        // Dragged left - go to next
        nextExperience();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  return (
    <div ref={sectionRef} className="overflow-hidden px-0 mx-2 max-w-full text-left section sm:px-10">
      <h3 className="sectionHeading">Experience</h3>

      {/* Carousel Container */}
      <div className="px-2 mt-20 w-full md:mt-10 sm:px-4">
        <div className="relative mx-auto max-w-6xl">
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
              {experiences?.map((exp, i) => (
                <div key={exp._id} className={`flex-shrink-0 ${isMobile ? "px-1 w-full" : "px-1 w-1/2"}`}>
                  <ExperienceCard exp={exp} dark={dark} />
                </div>
              ))}
            </div>
          </div>

          {/* Scrollbar Indicator */}
          {experiences.length > cardsPerView && (
            <div className="mt-4">
              {/* Scrollbar Track */}
              <div className={`h-1.5 rounded-full overflow-hidden ${dark ? "bg-gray-800/50" : "bg-gray-200/50"}`}>
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    dark ? "bg-primary-500" : "bg-secondary-500"
                  }`}
                  style={{
                    width: `${(cardsPerView / experiences.length) * 100}%`,
                    transform: `translateX(${
                      maxIndex > 0 ? (currentIndex / maxIndex) * (100 - (cardsPerView / experiences.length) * 100) : 0
                    }%)`
                  }}
                />
              </div>
              {/* Experience Counter */}
              <div className="mt-3 text-center">
                <span className={`text-xs ${dark ? "text-gray-400" : "text-gray-600"} leading-none`}>
                  {currentIndex + 1} of {maxIndex + 1}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
