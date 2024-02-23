import { ProjectInfo } from "@/data/projects";
import { HStack, Text } from "@chakra-ui/react";
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
                <div>
                  SUMMARY<div>{chosenProject.stack?.toString()}</div>
                </div>
              )}
              {chosenSubscreen === "images" && (
                <div>
                  IMAGES<div>{chosenProject.imageUrls?.toString()}</div>
                </div>
              )}
              {chosenSubscreen === "description" && (
                <div>
                  {/* RENDER MARKDOWN? */}
                  DESCRIPTION<div>{chosenProject.description}</div>
                </div>
              )}
            </div>
            <div className="w-1/4 px-2 h-full bg-yellow-200 text-[3rem] leading-8 [&_button]:w-full [&_button]:text-left">
              <Text className="text-4xl leading-8">{chosenProject.name} sadasd</Text>
              <button onClick={() => setChosenSubscreen("summary")}>Summary</button>
              <button onClick={() => setChosenSubscreen("images")}>Images</button>
              <button onClick={() => setChosenSubscreen("description")}>Description</button>
              <button onClick={() => console.log("SWITCH")}>SWITCH</button>
              <button onClick={onExit}>Close</button>
            </div>
          </HStack>
        </div>
      )}
    </div>
  );
};

export default ProjectScreen;
