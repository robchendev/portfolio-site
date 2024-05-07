import React from "react";
import BattlerGlimpse from "./BattlerGlimpse";
import { HStack } from "@chakra-ui/react";
import { IoMdMale } from "react-icons/io";
import HitPointsBar from "../Elements/HitPointsBar";
import EnemyWrapper from "./EnemyWrapper";

export const EnemyPanel = ({
  name,
  level,
  health,
  maxHealth,
}: {
  name: string;
  level: number;
  health: number;
  maxHealth: number;
}) => {
  return (
    <EnemyWrapper>
      <BattlerGlimpse name={name} level={level} />
      <HStack>
        <div className="w-1/4 text-blue-500 text-xl">
          <IoMdMale />
        </div>
        <div className="w-3/4 h-[1.25rem] pr-2">
          <HitPointsBar hpVal={health} maxHpVal={maxHealth} />
        </div>
      </HStack>
    </EnemyWrapper>
  );
};

export default EnemyPanel;
