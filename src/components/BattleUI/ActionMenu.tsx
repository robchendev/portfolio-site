import { HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import ActionDialog from "./ActionDialog";
import { ScreenTypes } from "./BattleUI";
import { useActionContext } from "@/context/ActionContext";
import CancelButton from "./CancelButton";
import ActionFightMenu from "./ActionFightMenu";

const ActionMenu = ({ onProjectClose }: { onProjectClose: () => void }) => {
  const {
    battler,
    screen,
    setScreen,
    actionDialogText,
    setActionDialogText,
    actionMenuDisabled,
    setActionMenuDisabled,
    isFightMenu,
    setIsFightMenu,
    isFightOver,
    setIsFightOver,
    resetBattle,
    isResetting,
  } = useActionContext();

  useEffect(() => {
    // @ts-ignore
    return () => clearTimeout(window.secondTextTimeout);
  }, [screen]);

  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-400 from-0% via-white via-50% to-gray-400 to-100% px-3 py-1.5">
        <HStack w="full" h="full">
          {isFightMenu ? (
            <ActionFightMenu battleMoves={battler.battleMoves} />
          ) : (
            <ActionDialog text={actionDialogText} />
          )}
          {(isResetting || ((screen === "fight" || screen === "end") && !actionMenuDisabled)) && (
            <>
              {isFightMenu ? (
                <div className="w-1/3 h-2/3">
                  <div
                    className="flex justify-center h-full"
                    onClick={() => {
                      onProjectClose();
                      setActionDialogText("What will you do?");
                      setTimeout(() => {
                        setIsFightMenu(false);
                      }, 10);
                    }}
                  >
                    <CancelButton />
                  </div>
                </div>
              ) : (
                <nav className="w-full h-full -mr-1">
                  {isFightOver ? (
                    <ActionButton
                      text="Reset"
                      color="pink"
                      onClick={() => {
                        resetBattle();
                      }}
                      isCurrentScreen={screen === "fight"}
                    />
                  ) : (
                    <ActionButton
                      text="Fight"
                      color="pink"
                      onClick={() => {
                        if (screen === "fight") {
                          setIsFightMenu(true);
                        } else {
                          setActionDialogText("What will you do?");
                        }
                        setTimeout(() => {
                          setScreen("fight");
                        }, 10);
                      }}
                      isCurrentScreen={screen === "fight"}
                    />
                  )}
                  <ActionButton
                    text="Experience"
                    color="orange"
                    onClick={() => {
                      setActionDialogText(
                        "Choose an Experience or CANCEL. Clicking experiences do nothing yet."
                      );
                      setTimeout(() => {
                        setScreen("experience");
                      }, 10);
                    }}
                    isCurrentScreen={false}
                  />
                  <ActionButton
                    text="Projects"
                    color="green"
                    onClick={() => {
                      setActionDialogText("Choose a Project or CANCEL.");
                      setTimeout(() => {
                        setScreen("projects");
                      }, 10);
                    }}
                    isCurrentScreen={false}
                  />
                  <ActionButton
                    text="About Me"
                    color="blue"
                    onClick={() => {
                      setActionDialogText(
                        "Sorry, this page is incomplete and will be replaced with game UI soon."
                      );
                      setTimeout(() => {
                        setScreen("about");
                      }, 10);
                    }}
                    isCurrentScreen={false}
                  />
                </nav>
              )}
            </>
          )}
          {screen !== "fight" && screen !== "end" && (battler.health !== 0 || isFightOver) && (
            <div className="w-1/3 h-2/3">
              <div
                className="flex justify-center h-full"
                onClick={() => {
                  onProjectClose();
                  setActionDialogText("What will you do?");
                  setTimeout(() => {
                    setScreen("fight");
                  }, 10);
                }}
              >
                <CancelButton />
              </div>
            </div>
          )}
        </HStack>
      </div>
    </div>
  );
};

export default ActionMenu;
