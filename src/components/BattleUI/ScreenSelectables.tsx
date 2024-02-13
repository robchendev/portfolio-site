import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import BattlerPreview from "./BattlerPreview";
import { ProjectInfo } from "@/data/projects";
import { ExperienceInfo } from "@/data/experience";

const ScreenSelectables = ({
  items,
  currentBattler,
}: {
  items: ProjectInfo[] | ExperienceInfo[];
  currentBattler: string;
}) => {
  return (
    <div className="bg-slate-100 h-full">
      <div className="h-full w-full absolute border-teal-500 border-l-[60px] border-r-[60px]">
        <div className="h-full w-full border-teal-700 border-l-[30px] border-r-[30px]">
          <div className="h-full w-full bg-teal-300 border-teal-200 border-l-[15px] border-r-[15px]"></div>
        </div>
      </div>
      <div className="h-full w-full absolute">
        <HStack justifyContent="space-between" px={8} pt={2} pb={4} h="full">
          <div className="h-full w-full">
            <VStack justifyContent="space-between" className="h-[90%] w-full">
              {items.slice(0, 3).map((project: ProjectInfo | ExperienceInfo, index: number) => (
                <BattlerPreview
                  key={index}
                  item={project}
                  isBattling={currentBattler === project.name}
                />
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
    </div>
  );
};

export default ScreenSelectables;
