import { HStack } from "@chakra-ui/react";
import React, { useRef } from "react";
import { ExperienceInfo } from "../config/experience";

const ExperienceSlide = ({
  experience: { role, id, name, startDate, endDate, description },
  setRef,
}: {
  experience: ExperienceInfo;
  setRef: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <div ref={setRef} id={id} className="h-full">
      <HStack justify="space-between" className="w-full">
        <div className="text-left">
          <h2 className="text-[2.25rem]">{role}</h2>
          <h3 className="text-[2rem]">{name}</h3>
          <p className="text-[2rem]">
            {startDate} - {endDate}
          </p>
        </div>
        <div className="text-right"></div>
      </HStack>
      <div className="text-4xl text-left">{description}</div>
    </div>
  );
};

export default ExperienceSlide;
