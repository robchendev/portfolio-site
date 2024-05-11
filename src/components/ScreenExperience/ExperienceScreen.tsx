import { HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const ExperienceScreen = () => {
  return (
    <HStack spacing={0} className="bg-white h-full w-full">
      <div className="w-full h-full flex justify-center items-center text-[2.5rem] text-center">
        <div>
          <p>This page is under development,</p>
          <p>
            See my Experience in my{" "}
            <Link
              target="_blank"
              href="/resume.pdf"
              className="inline-block underline text-blue-600 underline-offset-4"
            >
              Resume
            </Link>{" "}
            instead
          </p>
        </div>
      </div>
      {/* <div className="w-1/4 h-full bg-slate-300"></div> */}
    </HStack>
  );
};

export default ExperienceScreen;
