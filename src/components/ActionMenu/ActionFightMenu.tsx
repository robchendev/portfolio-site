import { BattleMove } from "@/components/config/projects";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import MoveSelector from "../Elements/MoveSelectArrow";
import { useActionStore } from "@/store/useActionStore";
import { BattleEngine } from "@/lib/engine/battleEngine";

const Move = ({
  battleMove,
  onClick,
}: {
  battleMove: BattleMove;
  onClick: (battleMove: BattleMove) => void;
}) => {
  return (
    <GridItem
      className={`px-4 group ${battleMove ? "cursor-pointer" : "cursor-not-allowed"}`}
      onClick={() => {
        if (battleMove) {
          onClick(battleMove);
        }
      }}
    >
      <Flex align="center" className="h-full">
        <MoveSelector
          size={28}
          className={`mt-0.5 -ml-[8px] hidden ${battleMove ? "group-hover:block" : ""}`}
        />
        {battleMove ? (
          <p className="drop-shadow-[3px_2px_0px_rgba(0,0,0,.15)] ">{battleMove.name}</p>
        ) : (
          "- - -"
        )}
      </Flex>
    </GridItem>
  );
};

const ActionFightMenu = ({ battleMoves }: { battleMoves: BattleMove[] }) => {
  const { setShowActionMenu, setIsFightMenu } = useActionStore();

  const onBattleMoveSelect = (battleMove: BattleMove) => {
    setIsFightMenu(false);
    setShowActionMenu(false);
    BattleEngine.triggerAllyAttack(battleMove);
  };

  return (
    <div className="h-full p-[12px] rounded-[20px] font-semibold -tracking-[0.01em] text-[2.25rem] text-gray-600 w-3/4 shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_#fcd34d] bg-gray-500 py-[13px] px-[17px] ml-2">
      <Grid
        className="h-full rounded-[8px] bg-white"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
      >
        <Move battleMove={battleMoves[0]} onClick={onBattleMoveSelect} />
        <Move battleMove={battleMoves[1]} onClick={onBattleMoveSelect} />
        <Move battleMove={battleMoves[2]} onClick={onBattleMoveSelect} />
        <Move battleMove={battleMoves[3]} onClick={onBattleMoveSelect} />
      </Grid>
    </div>
  );
};

export default ActionFightMenu;
