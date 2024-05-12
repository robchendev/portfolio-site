import { HStack } from "@chakra-ui/react";
import React from "react";

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
      className="bg-slate-800 rounded w-full h-full px-1 py-[0.3rem] drop-shadow-[2px_2px_1px_rgba(0,0,0,.15)]"
      spacing={1.5}
    >
      <div className="text-amber-400 font-extrabold tracking-wide leading-none">HP</div>
      <div className="h-full w-full relative">
        <div className="h-full w-full absolute top-0 left-0">
          <div className="w-full bg-white h-full" />
        </div>
        <div className="h-full w-full absolute top-0 left-0">
          <div
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

export default HitPointsBar;
