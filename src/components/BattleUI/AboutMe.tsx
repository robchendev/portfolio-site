import { HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaSpotify, FaYoutube } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const AboutMe = () => {
  return (
    <div className="bg-white h-full w-full flex justify-center items-center">
      <VStack spacing={5}>
        <HStack spacing={8}>
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
        </HStack>
      </VStack>
    </div>
  );
};

export default AboutMe;
