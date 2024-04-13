import { Flex, HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaSpotify, FaYoutube } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { PokeballBottom, PokeballFill, PokeballTop } from "./Pokeball";
import Image from "next/image";

const AboutDetail = ({ left, right }: { left: string; right: string }) => (
  <Flex
    className="w-full text-[1.8rem] bg-[rgba(255,255,255,0.4)] rounded-[14px] leading-10 px-2 text-gray-800"
    justify="space-between"
  >
    <p className="capitalize drop-shadow-[2px_1px_0.5px_rgba(255,255,255,.8)]">{left}</p>
    <p className="drop-shadow-[2px_1px_0.5px_rgba(255,255,255,.8)]">{right}</p>
  </Flex>
);

const AboutScreen = () => {
  return (
    <HStack className="bg-teal-200 h-full py-4" spacing={0} align="flex-start">
      {/* This wrapping div is necessary because of a safari bug https://github.com/tailwindlabs/tailwindcss/discussions/5675 */}
      <div className="bg-white ml-2 w-3/4 h-full rounded-[25px] p-1">
        <VStack className="bg-[#de6363] overflow-hidden fix-safari h-full w-full p-3 rounded-[21px]">
          <PokeballFill
            size={560}
            fill="#efb563"
            stroke="#de6363"
            className="absolute top-0 left-0 -z-[1] rotate-45 -translate-y-44 -translate-x-44 mt-3"
          />
          <VStack className="w-full h-full" align="flex-start" spacing={0}>
            <HStack spacing={0} align="center" className="mb-2">
              <PokeballTop
                size={40}
                className="-rotate-90 -mr-1 drop-shadow-[-1px_1px_0.5px_rgba(0,0,0,.4)]"
              />
              <p className="text-white text-[2.5rem] leading-8 drop-shadow-[2px_2px_0.5px_rgba(0,0,0,.4)]">
                Applicant Card
              </p>
              <PokeballBottom
                size={40}
                className="-rotate-90 -ml-2  drop-shadow-[-1px_1px_0.5px_rgba(0,0,0,.4)]"
              />
            </HStack>
            <HStack className="w-full h-full" align="flex-start" justify="space-between" gap={4}>
              <VStack className="w-3/4">
                <AboutDetail left="name" right="Robert Chen" />
                <AboutDetail left="email" right="robchendev@gmail.com" />
                <AboutDetail left="money" right="$0.00" />
                <AboutDetail left="graduated" right="Dec. 16, 2023" />
              </VStack>
              <div className="w-1/3 overflow-hidden max-h-full rounded-[14px] bg-[rgba(255,255,255,0.4)]">
                <Image
                  loading="eager"
                  src="/img/sadpepe.png"
                  height={300}
                  width={300}
                  alt="job seeker"
                  className="object-contain "
                />
              </div>
            </HStack>
          </VStack>
          <div className="mt-2 w-full h-full text-[1.8rem] bg-[rgba(255,255,255,0.4)] rounded-[14px] leading-10 px-2 py-1.5 text-gray-800">
            <p className="drop-shadow-[2px_1px_0.5px_rgba(255,255,255,.8)]">
              &quot;Something about myself, written in a long form paragraph that spans multiple
              lines.&quot;
            </p>
          </div>
          {/* <VStack className="mt-2 w-full">sdasdasdasdadasasd</VStack> */}
        </VStack>
      </div>
      <VStack spacing={2} className="w-1/4 px-2 h-full" align="flex-start">
        <div className="text-[2rem] bg-sky-500 overflow-hidden h-full w-full px-3 py-2 rounded-[25px] drop-shadow-[0_2px_2px_rgba(0,0,0,.2)] border-4 border-white">
          Resume, Linkedin, Github
        </div>
        <div className="text-[2rem] bg-sky-500 overflow-hidden h-full w-full px-3 py-2 rounded-[25px] drop-shadow-[0_2px_2px_rgba(0,0,0,.2)] border-4 border-white">
          Portfolio Source Code
        </div>
        {/* <HStack spacing={8}>
          <p className="text-[4rem]">
            <Link
              href="/resume.pdf"
              className="text-blue-600 hover:text-blue-400 underline underline-offset-8"
            >
              Resume
            </Link>
          </p>
          <a
            href="https://github.com/robchendev"
            className="text-[5rem] text-purple-500 hover:text-purple-400 underline underline-offset-4"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/robchendev/"
            className="text-[5rem] text-blue-600 hover:text-blue-400 underline underline-offset-4"
          >
            <FaLinkedin />
          </a>
        </HStack>
        <HStack spacing={8}>
          <p className="text-[3rem]">robchendev@gmail.com</p>
          <a
            href="mailto:robchendev@gmail.com"
            className="text-[5rem] text-blue-600 hover:text-blue-400 underline underline-offset-[6px]"
          >
            <LuMail />
          </a>
        </HStack>
        <p className="text-[3rem]">
          Portfolio source code:{" "}
          <a
            href="https://github.com/robchendev/portfolio-site"
            className="text-blue-600 hover:text-blue-400 underline underline-offset-[6px]"
          >
            Github Repo
          </a>
        </p>
        <HStack spacing={4}>
          <p className="text-[2rem]">PS: I make guitar music! If you&apos;re interested: </p>
          <a
            href="https://www.youtube.com/robertchen"
            className="text-[4rem] text-red-500 hover:text-red-400 underline underline-offset-4"
          >
            <FaYoutube />
          </a>
          <a
            href="https://open.spotify.com/artist/4JQzZTSBYflrvsi3fiPJmZ"
            className="text-[4rem] text-green-500 hover:text-green-400 underline underline-offset-4"
          >
            <FaSpotify />
          </a>
        </HStack> */}
      </VStack>
    </HStack>
  );
};

export default AboutScreen;
