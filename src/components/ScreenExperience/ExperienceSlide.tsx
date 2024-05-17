import { Flex, HStack, VStack, Wrap } from "@chakra-ui/react";
import React from "react";
import { ExperienceInfo } from "../config/experience";
import { MdOutlineOpenInNew } from "react-icons/md";
import SVGportfolio from "../SVG/SVGportfolio";
import SVGenemy from "../SVG/SVGenemy";
import SVGbriefcase from "./SVGbriefcase";

const ExperienceSlide = ({
  experience: { role, id, logoSm, name, date1, date2, description, colorTag, companyUrl },
  setRef,
}: {
  experience: ExperienceInfo;
  setRef: (el: HTMLDivElement | null) => void;
}) => {
  return (
    <VStack
      ref={setRef}
      id={id}
      className={`checkerboard p-2 ${colorTag} h-full`}
      justifyContent="space-between"
    >
      <HStack className="w-full bg-yellow-100 p-2 rounded-xl text-4xl">
        <VStack spacing={1} align="flex-start" className="w-full bg-yellow-100 text-left">
          <h1 className="text-[2.25rem] whitespace-nowrap flex items-center gap-2">
            <SVGbriefcase size={40} className="inline" /> {role}
          </h1>
          <h2 className="text-[2.25rem] whitespace-nowrap flex items-center gap-2">
            {logoSm}
            {companyUrl ? (
              <a
                href={companyUrl}
                target="_blank"
                className="whitespace-nowrap text-4xl text-blue-700 underline underline-offset-4"
              >
                {name}
                <MdOutlineOpenInNew className="ml-1 inline" />
              </a>
            ) : (
              <>{name}</>
            )}
          </h2>
        </VStack>
        <div className="w-full flex flex-col items-end">
          <p className="text-4xl text-center">{date1}</p>
          <p className="text-4xl text-center">{date2}</p>
        </div>
      </HStack>
      <HStack className="rounded-xl bg-blue-400 border-blue-400 border-8 h-full">
        <div className="h-[75%] w-4 bg-blue-500 rounded-full" />
        <div className="bg-white text-left h-full w-full text-4xl px-3 py-2 leading-[2.65rem]">
          {description}
        </div>
        <div className="h-[75%] w-4 bg-blue-500 rounded-full" />
      </HStack>
    </VStack>
  );
};

export default ExperienceSlide;
