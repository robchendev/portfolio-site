import { Flex } from "@chakra-ui/react";
import React from "react";

const CardDetail = ({ left, right }: { left: string; right: string }) => (
  <Flex
    className="w-full text-[1.8rem] bg-[rgba(255,255,255,0.4)] rounded-[14px] leading-10 px-2 text-gray-800"
    justify="space-between"
  >
    <p className="capitalize drop-shadow-[2px_1px_0.5px_rgba(255,255,255,.8)]">{left}</p>
    <p className="drop-shadow-[2px_1px_0.5px_rgba(255,255,255,.8)]">{right}</p>
  </Flex>
);

export default CardDetail;
