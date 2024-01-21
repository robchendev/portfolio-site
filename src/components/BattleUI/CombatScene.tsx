import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { BattlerPanel, EnemyBattlerPanel } from "./BattlerPanel";
import EnemyPlatform from "./EnemyPlatform";
import BattleBackground from "./BattleBackground";

const CombatScene = () => {
  return (
    <div className="h-full box-border border-b-8 border-black relative bg-cyan-200">
      {/* Sky and Background */}
      <div className="h-full w-full absolute top-0 left-0">
        <BattleBackground />
      </div>

      {/* Vignette */}
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-radial from-transparent from-60% to-[rgba(0,0,0,0.2)] to-100%" />

      {/* Enemy Platform */}
      <div className="h-full w-full absolute top-0 left-0 ">
        <EnemyPlatform />
      </div>

      {/* Pokemon Info */}
      <div className="h-full w-full absolute top-0 left-0 ">
        <div className="h-[12%]" />
        <div className="h-[20%] w-[45%] overflow-hidden relative">
          <div className="h-full w-full bg-white p-[0.15rem] skew-x-12 z-0 -ml-4">
            <div className="h-full w-full bg-gray-700 py-1.5 pr-1">
              <div className="h-full w-full bg-gray-500 py-1">
                <div className="h-full w-full bg-gradient-to-t from-gray-400 from-0% to-gray-100 to-50% pl-8 pr-3 py-0.5">
                  {/* This box will have its left side hidden by 1rem */}
                  {/* Your content here */}
                  <div className="-skew-x-12">
                    <EnemyBattlerPanel name="Robert Chen" level={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[35%]" />
        <div className="ml-[55%] h-[25%] w-[45%] overflow-hidden relative">
          <div className="h-full w-full bg-white p-[0.15rem] -skew-x-12 z-0 ml-4">
            <div className="h-full w-full bg-gray-700 py-1.5 pl-1">
              <div className="h-full w-full bg-gray-500 py-1">
                <div className="h-full w-full bg-gradient-to-t from-gray-400 from-0% to-gray-100 to-50% pl-3 pr-8 py-0.5">
                  <div className="skew-x-12">
                    <BattlerPanel name="Pikachu" level={30} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombatScene;
