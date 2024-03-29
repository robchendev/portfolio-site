import { BattleMove, ProjectInfo, StackItem } from "@/data/projects";
import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import StackItemTag from "./StackItemTag";
import { MdOutlineOpenInNew } from "react-icons/md";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Subscreen = "summary" | "images" | "description";

const SubscreenSummary = ({ project }: { project: ProjectInfo }) => {
  return (
    <section className="h-full bg-cyan-300 rounded-md p-4">
      <h1 className="text-[4rem] font-semibold leading-8 tracking-wider mb-4">{project.name}</h1>
      {project.deploymentUrl && (
        <a
          href={project.deploymentUrl}
          className="mt-4 text-4xl text-blue-700 underline underline-offset-4"
        >
          {project.deploymentUrl} <MdOutlineOpenInNew className="inline" />
        </a>
      )}
      <HStack className="pt-3">
        {project.stack?.map((stackItem: StackItem, index: number) => (
          <StackItemTag key={index} stackItem={stackItem} />
        ))}
      </HStack>
      <p className="mt-4 text-4xl">{project.description}</p>
      {/* A single featured image here */}
    </section>
  );
};

const SubscreenImages = ({ project }: { project: ProjectInfo }) => {
  const [selectedImage, setSelectedImage] = useState(project.imageUrls[0]);
  return (
    <section className="h-full bg-blue-300 rounded-md px-4 py-3 flex justify-center">
      {/* <p className="mt-4 text-4xl">This page is incomplete and will be complete later.</p> */}
      {/* <figure>IMAGES</figure>
      <figcaption>img caption</figcaption>
      <div>{project.imageUrls?.toString()}</div> */}
      <div className="h-full w-3/4 border-2 border-r-0 border-red-500 ">
        <Image
          loading="eager"
          src={selectedImage}
          height={300}
          width={300}
          alt={project.shortName + " Image"}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-full w-1/4 overflow-y-scroll">
        {/* <ScrollContainer className="list flex overflow-auto" hideScrollbars={false}> */}
        {/* Onclick should open a lightbox */}
        <VStack spacing={1}>
          {project.imageUrls?.map((imageUrl: string, index: number) => (
            <figure
              key={index}
              className="flex-shrink-0 overflow-hidden bg-placeholder-light dark:bg-placeholder-dark"
              onClick={() => setSelectedImage(imageUrl)}
            >
              <Image
                loading="eager"
                src={imageUrl}
                height={300}
                width={300}
                alt={project.shortName + " Image"}
                className={`cursor-pointer ${
                  imageUrl === selectedImage ? "brightness-100" : "brightness-75"
                } hover:brightness-100 transition duration-300`}
              />
            </figure>
          ))}
        </VStack>
      </div>
    </section>
  );
};

const SubscreenDesc = ({ project }: { project: ProjectInfo }) => {
  return (
    <section className="h-full bg-violet-300 rounded-md px-4 py-3">
      {/* <p className="mt-4 text-4xl">This page is incomplete and will be complete later.</p> */}
      {/* RENDER MARKDOWN? */}
      {/* COMBAT POWER AND ABILITIES<div>{project.description}</div> */}
      {/* Move:Power:Type */}
      <ul>
        {project.battleMoves?.map((battleMove: BattleMove, index: number) => (
          <li key={index} className={`text-4xl ${index % 2 == 0 ? "bg-white" : "bg-slate-200"}`}>
            Name: {battleMove.name}, Power: {battleMove.power}
          </li>
        ))}
      </ul>
    </section>
  );
};

const ProjectScreen = ({
  onExit,
  projectIndex,
  projects,
}: {
  onExit: () => void;
  projectIndex: number;
  projects: ProjectInfo[];
}) => {
  const [chosenProject, setChosenProject] = useState(projects[0]);
  const [subscreen, setSubscreen] = useState<Subscreen>("summary");

  useEffect(() => {
    setChosenProject(projects[projectIndex]);
    setSubscreen("summary");
  }, [projectIndex, projects]);

  const variants = {
    visible: { y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    hidden: { y: "100%", transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <AnimatePresence>
      {chosenProject && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          style={{ height: "100%" }}
        >
          <div className="pb-2 h-full bg-yellow-200">
            <HStack className="h-full" spacing={0}>
              <div className="w-3/4 h-[94%] ">
                <div className="ml-[2%] h-full border-8 rounded-xl border-black bg-black">
                  {subscreen === "summary" && <SubscreenSummary project={chosenProject} />}
                  {subscreen === "images" && <SubscreenImages project={chosenProject} />}
                  {subscreen === "description" && <SubscreenDesc project={chosenProject} />}
                </div>
              </div>
              <div className="w-1/4 h-full text-[3.25rem] leading-8">
                <VStack justifyContent="space-between" className="h-full">
                  <Text className="text-[2.75rem] pt-4 pb-2 px-2 leading-8" noOfLines={1}>
                    {chosenProject.shortName ?? chosenProject.name}
                  </Text>
                  <div className="-ml-2 [&_button]:text-left [&_button]:border-r-4 [&_button]:border-b-4 [&_button]:border-t-4 [&_button]:border-black">
                    <button
                      className={`p-3 bg-cyan-300 -mb-1 ${
                        subscreen === "summary"
                          ? "pl-4 border-l-0 w-11/12 rounded-e-lg"
                          : "pl-[8px] border-l-8 w-10/12"
                      }`}
                      onClick={() => setSubscreen("summary")}
                    >
                      Summary
                    </button>
                    <button
                      className={`p-3 bg-blue-300 -mb-1 ${
                        subscreen === "images"
                          ? "pl-4 border-l-0 w-11/12 rounded-e-lg"
                          : "pl-[8px] border-l-8 w-10/12"
                      }`}
                      onClick={() => setSubscreen("images")}
                    >
                      Images
                    </button>
                    <button
                      className={`p-3 bg-violet-300 border-b-4 ${
                        subscreen === "description"
                          ? "pl-4 border-l-0 w-11/12 rounded-e-lg"
                          : "pl-[8px] border-l-8 w-10/12"
                      }`}
                      onClick={() => setSubscreen("description")}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectScreen;
