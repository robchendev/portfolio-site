import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import BattlerPreview from "./BattlerPreview";
import Projects, { ProjectInfo } from "@/data/projects";
import { ExperienceInfo } from "@/data/experience";

const ScreenSelectables = ({ items }: { items: ProjectInfo[] | ExperienceInfo[] }) => {
  return (
    <div className="bg-slate-100 h-full">
      <HStack justifyContent="space-between" px={8} pt={2} pb={4} h="full">
        <div className="h-full w-full">
          <VStack justifyContent="space-between" className="h-[90%] w-full">
            {items.slice(0, 3).map((project: ProjectInfo | ExperienceInfo, index: number) => (
              <BattlerPreview key={index} item={project} />
            ))}
          </VStack>
        </div>
        <div className="h-full w-full">
          <VStack justifyContent="space-between" className="mt-[10%] h-[90%] w-full">
            {items.slice(3, 6).map((project: ProjectInfo | ExperienceInfo, index: number) => (
              <BattlerPreview key={index} item={project} />
            ))}
          </VStack>
        </div>
      </HStack>
    </div>
  );
};

export default ScreenSelectables;
