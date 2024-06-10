import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { PokeballBottom, PokeballFill, PokeballTop } from "../Elements/Pokeball";
import CardDetail from "./CardDetail";
import Image from "next/image";

const ApplicantCard = () => {
  // This wrapping div is necessary because of a safari bug
  // https://github.com/tailwindlabs/tailwindcss/discussions/5675
  return (
    <div className="bg-white border-black border-[6px] ml-2 w-3/4 h-full rounded-[25px] p-1">
      <VStack className="bg-[#de6363] overflow-hidden fix-safari h-full w-full p-3 rounded-[16px]">
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
              <CardDetail left="name" right="Robert Chen" />
              <CardDetail
                left="email"
                right="robchendev@gmail.com"
                href="mailto:robchendev@gmail.com?subject=👋 Hi Robert, let's talk"
              />
              <CardDetail left="money" right="$0.00" />
              <CardDetail left="graduated" right="Dec. 16, 2023" />
            </VStack>
            <div className="w-1/3 h-full overflow-hidden relative rounded-[14px] bg-[rgba(255,255,255,0.4)]">
              <Image src="/img/pfp.jpg" width={400} height={400} alt="job seeker" unoptimized />
            </div>
          </HStack>
        </VStack>
        <div className="w-full h-full text-[1.8rem] bg-[rgba(255,255,255,0.4)] rounded-[14px] leading-[2.25rem] px-2 py-1.5 text-gray-800">
          <p className="drop-shadow-[1.5px_1px_0.5px_rgba(255,255,255,.8)]">
            {/* &quot;Something about myself, written in a long form paragraph that spans multiple
            lines.&quot; */}
            &quot;Hi, thank you for visiting my portfolio! I am a full-stack web developer seeking
            permanent employment opportunities.&quot;
          </p>
        </div>
      </VStack>
    </div>
  );
};

export default ApplicantCard;
