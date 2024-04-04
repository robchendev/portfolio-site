import { ProjectInfo } from "@/data/projects";
import { HStack } from "@chakra-ui/react";
import React from "react";
import { IoMdMale } from "react-icons/io";

const BattlerGlimpse = ({ name, level }: { name: string; level: number }) => (
  <HStack justifyContent="space-between">
    <p className="font-medium text-4xl leading-4 mt-2.5 mb-2.5">{name}</p>
    <p className="font-medium text-2xl">Lv{level}</p>
  </HStack>
);

const HitPointsBar = ({ hpVal, maxHpVal }: { hpVal: number; maxHpVal: number }) => {
  const hpPercent = (hpVal / maxHpVal) * 100;
  let colorTag = "bg-green-500";
  if (hpPercent <= 25) {
    colorTag = "bg-rose-500";
  } else if (hpPercent <= 50) {
    colorTag = "bg-amber-400";
  }

  return (
    <HStack
      className="bg-gray-700 rounded w-full h-full px-1 py-[0.3rem] drop-shadow-[2px_2px_1px_rgba(0,0,0,.15)]"
      spacing={1.5}
    >
      <div className="text-amber-400 font-extrabold tracking-wide leading-none">HP</div>
      <div className="h-full w-full relative">
        <div className="h-full w-full absolute top-0 left-0">
          <div className="w-full bg-white h-full" />
        </div>
        <div className="h-full w-full absolute top-0 left-0">
          <div
            // Change color based on amount, use yellow and red
            className={`h-full ${colorTag}`}
            style={{
              width: `${hpPercent}%`,
            }}
          />
        </div>
      </div>
    </HStack>
  );
};

export const EnemyBattlerPanel = ({
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
    <div className="mr-2">
      <BattlerGlimpse name={name} level={level} />
      <HStack>
        <div className="w-1/4 text-blue-500 text-xl">
          <IoMdMale />
        </div>
        <div className="w-3/4 h-[1.25rem] pr-2">
          <HitPointsBar hpVal={health} maxHpVal={maxHealth} />
        </div>
      </HStack>
    </div>
  );
};

export const BattlerPanel = ({ battler }: { battler: ProjectInfo }) => {
  return (
    <div className="ml-2">
      <BattlerGlimpse name={battler.name} level={battler.level} />
      <HStack>
        <div className="w-1/4" />
        <div className="w-3/4 h-[1.25rem] pr-2">
          <HitPointsBar hpVal={battler.health} maxHpVal={100} />
        </div>
      </HStack>
      <div className="ml-[50%] rounded-lg bg-gray-200 mr-2 text-right px-4 font-semibold text-xl leading-6">
        {Math.round(battler.health)}/{battler.maxHealth}
      </div>
    </div>
  );
};
