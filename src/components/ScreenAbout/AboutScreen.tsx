import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import ApplicantCard from "./ApplicantCard";
import ActionButton from "../Buttons/ActionButton";
import AboutButton from "../Buttons/AboutButton";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaEnvelope, FaFilePdf } from "react-icons/fa6";

const AboutScreen = () => {
  const iconSize = 36;
  return (
    <HStack className="bg-cyan-300 h-full py-4 checkerboard" spacing={0} align="flex-start">
      <ApplicantCard />
      <VStack spacing={0} className="w-1/4 px-2 h-full" align="flex-start">
        <AboutButton
          text="Resume"
          color="resume"
          href="/resume.pdf"
          Icon={<FaFilePdf size={iconSize} />}
        />
        <AboutButton
          text="LinkedIn"
          color="linkedin"
          href="https://www.linkedin.com/in/robchendev/"
          Icon={<FaLinkedin size={iconSize} />}
        />
        <AboutButton
          text="Github"
          color="github"
          href="https://github.com/robchendev"
          Icon={<FaGithub size={iconSize} />}
        />
        <AboutButton
          text="Contact"
          color="contact"
          href="mailto:robchendev@gmail.com?subject=👋 Hi Robert, let's talk"
          Icon={<FaEnvelope />}
        />
        <AboutButton
          text="Source"
          color="sourceCode"
          href="https://github.com/robchendev/portfolio-site"
          Icon={<FaCode size={iconSize} />}
          isLast
        />
        {/* <div className="text-[2rem] bg-sky-500 overflow-hidden h-full w-full px-3 py-2 rounded-[25px] drop-shadow-[0_2px_2px_rgba(0,0,0,.2)] border-4 border-white">
          Resume, Linkedin, Github
          <ActionButton text="Resume" color="green" />
        </div>
        <div className="text-[2rem] bg-sky-500 overflow-hidden h-full w-full px-3 py-2 rounded-[25px] drop-shadow-[0_2px_2px_rgba(0,0,0,.2)] border-4 border-white">
          Portfolio Source Code
        </div> */}
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
