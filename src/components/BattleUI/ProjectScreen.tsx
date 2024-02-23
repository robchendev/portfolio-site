import { ProjectInfo } from "@/data/projects";
import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Subscreen = "summary" | "images" | "description";

const ProjectScreen = ({
  onExit,
  projectIndex,
  activeProjectIndex,
  projects,
}: {
  onExit: () => void;
  projectIndex: number;
  activeProjectIndex: number;
  projects: ProjectInfo[];
}) => {
  const [chosenProject, setChosenProject] = useState(projects[0]);
  const [chosenSubscreen, setChosenSubscreen] = useState<Subscreen>("summary");
  useEffect(() => {
    let chosenIndex =
      projectIndex !== -1 ? projectIndex : activeProjectIndex !== -1 ? activeProjectIndex : -1;
    setChosenProject(projects[chosenIndex]);
    setChosenSubscreen("summary");
  }, [projectIndex, activeProjectIndex, projects]);
  return (
    <div
      className={`${activeProjectIndex !== -1 || projectIndex !== -1 ? "bg-slate-100" : ""} h-full`}
    >
      {chosenProject && (activeProjectIndex !== -1 || projectIndex !== -1) && (
        <div className="pb-2 h-full">
          <HStack className="h-full">
            <div className="w-3/4 h-full bg-slate-200">
              {chosenSubscreen === "summary" && (
                <div className="h-full bg-cyan-400">
                  SUMMARY<div>{chosenProject.stack?.toString()}</div>
                </div>
              )}
              {chosenSubscreen === "images" && (
                <div className="h-full bg-blue-400">
                  IMAGES<div>{chosenProject.imageUrls?.toString()}</div>
                </div>
              )}
              {chosenSubscreen === "description" && (
                <div className="h-full bg-violet-400">
                  {/* RENDER MARKDOWN? */}
                  DESCRIPTION<div>{chosenProject.description}</div>
                </div>
              )}
            </div>
            <div className="w-1/4 h-full bg-yellow-200 text-[3.25rem] leading-8 ">
              <VStack justifyContent="space-between" className="h-full">
                <Text className="text-4xl px-2 leading-8">{chosenProject.name} sadasd</Text>
                <div className="[&_button]:w-full [&_button]:text-left [&_button]:border-t-2 [&_button]:border-black">
                  <button
                    className="p-3 bg-cyan-400 "
                    onClick={() => setChosenSubscreen("summary")}
                  >
                    Summary
                  </button>
                  <button className="p-3 bg-blue-400" onClick={() => setChosenSubscreen("images")}>
                    Images
                  </button>
                  <button
                    className="p-3 bg-violet-400 border-b-2 "
                    onClick={() => setChosenSubscreen("description")}
                  >
                    Description
                  </button>
                </div>
                <div className="[&_button]:w-full [&_button]:text-left [&_button]:border-t-2 [&_button]:border-black">
                  <button className="p-2 bg-green-400" onClick={() => console.log("SWITCH")}>
                    SWITCH
                  </button>
                  <button className="p-2 bg-red-400" onClick={onExit}>
                    Close
                  </button>
                </div>
              </VStack>
            </div>
          </HStack>
        </div>
      )}
    </div>
  );
};

export default ProjectScreen;
