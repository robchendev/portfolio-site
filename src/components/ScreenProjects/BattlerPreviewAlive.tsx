import { ProjectInfo } from "@/data/projects";
import { Text } from "@chakra-ui/react";
import React from "react";
import { PokeballBottom, PokeballTop } from "../Elements/Pokeball";

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
    <div className="w-full h-full relative" onClick={onClick}>
      <div className="absolute w-full h-full peer">
        <div
          className={`group bg-gradient-to-t ${
            isBattling ? "from-green-400" : "from-green-600"
          } from-35% ${
            isBattling ? "to-green-500" : "to-green-700"
          } to-60% w-full h-full border-[3px] border-cyan-900 hover:border-red-500 rounded-ss-[38px] cursor-pointer`}
        >
          <div className=" border-green-400 border-[5px] group-hover:border-red-500 h-full w-full px-4 py-3 rounded-ss-[35px]">
            <Text
              noOfLines={1}
              className="ml-16 text-white text-4xl drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]"
            >
              {item.shortName ?? item.name}
            </Text>
          </div>
        </div>
      </div>
      <div
        className={`absolute w-full h-full top-[4px] left-[4px] pointer-events-none transition-all ease-in-out duration-200 ${
          isBattling && "-mt-2"
        } peer-hover:-mt-2`}
      >
        <PokeballTop size={70} />
      </div>
      <div
        className={`absolute w-full h-full top-[4px] left-[4px] pointer-events-none transition-all ease-in-out duration-200 ${
          isBattling && "mt-2"
        } peer-hover:mt-2`}
      >
        <PokeballBottom size={70} />
      </div>
    </div>
  );
};

export default BattlerPreviewAlive;
