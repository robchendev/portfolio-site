import { HStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ActionButton from "./ActionButton";
import ActionDialog from "./ActionDialog";
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
    showActionMenu,
    isFightMenu,
    setIsFightMenu,
    isFightOver,
    resetBattle,
  } = useActionContext();

  useEffect(() => {
    // @ts-ignore
    return () => clearTimeout(window.secondTextTimeout);
  }, [screen]);

  return (
    <div className="relative h-full border-t-[0.5rem] border-black">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-400 from-0% via-white via-50% to-gray-400 to-100% py-1.5">
        <HStack w="full" h="full" gap={0}>
          {isFightMenu ? (
            <ActionFightMenu battleMoves={battler.battleMoves} />
          ) : (
            <ActionDialog text={actionDialogText} />
          )}
          {(screen === "fight" || screen === "end") && showActionMenu && (
            <>
              {isFightMenu ? (
                <div className="w-1/4 h-2/3 pr-2">
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
                <nav className="w-1/2 h-full mx-1">
                  {isFightOver ? (
                    <ActionButton
                      text="Reset"
                      color="pink"
                      onClick={() => {
                        resetBattle();
                      }}
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
                    />
                  )}
                  <ActionButton
                    text="Experience"
                    color="orange"
                    onClick={() => {
                      setActionDialogText("Choose an Experience or CANCEL.");
                      setTimeout(() => {
                        setScreen("experience");
                      }, 10);
                    }}
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
                  />
                  <ActionButton
                    text="About Me"
                    color="blue"
                    onClick={() => {
                      setActionDialogText("Click around or CANCEL.");
                      setTimeout(() => {
                        setScreen("about");
                      }, 10);
                    }}
                  />
                </nav>
              )}
            </>
          )}
          {screen !== "fight" && screen !== "end" && (battler.health !== 0 || isFightOver) && (
            <div className="w-1/4 h-2/3 pr-2">
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
