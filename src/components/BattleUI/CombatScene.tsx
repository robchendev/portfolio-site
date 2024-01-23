import React from "react";
import { BattlerPanel, EnemyBattlerPanel } from "./BattlerPanel";
import EnemyPlatform from "./EnemyPlatform";
import BattleBackground from "./BattleBackground";
import { BattlerWrapper, BattlerWrapperEnemy } from "./BattlerWrapper";
import { Image } from "@chakra-ui/react";

const CombatScene = () => {
  return (
    <div className="h-full box-border relative bg-cyan-200">
      {/* Sky and Background */}
      <div className="h-full w-full absolute">
        <BattleBackground />
      </div>

      {/* Vignette */}
      <div className="h-full w-full absolute bg-gradient-radial from-transparent from-60% to-[rgba(0,0,0,0.25)] to-100%" />

      {/* Enemy Platform */}
      <div className="h-full w-full absolute top-[52%]">
        <EnemyPlatform />
      </div>

      {/* Enemy Pokemon */}
      <div className="h-full w-full absolute top-[21%]">
        <div className="ml-[64%] w-[20%]">
          <Image src="/img/visual2.jpg" alt="Robert Chen Image" />
        </div>
      </div>

      {/* Enemy Pokemon Info */}
      <div className="h-full w-full absolute top-[12%]">
        <BattlerWrapperEnemy>
          <EnemyBattlerPanel name="Robert Chen" level={25} />
        </BattlerWrapperEnemy>
      </div>

      {/* Ally Pokemon Info */}
      <div className="h-full w-full absolute top-[67%]">
        <BattlerWrapper>
          <BattlerPanel name="Pikachu" level={30} />
        </BattlerWrapper>
      </div>

      {/* Ally Pokemon */}
      <div className="h-full w-full absolute top-[50%]">
        <div className="ml-[10%] w-[32%]">
          <Image src="/img/visual2.jpg" alt="Robert Chen Image" />
        </div>
      </div>

      {/* Bottom Border Separator */}
      <div className="w-full absolute bottom-0 left-0">
        <div className="h-2 w-full bg-black" />
      </div>
    </div>
  );
};

export default CombatScene;
