import React from "react";
import ActionMenu from "./ActionMenu";
import CombatScene from "./CombatScene";

const BattleUI = () => {
  return (
    <div className="w-full h-full">
      {/* <div className="absolute top-0 left-0 h-full w-8 bg-red-500" />
      <div className="absolute top-0 left-0 w-full h-8 bg-yellow-300">BattleUI</div> */}
      <div className="h-3/4 bg-red-500">
        <CombatScene />
      </div>
      <div className="h-1/4 bg-yellow-500">
        <ActionMenu />
      </div>
    </div>
  );
};

export default BattleUI;
