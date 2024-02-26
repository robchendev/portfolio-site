import { ProjectInfo } from "@/data/projects";
import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

type Subscreen = "summary" | "images" | "description";

const SubscreenSummary = ({ project }: { project: ProjectInfo }) => {
  return (
    <section className="h-full bg-cyan-300 rounded-md p-4">
      <h1 className="text-4xl leading-4">{project.name}</h1>
      <div>{project.stack?.toString()}</div>
    </section>
  );
};

const SubscreenImages = ({ project }: { project: ProjectInfo }) => {
  return (
    <section className="h-full bg-blue-300 rounded-md px-4 py-3">
      <figure>IMAGES</figure>
      <figcaption>img caption</figcaption>
      <div>{project.imageUrls?.toString()}</div>
    </section>
  );
};

const SubscreenDesc = ({ project }: { project: ProjectInfo }) => {
  return (
    <section className="h-full bg-violet-300 rounded-md px-4 py-3">
      {/* RENDER MARKDOWN? */}
      DESCRIPTION<div>{project.description}</div>
    </section>
  );
};

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
        <div className="pb-2 h-full bg-yellow-200">
          <HStack className="h-full" spacing={0}>
            <div className="w-3/4 h-[94%] ">
              <div className="ml-[2%] h-full border-8 rounded-xl border-black bg-black">
                {chosenSubscreen === "summary" && <SubscreenSummary project={chosenProject} />}
                {chosenSubscreen === "images" && <SubscreenImages project={chosenProject} />}
                {chosenSubscreen === "description" && <SubscreenDesc project={chosenProject} />}
              </div>
            </div>
            <div className="w-1/4 h-full text-[3.25rem] leading-8">
              <VStack justifyContent="space-between" className="h-full">
                <Text className="text-[2.75rem] pt-4 pb-2 px-2 leading-8" noOfLines={1}>
                  {chosenProject.shortName ?? chosenProject.name}
                </Text>
                {/* <div className="text-xl">Logo Goes Here</div> */}
                <div className="-ml-2 [&_button]:text-left [&_button]:border-r-4 [&_button]:border-b-4 [&_button]:border-t-4 [&_button]:border-black">
                  <button
                    className={`p-3 bg-cyan-300 -mb-1 ${
                      chosenSubscreen === "summary"
                        ? "pl-4 border-l-0 w-11/12 rounded-e-lg"
                        : "pl-[8px] border-l-8 w-10/12"
                    }`}
                    onClick={() => setChosenSubscreen("summary")}
                  >
                    Summary
                  </button>
                  <button
                    className={`p-3 bg-blue-300 -mb-1 ${
                      chosenSubscreen === "images"
                        ? "pl-4 border-l-0 w-11/12 rounded-e-lg"
                        : "pl-[8px] border-l-8 w-10/12"
                    }`}
                    onClick={() => setChosenSubscreen("images")}
                  >
                    Images
                  </button>
                  <button
                    className={`p-3 bg-violet-300 border-b-4 ${
                      chosenSubscreen === "description"
                        ? "pl-4 border-l-0 w-11/12 rounded-e-lg"
                        : "pl-[8px] border-l-8 w-10/12"
                    }`}
                    onClick={() => setChosenSubscreen("description")}
                  >
                    Info
                  </button>
                </div>
                <VStack className="w-full [&_button]:w-full [&_button]:rounded-xl [&_button]:p-2 [&_button]:py-3 [&_button]:border-4 [&_button]:border-black p-2 text-white">
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
