import { ProjectInfo } from "@/data/projects";
import React from "react";

const ProjectScreen = ({
  onExit,
  projectIndex,
  projects,
}: {
  onExit: () => void;
  projectIndex: number;
  projects: ProjectInfo[];
}) => {
  return (
    <div className="bg-slate-100 ">
      {projectIndex !== -1 && (
        <>
          <div>{projectIndex}</div>
          <button onClick={onExit}>CLOSE</button>
          {/* <div>{projects[projectIndex].name}</div> */}
        </>
      )}
    </div>
  );
};

export default ProjectScreen;
