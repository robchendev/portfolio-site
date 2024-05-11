import { Flex } from "@chakra-ui/react";
import React from "react";

const CardDetail = ({ left, right, href }: { left: string; right: string; href?: string }) => (
  <Flex
    className="w-full text-[1.8rem] bg-[rgba(255,255,255,0.4)] rounded-[14px] leading-10 px-2 text-gray-800"
    justify="space-between"
  >
    <p className="capitalize drop-shadow-[1.5px_1px_0.5px_rgba(255,255,255,.8)]">{left}</p>
    {href ? (
      <a
        href={href}
        className="drop-shadow-[2px_1px_0.5px_rgba(255,255,255,.8)] text-blue-700 underline underline-offset-4"
      >
        {right}
      </a>
    ) : (
      <p className="drop-shadow-[2px_1px_0.5px_rgba(255,255,255,.8)]">{right}</p>
    )}
  </Flex>
);

export default CardDetail;
