import { HStack, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BattlerPreview, { BattlerDisabled } from "./BattlerPreview";
import projects, { ProjectInfo } from "@/data/projects";
import { ExperienceInfo } from "@/data/experience";
import ProjectScreen from "./ProjectScreen";
import anime from "animejs";
import { Project } from "next/dist/build/swc";
import { panelController } from "./BattleUI";

const BattlerPreviewSafe = ({
  currentBattler,
  item,
  onClick,
}: {
  currentBattler: string;
  item?: ProjectInfo | ExperienceInfo;
  onClick: () => void;
}) => {
  if (item && item.enabled) {
    return (
      <BattlerPreview item={item} isBattling={currentBattler === item.name} onClick={onClick} />
    );
  } else {
    return <BattlerDisabled />;
  }
};

const ScreenSelectables = ({
  items,
  currentBattler,
  activeProjectIndex,
  setActiveProjectIndex,
  projectIndex,
  setProjectIndex,
}: {
  items: ProjectInfo[] | ExperienceInfo[];
  currentBattler: string;
  activeProjectIndex: number;
  setActiveProjectIndex: (i: number) => void;
  projectIndex: number;
  setProjectIndex: (i: number) => void;
}) => {
  return (
    <div className="bg-slate-100 h-full">
      <div className="h-full w-full absolute border-cyan-400 border-l-[60px] border-r-[60px]">
        <div className="h-full w-full border-cyan-500 border-l-[30px] border-r-[30px]">
          <div className="h-full w-full bg-cyan-200 border-cyan-100 border-l-[15px] border-r-[15px]"></div>
        </div>
      </div>

      <div className="h-full w-full absolute">
        <HStack justifyContent="space-between" px={8} pt={2} pb={4} h="full">
          <div className="h-full w-full">
            <VStack justifyContent="space-between" className="h-[90%] w-full">
              <BattlerPreviewSafe
                item={items[0]}
                currentBattler={currentBattler}
                onClick={() => setProjectIndex(0)}
              />
              <BattlerPreviewSafe
                item={items[2]}
                currentBattler={currentBattler}
                onClick={() => setProjectIndex(2)}
              />
              <BattlerPreviewSafe
                item={items[4]}
                currentBattler={currentBattler}
                onClick={() => setProjectIndex(4)}
              />
            </VStack>
          </div>
          <div className="h-full w-full">
            <VStack justifyContent="space-between" className="mt-[10%] h-[90%] w-full">
              <BattlerPreviewSafe
                item={items[1]}
                currentBattler={currentBattler}
                onClick={() => setProjectIndex(1)}
              />
              <BattlerPreviewSafe
                item={items[3]}
                currentBattler={currentBattler}
                onClick={() => setProjectIndex(3)}
              />
              <BattlerPreviewSafe
                item={items[5]}
                currentBattler={currentBattler}
                onClick={() => setProjectIndex(5)}
              />
            </VStack>
          </div>
        </HStack>
      </div>
      <div
        className={`h-full w-full absolute projects z-[10] ${
          projectIndex === -1 ? "pointer-events-none" : ""
        }`}
      >
        <ProjectScreen
          onExit={() => {
            setProjectIndex(-1);
            // panelController(".projects", false, 100);
          }}
          activeProjectIndex={activeProjectIndex}
          projectIndex={projectIndex}
          projects={projects}
        />
      </div>
    </div>
  );
};
// top-[100%]

export default ScreenSelectables;
