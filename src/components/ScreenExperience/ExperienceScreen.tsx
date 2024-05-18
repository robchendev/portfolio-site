import { Grid, HStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Badge from "./Badge";
import experience, { ExperienceInfo } from "../config/experience";
import ExperienceSlide from "./ExperienceSlide";

const ExperienceScreen = () => {
  const slideRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToSlide = (id: string) => {
    const container = scrollContainerRef.current;
    const target = slideRefs.current[id];
    if (container && target) {
      container.scrollTo({
        top: target.offsetTop - container.offsetTop, // customize the exact value for consistency
        behavior: "smooth",
      });
    }
  };

  // setup observer to determine which badge is active
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer
  const setupObserver = () => {
    const observerOptions = {
      root: scrollContainerRef.current,
      rootMargin: "0px",
      threshold: 0.6,
    };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observerRef.current = observer;
    const currentSlideRefs = slideRefs.current;
    Object.values(currentSlideRefs).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  };

  useEffect(() => {
    setupObserver();
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <HStack spacing={0} className="bg-white h-full w-full">
      <div
        ref={scrollContainerRef}
        className="w-7/8 h-full text-[2.5rem] text-center overflow-y-scroll"
      >
        {experience.map((exp: ExperienceInfo, index: number) => (
          <ExperienceSlide
            experience={exp}
            key={index}
            setRef={(el) => (slideRefs.current[exp.id] = el)}
          />
        ))}
      </div>
      <Grid
        gap={0}
        className="w-1/8 h-full bg-gradient-to-l from-gray-300 to-white flex justify-center items-center "
      >
        {[...Array(4)].map((_, index) => {
          return (
            <Badge
              key={index}
              onClick={() => {
                if (experience[index]) {
                  scrollToSlide(experience[index].id);
                }
              }}
              isActive={experience[index] && experience[index].id === activeId}
            >
              {experience[index] && experience[index]?.logo}
            </Badge>
          );
        })}
      </Grid>
    </HStack>
  );
};

export default ExperienceScreen;
