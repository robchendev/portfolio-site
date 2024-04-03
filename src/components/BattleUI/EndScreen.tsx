import { HStack, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaSpotify, FaYoutube } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

const EndScreen = () => {
  return (
    <div className="bg-white h-full w-full flex justify-center items-center">
      <VStack spacing={12}>
        <p className="text-[3.5rem]">Thank you for checking out my portfolio!</p>
        <p className="text-[3.5rem]">You can click &quot;Reset&quot; to play the battle again</p>
      </VStack>
    </div>
  );
};

export default EndScreen;
