import { BattleMove } from "@/data/projects";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import MoveSelector from "./MoveSelectArrow";
import { useActionContext } from "@/context/ActionContext";

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
          <p className="drop-shadow-[3px_2px_0px_rgba(0,0,0,.15)] ">
            {battleMove.name} {battleMove.power}
          </p>
        ) : (
          "- - -"
        )}
      </Flex>
    </GridItem>
  );
};

const ActionFightMenu = ({ battleMoves }: { battleMoves: BattleMove[] }) => {
  const { setActionMenuDisabled, setIsFightMenu, triggerAllyAttack } = useActionContext();

  const onBattleMoveSelect = (battleMove: BattleMove) => {
    setIsFightMenu(false);
    setActionMenuDisabled(true);
    triggerAllyAttack(battleMove);
  };

  return (
    <div className="flex-grow h-full rounded-[20px] font-semibold text-[2.25rem] text-gray-600 bg-black w-full p-1.5">
      <div className="h-full rounded-[14px] bg-yellow-300 p-[3px]">
        <div className="h-full rounded-[12px] bg-gray-500 py-1 px-2">
          <div className="h-full rounded-[8px] bg-white">
            <Grid h="full" templateRows="repeat(2, 1fr)" templateColumns="repeat(2, 1fr)">
              <Move battleMove={battleMoves[0]} onClick={onBattleMoveSelect} />
              <Move battleMove={battleMoves[1]} onClick={onBattleMoveSelect} />
              <Move battleMove={battleMoves[2]} onClick={onBattleMoveSelect} />
              <Move battleMove={battleMoves[3]} onClick={onBattleMoveSelect} />
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionFightMenu;
