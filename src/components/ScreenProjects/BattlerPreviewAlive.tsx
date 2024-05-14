import { ProjectInfo } from "@/components/config/projects";
import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import { PokeballBottom, PokeballTop } from "../Elements/Pokeball";
import HitPointsBar from "../Elements/HitPointsBar";

const BattlerPreviewAlive = ({
  item,
  onClick,
  isBattling = false,
}: {
  item: ProjectInfo;
  onClick: () => void;
  isBattling?: boolean;
}) => {
  return (
    <div className="w-full h-full relative group" onClick={onClick}>
      <div className="absolute w-full h-full peer">
        <div
          className={` bg-gradient-to-t ${
            isBattling ? "from-green-400" : "from-green-600"
          } from-35% ${
            isBattling ? "to-green-500" : "to-green-700"
          } to-60% w-full h-full border-[3px] border-slate-800 hover:border-rose-500 rounded-ss-[38px] cursor-pointer`}
        >
          <div className=" border-green-400 border-[5px] group-hover:border-rose-500 rounded-ss-[35px] h-full" />
        </div>
      </div>
      <div className="absolute w-full h-full stripes-preview z-2 px-[24px] py-[20px] pointer-events-none">
        <Text
          noOfLines={1}
          className="ml-16 text-white text-4xl drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]"
        >
          {item.shortName ?? item.name}
        </Text>
        <VStack className="mt-0 ml-16 h-5 flex" align="end" spacing={0}>
          <HitPointsBar hpVal={item.health} maxHpVal={item.maxHealth} />
          <p className="text-3xl leading-7 text-white drop-shadow-[1.5px_1px_1px_rgba(0,0,0,.5)]">
            {item.health} / {item.maxHealth}
          </p>
        </VStack>
      </div>
      <div
        className={`absolute bottom-[6px] left-[6px] pointer-events-none h-[31.9%] w-[24.1%] overflow-hidden`}
      >
        <div className="h-full w-full bg-green-400 group-hover:bg-rose-500 skew-x-[36deg] -ml-4">
          <div className="h-full w-full flex items-center ml-5 -skew-x-[36deg] text-white text-3xl" />
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 pointer-events-none h-1/3 w-1/4 overflow-hidden`}>
        <div className="h-full w-full bg-slate-800 skew-x-[36deg] -ml-4">
          <div className="h-full w-full flex items-center ml-5 -skew-x-[36deg] text-white text-3xl">
            Lv.{item.level}
          </div>
        </div>
      </div>
      <div
        className={`absolute top-[4px] left-[4px] pointer-events-none transition-all ease-in-out duration-200 ${
          isBattling && "-mt-2"
        } peer-hover:-mt-2`}
      >
        <PokeballTop size={70} />
      </div>
      <div
        className={`absolute top-[4px] left-[4px] pointer-events-none transition-all ease-in-out duration-200 ${
          isBattling && "mt-2"
        } peer-hover:mt-2`}
      >
        <PokeballBottom size={70} />
      </div>
    </div>
  );
};

export default BattlerPreviewAlive;
