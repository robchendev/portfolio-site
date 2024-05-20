import { HStack, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ActionButton from "../Buttons/ActionButton";
import ActionDialog from "./ActionDialog";
import CancelButton from "../Buttons/CancelButton";
import ActionFightMenu from "./ActionFightMenu";
import SwitchButton, { SwitchButtonDisabled } from "../Buttons/SwitchButton";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useActionStore } from "@/store/useActionStore";
import { BattleEngine } from "@/lib/engine/battleEngine";

const ActionMenu = ({ onProjectClose }: { onProjectClose: () => void }) => {
  const {
    battler,
    screen,
    setScreen,
    actionDialogText,
    showActionMenu,
    isFightMenu,
    setIsFightMenu,
    isFightOver,
    resetBattle,
    projectIndex,
    projects,
    personalizedName,
    setPersonalizedName,
    handleActionText,
  } = useActionStore();

  const chosenProjectIsDead = !projects[projectIndex]?.health;
  useEffect(() => {
    // @ts-ignore
    return () => clearTimeout(window.secondTextTimeout);
  }, [screen]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const campaign = searchParams.get("c");

  useEffect(() => {
    if (campaign) {
      setPersonalizedName(campaign);
      handleActionText(`What will ${campaign} do?`);
      router.push(pathname);
    } else {
      handleActionText(`What will you do?`);
    }
    // Add /?campaign=your_custom_value to the base url
    // to give the user a personalized name
    // eslint-disable-next-line
  }, []);

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
                      handleActionText(`What will ${personalizedName} do?`);
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
                          handleActionText(`What will ${personalizedName} do?`);
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
                      handleActionText("Scroll through the Experiences or CANCEL.");
                      setTimeout(() => {
                        setScreen("experience");
                      }, 10);
                    }}
                  />
                  <ActionButton
                    text="Projects"
                    color="green"
                    onClick={() => {
                      handleActionText("Choose a Project or CANCEL.");
                      setTimeout(() => {
                        setScreen("projects");
                      }, 10);
                    }}
                  />
                  <ActionButton
                    text="About Me"
                    color="blue"
                    onClick={() => {
                      handleActionText("Click around or CANCEL.");
                      setTimeout(() => {
                        setScreen("about");
                      }, 10);
                    }}
                  />
                </nav>
              )}
            </>
          )}
          {/* Other screens */}
          {!isFightOver &&
            screen !== "fight" &&
            screen !== "end" &&
            projectIndex === -1 &&
            (battler.health !== 0 || isFightOver) && (
              <div className="w-1/4 h-2/3 pr-2">
                <div
                  className="flex justify-center h-full"
                  onClick={() => {
                    onProjectClose();
                    handleActionText(`What will ${personalizedName} do?`);
                    setTimeout(() => {
                      setScreen("fight");
                    }, 10);
                  }}
                >
                  <CancelButton />
                </div>
              </div>
            )}
          {/* A project is chosen in the projects screen */}
          {!isFightOver &&
            screen === "projects" &&
            projectIndex !== -1 &&
            (battler.health !== 0 || isFightOver) && (
              <VStack className="w-1/4 h-full pr-2" spacing={0}>
                <div
                  className="flex justify-center w-full h-full -mb-[0.175rem]"
                  onClick={() => {
                    if (battler.name === projects[projectIndex]?.name) {
                      handleActionText("This project is already in battle!");
                    }
                    if (!chosenProjectIsDead) {
                      BattleEngine.onProjectSwitch();
                    } else {
                      handleActionText("This project is dead!");
                    }
                  }}
                >
                  {chosenProjectIsDead || battler.name === projects[projectIndex]?.name ? (
                    <SwitchButtonDisabled />
                  ) : (
                    <SwitchButton />
                  )}
                </div>
                <div
                  className="flex justify-center w-full h-full -mt-[0.175rem]"
                  onClick={() => {
                    onProjectClose();
                    handleActionText("Select a Project or CANCEL.");
                  }}
                >
                  <CancelButton />
                </div>
              </VStack>
            )}
          {/* Battler is dead */}
          {!isFightOver && projectIndex !== -1 && screen === "projects" && battler.health === 0 && (
            <VStack className="w-1/4 h-full pr-2 -ml-2" spacing={0}>
              <div
                className="flex justify-center w-full h-full -mb-[0.175rem]"
                onClick={() => {
                  if (!chosenProjectIsDead) {
                    BattleEngine.onProjectSwitch();
                  } else {
                    handleActionText("This project is dead!");
                  }
                }}
              >
                {chosenProjectIsDead ? <SwitchButtonDisabled /> : <SwitchButton />}
              </div>
              <div
                className="flex justify-center w-full h-full -mt-[0.175rem]"
                onClick={() => {
                  onProjectClose();
                  handleActionText("Select the next project to SWITCH to.");
                }}
              >
                <CancelButton />
              </div>
            </VStack>
          )}
          {isFightOver && screen !== "fight" && screen !== "end" && projectIndex === -1 && (
            <div className="w-1/4 h-2/3 pr-2">
              <div
                className="flex justify-center h-full"
                onClick={() => {
                  onProjectClose();
                  handleActionText(`What will ${personalizedName} do?`);
                  setTimeout(() => {
                    setScreen("fight");
                  }, 10);
                }}
              >
                <CancelButton />
              </div>
            </div>
          )}
          {isFightOver && projectIndex !== -1 && screen === "projects" && (
            <div className="w-1/4 h-2/3 pr-2">
              <div
                className="flex justify-center h-full"
                onClick={() => {
                  onProjectClose();
                  handleActionText("Select a Project or CANCEL.");
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
