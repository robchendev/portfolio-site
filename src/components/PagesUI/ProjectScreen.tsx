import { BattleMove, ProjectInfo, StackItem } from "@/data/projects";
import { Flex, HStack, Text, VStack, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import StackItemTag from "./StackItemTag";
import { MdOutlineImage, MdOutlineInfo, MdOutlineLock, MdOutlineOpenInNew } from "react-icons/md";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useActionContext } from "@/context/ActionContext";
import { Pokeball } from "../BattleUI/Pokeball";
import TabButton from "../BattleUI/TabButton";

type Subscreen = "info" | "images" | "forms";

const SubscreenInfo = ({ project }: { project: ProjectInfo }) => {
  return (
    <VStack className="h-full bg-green-200 checkerboard p-2" justifyContent="space-between">
      <HStack className="w-full" justifyContent="space-between">
        <VStack spacing={0} align="flex-start" className="bg-yellow-100 p-2 text-4xl rounded-xl">
          <HStack className="whitespace-nowrap">
            <Pokeball size={40} />
            <h1>{project.name}</h1>
          </HStack>
          {project.deploymentUrl && (
            <a
              href={project.deploymentUrl}
              className="whitespace-nowrap text-4xl text-blue-700 underline underline-offset-4"
            >
              {project.deploymentUrl}
              <MdOutlineOpenInNew className="ml-1 inline" />
            </a>
          )}
        </VStack>
        <div className="w-full text-xl h-full flex items-center">
          <Wrap justify="flex-end" className="w-full" spacing={2}>
            {project.stack?.map((stackItem: StackItem, index: number) => (
              <StackItemTag key={index} stackItem={stackItem} />
            ))}
          </Wrap>
        </div>
      </HStack>
      <HStack className="rounded-xl bg-blue-400 border-blue-400 border-8 h-full">
        <div className="h-[75%] w-4 bg-blue-500 rounded-full" />
        <div className="bg-white h-full w-full text-4xl px-3 py-2 leading-[2.65rem]">
          {project.description}
        </div>
        <div className="h-[75%] w-4 bg-blue-500 rounded-full" />
      </HStack>
    </VStack>
  );
};

const SubscreenImages = ({ project }: { project: ProjectInfo }) => {
  const [selectedImage, setSelectedImage] = useState(project.imageUrls[0]);
  return (
    <section className="h-full bg-blue-300 checkerboard rounded-md px-4 py-3 flex justify-center">
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
    <section className="h-full bg-violet-300 checkerboard rounded-md px-4 py-3">
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

const ProjectScreen = ({ projects }: { projects: ProjectInfo[] }) => {
  const [chosenProject, setChosenProject] = useState(projects[0]);
  const [subscreen, setSubscreen] = useState<Subscreen>("info");
  const { projectIndex } = useActionContext();

  useEffect(() => {
    setChosenProject(projects[projectIndex]);
    setSubscreen("info");
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
          <div className="h-full">
            {/* Subscreen Selector Tabs */}
            <div className="bg-gradient-to-b from-gray-300 to-white h-[12%]">
              <HStack className="h-full pl-3" spacing={1}>
                <TabButton
                  color="green"
                  isActive={subscreen === "info"}
                  onClick={() => setSubscreen("info")}
                >
                  <HStack className="block whitespace-nowrap pb-0.5">
                    <MdOutlineInfo size="38" className="-ml-1.5" />
                    <h2>Info</h2>
                  </HStack>
                </TabButton>
                <TabButton
                  color="blue"
                  isActive={subscreen === "images"}
                  onClick={() => setSubscreen("images")}
                >
                  <HStack className="block whitespace-nowrap pb-0.5">
                    <MdOutlineImage size="38" className="-ml-1.5" />
                    <h2>Images</h2>
                  </HStack>
                </TabButton>
                <TabButton
                  color="purple"
                  isActive={subscreen === "forms"}
                  onClick={() => setSubscreen("forms")}
                >
                  <HStack className="block whitespace-nowrap pb-0.5">
                    <MdOutlineLock size="38" className="-ml-1.5" />
                    <h2>TODO</h2>
                  </HStack>
                </TabButton>
              </HStack>
            </div>
            <div className="border-t-4 border-black checkerboard h-[88%]">
              {subscreen === "info" && <SubscreenInfo project={chosenProject} />}
              {subscreen === "images" && <SubscreenImages project={chosenProject} />}
              {subscreen === "forms" && <SubscreenDesc project={chosenProject} />}
            </div>
          </div>
          {/* <div className="pb-2 h-full bg-yellow-200"> 
            <HStack className="h-full" spacing={0}>
              <div className="w-3/4 h-[94%]">
                <div className="ml-[2%] h-full border-8 rounded-xl border-black bg-black">
                  {subscreen === "summary" && <SubscreenSummary project={chosenProject} />}
                  {subscreen === "images" && <SubscreenImages project={chosenProject} />}
                  {subscreen === "description" && <SubscreenDesc project={chosenProject} />}
                </div>
              </div>
              <div className="w-1/4 h-full text-[2.25rem] leading-8">
                <VStack justifyContent="space-between" className="h-full">
                  <Text className="text-[2.25rem] pt-4 pb-2 px-2 leading-8" noOfLines={1}>
                    {chosenProject.shortName ?? chosenProject.name}
                  </Text>
                  <div className="-ml-2 [&_button]:text-left [&_button]:border-r-4 [&_button]:border-b-4 [&_button]:border-t-4 [&_button]:border-black">
                    <TabButton
                      isActive={subscreen === "summary"}
                      backgroundColor="bg-cyan-300"
                      onClick={() => setSubscreen("summary")}
                    >
                      Summary
                    </TabButton>
                    <TabButton
                      isActive={subscreen === "images"}
                      backgroundColor="bg-blue-300"
                      onClick={() => setSubscreen("images")}
                    >
                      Images
                    </TabButton>
                    <TabButton
                      isActive={subscreen === "description"}
                      backgroundColor="bg-violet-300 border-b-4"
                      onClick={() => setSubscreen("description")}
                    >
                      Battle
                    </TabButton>
                  </div>
                  <VStack className="w-full [&_button]:w-full [&_button]:rounded-xl [&_button]:p-2 [&_button]:py-3 [&_button]:border-4 [&_button]:border-black p-2 text-white">
                    <button
                      className={
                        currProjects[projectIndex] &&
                        !isFightOver &&
                        battler.name !== currProjects[projectIndex].name &&
                        currProjects[projectIndex].health > 0
                          ? "bg-green-500 cursor-pointer"
                          : "bg-slate-400 cursor-auto"
                      }
                      onClick={onProjectSwitch}
                    >
                      Switch
                    </button>
                    <button
                      className="bg-red-500"
                      onClick={() => {
                        const isCurrentBattlerDead = battler.health === 0;
                        if (isCurrentBattlerDead) {
                          setTimeout(() => {
                            setActionDialogText("Select the next Project.");
                          }, 10);
                        } else {
                          setTimeout(() => {
                            setActionDialogText("Choose a project or CANCEL.");
                          }, 10);
                        }
                        onExit();
                      }}
                    >
                      Close
                    </button>
                  </VStack>
                </VStack>
              </div>
            </HStack> 
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectScreen;
