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
          <HStack className="h-full" spacing={0}>
            <div className="w-3/4 h-full bg-slate-200 border-r-8 border-black">
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
            <div className="w-1/4 h-full bg-yellow-200 text-[3.25rem] leading-8">
              <VStack justifyContent="space-between" className="h-full">
                <Text className="text-4xl px-2 leading-8" noOfLines={1}>
                  {chosenProject.name}
                </Text>
                <div className="text-xl">Logo Goes Here</div>
                <div className="-ml-2 [&_button]:w-full [&_button]:text-left [&_button]:border-t-4 [&_button]:border-black">
                  <button
                    className={`p-3 bg-cyan-400 ${
                      chosenSubscreen === "summary" ? "pl-4 border-l-0" : "pl-[8px] border-l-8"
                    }`}
                    onClick={() => setChosenSubscreen("summary")}
                  >
                    Summary
                  </button>
                  <button
                    className={`p-3 bg-blue-400 ${
                      chosenSubscreen === "images" ? "pl-4 border-l-0" : "pl-[8px] border-l-8"
                    }`}
                    onClick={() => setChosenSubscreen("images")}
                  >
                    Images
                  </button>
                  <button
                    className={`p-3 bg-violet-400 border-b-4 ${
                      chosenSubscreen === "description" ? "pl-4 border-l-0" : "pl-[8px] border-l-8"
                    }`}
                    onClick={() => setChosenSubscreen("description")}
                  >
                    Description
                  </button>
                </div>
                <VStack className="w-full [&_button]:w-full [&_button]:rounded-xl [&_button]:p-2 [&_button]:py-3 [&_button]:border-4 [&_button]:border-black p-4 text-white">
                  <button className="bg-green-500" onClick={() => console.log("SWITCH")}>
                    Switch
                  </button>
                  <button className="bg-red-500" onClick={onExit}>
                    Close
                  </button>
                </VStack>
              </VStack>
            </div>
          </HStack>
        </div>
      )}
    </div>
  );
};

export default ProjectScreen;
