import { Grid, HStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import Badge from "./Badge";
import experience, { ExperienceInfo } from "../config/experience";
import ExperienceSlide from "./ExperienceSlide";

const ExperienceScreen = () => {
  const slideRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (id: string) => {
    const container = scrollContainerRef.current;
    const target = slideRefs.current[id];

    if (container && target) {
      const offset = target.offsetTop - container.offsetTop;
      container.scrollTo({
        top: offset + 2, // customize the exact value for consistency
        behavior: "smooth",
      });
    }
  };
  return (
    <HStack spacing={0} className="bg-white h-full w-full">
      <div
        ref={scrollContainerRef}
        className="w-3/4 h-full text-[2.5rem] text-center overflow-y-scroll"
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
        templateColumns="repeat(2, 1fr)"
        gap={0}
        className="w-1/4 h-full bg-slate-300 flex justify-center items-center px-2 py-2"
      >
        {[...Array(8)].map((_, index) => {
          return (
            <Badge
              key={index}
              onClick={() => {
                if (experience[index]) {
                  scrollToSlide(experience[index].id);
                }
              }}
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
