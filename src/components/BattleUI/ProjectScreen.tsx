import { ProjectInfo } from "@/data/projects";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

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
  useEffect(() => {
    let chosenIndex =
      projectIndex !== -1 ? projectIndex : activeProjectIndex !== -1 ? activeProjectIndex : -1;
    setChosenProject(projects[chosenIndex]);
  }, [projectIndex, activeProjectIndex, projects]);
  return (
    <div
      className={`${activeProjectIndex !== -1 || projectIndex !== -1 ? "bg-slate-100" : ""} h-full`}
    >
      {chosenProject && (
        <>
          <Text className="text-4xl">{chosenProject.name}</Text>
          <div>{chosenProject.description}</div>
          <div>{chosenProject.imageUrls?.toString()}</div>
          <div>{chosenProject.stack?.toString()}</div>
          <button onClick={onExit}>CLOSE</button>
          <button onClick={() => console.log("SWITCH")}>SWITCH</button>
          {/* <div>{projects[projectIndex].name}</div> */}
        </>
      )}
    </div>
  );
};

export default ProjectScreen;
