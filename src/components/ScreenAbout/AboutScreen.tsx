import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import ApplicantCard from "./ApplicantCard";
import AboutButton from "../Buttons/AboutButton";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaEnvelope, FaFilePdf } from "react-icons/fa6";

const AboutScreen = () => {
  const iconSize = 36;
  return (
    <HStack className="bg-cyan-300 h-full py-4 checkerboard" spacing={0} align="flex-start">
      <ApplicantCard />
      <VStack spacing={2} className="w-1/4 px-2 h-full" align="flex-start">
        {/* <AboutButton
          text="Resume"
          color="resume"
          href="/resume.pdf"
          Icon={<FaFilePdf size={iconSize} />}
        /> */}
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
      </VStack>
    </HStack>
  );
};

export default AboutScreen;
