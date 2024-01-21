import { HStack } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { IoMdMale } from "react-icons/io";

const BattlerGlimpse = ({ name, level }: { name: string; level: number }) => (
  <HStack justifyContent="space-between">
    <p className="font-medium text-3xl">{name}</p>
    <p className="font-medium text-xl">Lv{level}</p>
  </HStack>
);

const EnemyHitPointsBar = () => (
  <HStack
    className="bg-gray-700 rounded w-full h-full px-1 py-[0.3rem] drop-shadow-[2px_2px_1px_rgba(0,0,0,.15)]"
    spacing={1.5}
  >
    <div className="text-amber-400 font-extrabold tracking-wide leading-none">HP</div>
    <div className="w-full bg-amber-400 h-full"></div>
  </HStack>
);

const HitPointsBar = ({ hpVal, maxHpVal }: { hpVal: number; maxHpVal: number }) => (
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
          className="bg-green-500 h-full"
          style={{
            width: `${(hpVal / maxHpVal) * 100}%`,
          }}
        />
      </div>
    </div>
  </HStack>
);

export const EnemyBattlerPanel = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mr-2">
      <BattlerGlimpse name={name} level={level} />
      <HStack>
        <div className="w-1/4 text-blue-500 text-xl">
          <IoMdMale />
        </div>
        <div className="w-3/4 h-[1.25rem] pr-2">
          <EnemyHitPointsBar />
        </div>
      </HStack>
    </div>
  );
};

export const BattlerPanel = ({
  name,
  level,
  hpVal = 82,
  maxHpVal = 100,
}: {
  name: string;
  level: number;
  hpVal?: number;
  maxHpVal?: 100;
}) => {
  return (
    <div className="ml-2">
      <BattlerGlimpse name={name} level={level} />
      <HStack>
        <div className="w-1/4" />
        <div className="w-3/4 h-[1.25rem] pr-2">
          <HitPointsBar hpVal={hpVal} maxHpVal={100} />
        </div>
      </HStack>
      <div className="ml-[50%] rounded-lg bg-gray-200 mr-2 text-right px-4 font-semibold">
        {hpVal}/{maxHpVal}
      </div>
    </div>
  );
};
