import { ProjectInfo } from "@/data/projects";
import { HStack } from "@chakra-ui/react";
import React from "react";
import BattlerGlimpse from "./BattlerGlimpse";
import HitPointsBar from "../Elements/HitPointsBar";
import { BattlerWrapper } from "./BattlerWrapper";

export const BattlerPanel = ({ battler }: { battler: ProjectInfo }) => {
  return (
    <BattlerWrapper>
      <BattlerGlimpse name={battler.shortName ?? battler.name} level={battler.level} />
      <HStack>
        <div className="w-1/4" />
        <div className="w-3/4 h-[1.25rem] pr-2">
          <HitPointsBar hpVal={battler.health} maxHpVal={battler.maxHealth} />
        </div>
      </HStack>
      <div className="ml-[50%] rounded-lg bg-gray-200 mr-2 text-right px-4 font-semibold text-xl leading-6">
        {Math.round(battler.health)}/{battler.maxHealth}
      </div>
    </BattlerWrapper>
  );
};
