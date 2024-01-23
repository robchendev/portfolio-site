import React from "react";
import { BattlerPanel, EnemyBattlerPanel } from "./BattlerPanel";
import EnemyPlatform from "./EnemyPlatform";
import BattleBackground from "./BattleBackground";
import { BattlerWrapper, BattlerWrapperEnemy } from "./BattlerWrapper";

const CombatScene = () => {
  return (
    <div className="h-full box-border border-b-8 border-black relative bg-cyan-200">
      {/* Sky and Background */}
      <div className="h-full w-full absolute top-0 left-0">
        <BattleBackground />
      </div>

      {/* Vignette */}
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-radial from-transparent from-60% to-[rgba(0,0,0,0.25)] to-100%" />

      {/* Enemy Platform */}
      <div className="h-full w-full absolute top-0 left-0 ">
        <EnemyPlatform />
      </div>

      {/* Pokemon Info */}
      <div className="h-full w-full absolute top-0 left-0 ">
        <BattlerWrapperEnemy>
          <EnemyBattlerPanel name="Robert Chen" level={25} />
        </BattlerWrapperEnemy>
        <BattlerWrapper>
          <BattlerPanel name="Pikachu" level={30} />
        </BattlerWrapper>
      </div>
    </div>
  );
};

export default CombatScene;
