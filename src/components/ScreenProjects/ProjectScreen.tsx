import { BattleMove, ProjectInfo, StackItem } from "@/components/config/projects";
import { HStack, Spinner, VStack, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import StackItemTag from "../Elements/StackItemTag";
import { MdOutlineOpenInNew } from "react-icons/md";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useActionContext } from "@/context/ActionContext";
import { Pokeball } from "../Elements/Pokeball";
import TabButton from "../Buttons/TabButton";
import { RiImage2Fill, RiInformation2Fill, RiSwordFill } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";
import HitPointsBar from "../Elements/HitPointsBar";

type Subscreen = "info" | "images" | "forms";

const SubscreenInfo = ({ project }: { project: ProjectInfo }) => {
  const { handleActionText } = useActionContext();
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
                      handleActionText("You are already on this website!");
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
  const [isImageLoading, setIsImageLoading] = useState(true);

  const handleSelectImage = (imageUrl: string) => {
    if (selectedImage !== imageUrl) {
      setSelectedImage(imageUrl);
      setIsImageLoading(true);
    }
  };
  return (
    <section className="h-full bg-blue-300 checkerboard flex justify-center">
      {/* <p className="mt-4 text-4xl">This page is incomplete and will be complete later.</p> */}
      {/* <figure>IMAGES</figure>
      <figcaption>img caption</figcaption>
      <div>{project.imageUrls?.toString()}</div> */}
      {project.imageUrls.length ? (
        <>
          <div className="h-full w-3/4 relative">
            <Image
              loading="eager"
              src={selectedImage}
              height={1000}
              width={1500}
              unoptimized
              alt={project.shortName + " image"}
              onLoadingComplete={() => {
                setIsImageLoading(false);
              }}
              className="absolute top-0 left-0 w-full h-full object-contain"
            />
            {isImageLoading && (
              <div className="absolute text-[4rem] top-0 gap-2 left-0 w-full h-full flex justify-center items-center">
                <Spinner color="red.500" emptyColor="white" thickness="8px" speed=".5s" size="xl" />
              </div>
            )}
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
                  } cursor-pointer rounded-md flex-shrink-0 overflow-hidden relative bg-placeholder-light dark:bg-placeholder-dark`}
                  onClick={() => handleSelectImage(imageUrl)}
                >
                  <Image
                    // TODO: Optimize
                    loading="eager"
                    src={imageUrl}
                    quality={20}
                    height={200}
                    width={200}
                    alt={project.shortName + " Image"}
                    className={`cursor-pointer ${
                      imageUrl === selectedImage ? "brightness-100 " : "brightness-75"
                    } hover:brightness-100 transition duration-300`}
                  />
                  <div className="absolute top-0 left-0 -ml-[1px] -mt-[1px] bg-black px-2 text-white rounded-ee-md text-3xl">
                    {index + 1}
                  </div>
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
  const indicatorColor = thisProject?.health !== 0 ? "bg-green-500" : "bg-red-500";
  return (
    <section className="h-full bg-violet-300 checkerboard p-2">
      {/* TODO */}
      <HStack className="w-full h-full" align="flex-start" spacing={0}>
        <VStack className="w-[38%] h-full" align="flex-start" justify="space-between">
          <div className="border-4 border-slate-800 w-full h-full relative bg-[hsla(0,0%,100%,0)] shadow-[inset_0px_0px_0px_8px_white,inset_0px_0px_0px_16px_rgba(255,255,255,0.5)] rounded-[25px] overflow-hidden">
            <div className="flex justify-center items-center h-full">{thisProject?.sprite}</div>
            <div className="absolute top-0 left-0 w-32 h-7 bg-white -skew-x-[45deg] -ml-8 rounded-lg">
              <div
                className={`w-12 h-3 ${indicatorColor} mr-4 float-right skew-x-[45deg] mt-2 rounded-full border-2 border-black`}
              />
              <div
                className={`w-3 h-3 bg-slate-500 mr-1.5 float-right skew-x-[45deg] mt-2 rounded-full border-2 border-black`}
              />
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-7 bg-white -skew-x-[45deg] -mr-8 rounded-lg"></div>
          </div>
        </VStack>
        <VStack className="w-[62%] pl-4 h-full" align="flex-start" justify="space-between">
          {thisProject && (
            <div className="w-full p-2 bg-yellow-100 flex flex-col gap-1 rounded-xl">
              <div className="flex items-center gap-2">
                <Pokeball size={40} />
                <h1 className="text-[2.25rem] leading-8">{project.shortName ?? project.name}</h1>
              </div>
              <div className="h-6">
                <HitPointsBar hpVal={thisProject.health} maxHpVal={project.maxHealth} />
              </div>
              <HStack justify="space-between">
                <h2 className="text-[2.25rem] leading-8">Lv.{project.level}</h2>
                <p className="text-[2.25rem] leading-8">
                  HP: {thisProject.health} / {project.maxHealth}
                </p>
              </HStack>
            </div>
          )}
          <table className="w-full">
            <tbody>
              <tr className="text-left text-[2.25rem] leading-10 w-full">
                <th>Slot</th>
                <th>Move Name</th>
                <th className="text-right">Power</th>
              </tr>
              {[...Array(4)].map((_, index) => {
                const battleMove = project.battleMoves?.[index] || {
                  name: "- - -",
                  power: "- -",
                };
                return (
                  <tr
                    key={index}
                    className={`text-4xl ${
                      index % 2 == 0 ? "bg-[rgba(255,255,255,0.75)]" : "bg-[rgba(255,255,255,0.5)]"
                    }`}
                  >
                    <td className="p-1.5">
                      <div className="grid grid-cols-2 w-[6.5rem] h-[2.25rem] [&>div]:border-slate-800">
                        <div
                          className={`border-l-[4px] border-t-[4px] border-r-[2px] border-b-[2px] ${
                            index === 0 && "bg-slate-800"
                          }`}
                        />
                        <div
                          className={`border-r-[4px] border-t-[4px] border-l-[2px] border-b-[2px] ${
                            index === 1 && "bg-slate-800"
                          }`}
                        />
                        <div
                          className={`border-l-[4px] border-b-[4px] border-r-[2px] border-t-[2px] ${
                            index === 2 && "bg-slate-800"
                          }`}
                        />
                        <div
                          className={`border-r-[4px] border-b-[4px] border-l-[2px] border-t-[2px] ${
                            index === 3 && "bg-slate-800"
                          }`}
                        />
                      </div>
                    </td>
                    <td>{battleMove.name}</td>
                    <td className="text-right pr-4">{battleMove.power}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </VStack>
      </HStack>
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
                    <h2>Battle Moves</h2>
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
