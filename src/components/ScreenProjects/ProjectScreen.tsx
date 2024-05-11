import { BattleMove, ProjectInfo, StackItem } from "@/data/projects";
import { Flex, HStack, Text, VStack, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import StackItemTag from "../Elements/StackItemTag";
import { MdOutlineImage, MdOutlineInfo, MdOutlineLock, MdOutlineOpenInNew } from "react-icons/md";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useActionContext } from "@/context/ActionContext";
import { Pokeball } from "../Elements/Pokeball";
import TabButton from "../Buttons/TabButton";
import {
  RiImage2Fill,
  RiInformation2Fill,
  RiInformationFill,
  RiQuestionFill,
  RiSwordFill,
  RiSwordLine,
} from "react-icons/ri";
import { BiDownArrow } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
import HitPointsBar from "../Elements/HitPointsBar";

type Subscreen = "info" | "images" | "forms";

const SubscreenInfo = ({ project }: { project: ProjectInfo }) => {
  const { setActionDialogText } = useActionContext();
  return (
    <VStack className="h-full bg-green-200 checkerboard p-2" justifyContent="space-between">
      <HStack className="w-full" justifyContent="space-between">
        <VStack spacing={0} align="flex-start" className="bg-yellow-100 p-2 text-4xl rounded-xl">
          <HStack className="whitespace-nowrap">
            <Pokeball size={40} />
            <h1>{project.name}</h1>
          </HStack>
          {project.deploymentUrl && (
            <>
              {project.deploymentUrl === "https://robchen.dev" ? (
                <p
                  className="whitespace-nowrap cursor-pointer text-4xl text-blue-700 underline underline-offset-4"
                  onClick={() => {
                    if (project.deploymentUrl === "https://robchen.dev") {
                      setActionDialogText("");
                      setTimeout(() => {
                        setActionDialogText("You are already on this website!");
                      }, 10);
                    }
                  }}
                >
                  {project.deploymentUrl}
                  <MdOutlineOpenInNew className="ml-1 inline" />
                </p>
              ) : (
                <a
                  href={project.deploymentUrl}
                  target="_blank"
                  className="whitespace-nowrap text-4xl text-blue-700 underline underline-offset-4"
                >
                  {project.deploymentUrl}
                  <MdOutlineOpenInNew className="ml-1 inline" />
                </a>
              )}
            </>
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
    <section className="h-full bg-blue-300 checkerboard rounded-md flex justify-center">
      {/* <p className="mt-4 text-4xl">This page is incomplete and will be complete later.</p> */}
      {/* <figure>IMAGES</figure>
      <figcaption>img caption</figcaption>
      <div>{project.imageUrls?.toString()}</div> */}
      {project.imageUrls.length ? (
        <>
          <div className="h-full w-3/4">
            <Image
              loading="eager"
              src={selectedImage}
              height={1000}
              width={1500}
              alt={project.shortName + " Image"}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="h-full w-1/4 overflow-y-scroll p-1">
            {/* <ScrollContainer className="list flex overflow-auto" hideScrollbars={false}> */}
            {/* Onclick should open a lightbox */}
            <VStack spacing={1}>
              <h2 className="px-2 flex justify-between items-center text-[2rem] w-full h-full bg-yellow-100 text-center rounded-md ">
                <FaArrowDown /> Scroll <FaArrowDown />
              </h2>
              {project.imageUrls?.map((imageUrl: string, index: number) => (
                <figure
                  key={index}
                  className={`${
                    imageUrl === selectedImage
                      ? "border-black border-2"
                      : "border-2 border-transparent"
                  } rounded-md flex-shrink-0 overflow-hidden bg-placeholder-light dark:bg-placeholder-dark`}
                  onClick={() => setSelectedImage(imageUrl)}
                >
                  <Image
                    loading="eager"
                    src={imageUrl}
                    height={300}
                    width={300}
                    alt={project.shortName + " Image"}
                    className={`cursor-pointer ${
                      imageUrl === selectedImage ? "brightness-100 " : "brightness-75"
                    } hover:brightness-100 transition duration-300`}
                  />
                </figure>
              ))}
            </VStack>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center text-[3rem]">
          This project has no images to show
        </div>
      )}
    </section>
  );
};

const SubscreenDesc = ({ project }: { project: ProjectInfo }) => {
  const { projects } = useActionContext();
  const thisProject = projects.find((p: ProjectInfo) => p.name === project.name);
  return (
    <section className="h-full bg-violet-300 checkerboard rounded-md px-4 py-3">
      {/* TODO */}
      {/* <div>Battle image here</div> */}
      <h1 className="text-[2.25rem] leading-10">{project.name}</h1>
      <h2 className="text-[2.25rem]">Lv.{project.level}</h2>
      {thisProject && (
        <div>
          <div className="h-8">
            <HitPointsBar hpVal={thisProject.health} maxHpVal={project.maxHealth} />
          </div>
          <p className="text-[2.25rem] leading-12">
            {thisProject.health} / {project.maxHealth}
          </p>
        </div>
      )}
      <h2 className="text-[2.25rem]">Battle Moves:</h2>
      <ul>
        {project.battleMoves?.map((battleMove: BattleMove, index: number) => (
          <li
            key={index}
            className={`text-4xl ${
              index % 2 == 0 ? "bg-[rgba(255,255,255,0.7)]" : "bg-[rgba(255,255,255,0.5)]"
            }`}
          >
            {battleMove.name}, Power: {battleMove.power}
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
              <HStack className="h-full pl-2" spacing={2}>
                <TabButton
                  color="green"
                  isActive={subscreen === "info"}
                  onClick={() => setSubscreen("info")}
                >
                  <HStack className="block whitespace-nowrap pb-0.5">
                    <RiInformation2Fill size="38" className="-ml-1.5" />
                    <h2>Details</h2>
                  </HStack>
                </TabButton>
                <TabButton
                  color="blue"
                  isActive={subscreen === "images"}
                  onClick={() => setSubscreen("images")}
                >
                  <HStack className="block whitespace-nowrap pb-0.5">
                    <RiImage2Fill size="38" className="-ml-1.5" />
                    <h2>Images</h2>
                  </HStack>
                </TabButton>
                <TabButton
                  color="purple"
                  isActive={subscreen === "forms"}
                  onClick={() => setSubscreen("forms")}
                >
                  <HStack className="block whitespace-nowrap pb-0.5">
                    <RiSwordFill size="38" className="-ml-1.5" />
                    <h2>Battle Data</h2>
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectScreen;
