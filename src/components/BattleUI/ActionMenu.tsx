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
    screen,
    setScreen,
    actionDialogText,
    setActionDialogText,
    actionMenuDisabled,
    setActionMenuDisabled,
  } = useActionContext();

  useEffect(() => {
    // @ts-ignore
    return () => clearTimeout(window.secondTextTimeout);
  }, [screen]);

  const [isFightMenu, setIsFightMenu] = useState(false);
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-400 from-0% via-white via-50% to-gray-400 to-100% px-3 py-1.5">
        <HStack w="full" h="full">
          {isFightMenu ? (
            <ActionFightMenu text="Needs to be replaced" />
          ) : (
            <ActionDialog text={actionDialogText} />
          )}
          {screen === "fight" && (
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
                  <ActionButton
                    text="Fight"
                    color="pink"
                    onClick={() => {
                      if (screen === "fight") {
                        setIsFightMenu(true);
                        // setActionDialogText("Portfolio Website used Attack!");
                        // // @ts-ignore
                        // window.secondTextTimeout = setTimeout(() => {
                        //   // Check if screen hasn't changed
                        //   if (screen === "fight") {
                        //     setActionDialogText("It missed since I did not code this part yet!");
                        //   }
                        // }, 2000);
                      } else {
                        setActionDialogText("What will you do?");
                      }
                      setTimeout(() => {
                        setScreen("fight");
                      }, 10);
                    }}
                    isCurrentScreen={screen === "fight"}
                  />
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
          {screen !== "fight" && (
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
