import { HStack } from "@chakra-ui/react";
import React from "react";

const BattlerGlimpse = ({ name, level }: { name: string; level: number }) => (
  <HStack justifyContent="space-between">
    <p className="font-medium text-[1.65rem] leading-4 mt-2.5 mb-2.5">{name}</p>
    <p className="font-medium text-[1.65rem] leading-4 ">Lv{level}</p>
  </HStack>
);

export default BattlerGlimpse;
