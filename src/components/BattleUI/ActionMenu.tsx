import { HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import ActionDialog from "./ActionDialog";
import { ScreenTypes } from "./BattleUI";

const ActionMenu = ({
  onActionSelect,
  screen,
}: {
  onActionSelect: (screenNew: ScreenTypes) => void;
  screen: ScreenTypes;
}) => {
  const [actionDialogText, setActionDialogText] = useState(
    "This portfolio is still being worked on. Try it out!"
  );
  useEffect(() => {
    // Cleanup logic: Clear timeout if screen changes
    // @ts-ignore
    return () => clearTimeout(window.secondTextTimeout);
  }, [screen]);
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-400 from-0% via-white via-50% to-gray-400 to-100% px-3 py-1.5">
        <HStack w="full" h="full">
          <ActionDialog text={actionDialogText} />
          {screen === "fight" && (
            <div className="w-full h-full -mr-1">
              <span className="w-1/2 h-1/2 inline-block">
                <ActionButton
                  text="Fight"
                  color="pink"
                  onClick={() => {
                    if (screen === "fight") {
                      setActionDialogText("Portfolio Website used Attack!");
                      // @ts-ignore
                      window.secondTextTimeout = setTimeout(() => {
                        // Check if screen hasn't changed
                        if (screen === "fight") {
                          setActionDialogText("It missed since I did not code this part yet!");
                        }
                      }, 2000);
                    } else {
                      setActionDialogText("What will you do?");
                    }
                    setTimeout(() => {
                      onActionSelect("fight");
                    }, 10);
                  }}
                  isCurrentScreen={screen === "fight"}
                />
              </span>
              <span className="w-1/2 h-1/2 inline-block">
                <ActionButton
                  text="Experience"
                  color="orange"
                  onClick={() => {
                    setActionDialogText(
                      "Choose an Experience or CANCEL. Clicking experiences do nothing yet."
                    );
                    setTimeout(() => {
                      onActionSelect("experience");
                    }, 10);
                  }}
                  isCurrentScreen={false}
                />
              </span>
              <span className="w-1/2 h-1/2 inline-block">
                <ActionButton
                  text="Projects"
                  color="green"
                  onClick={() => {
                    setActionDialogText(
                      "Choose a Project or CANCEL. Clicking projects do nothing yet."
                    );
                    setTimeout(() => {
                      onActionSelect("projects");
                    }, 10);
                  }}
                  isCurrentScreen={false}
                />
              </span>
              <span className="w-1/2 h-1/2 inline-block">
                <ActionButton
                  text="About Me"
                  color="blue"
                  onClick={() => {
                    setActionDialogText(
                      "Sorry, this page is incomplete and will be replaced with game UI soon."
                    );
                    setTimeout(() => {
                      onActionSelect("about");
                    }, 10);
                  }}
                  isCurrentScreen={false}
                />
              </span>
            </div>
          )}
          {screen !== "fight" && (
            <div className="w-1/3 h-2/3">
              <div
                className="flex justify-center h-full"
                onClick={() => {
                  setActionDialogText("What will you do?");
                  setTimeout(() => {
                    onActionSelect("fight");
                  }, 10);
                }}
              >
                <div className="rounded-[25px] font-medium text-3xl text-white text-outline bg-black w-full p-1.5">
                  <div className="h-full rounded-[20px] bg-white p-[3px]">
                    <button className="tracking-tight w-full h-full rounded-[17px] bg-red-700 p-[3px]">
                      <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-red-500 from-40% to-red-700 to-80%">
                        <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-red-500 transition ease-out duration-300">
                          <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">CANCEL</div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* <ActionButton
                text="About Me"
                color="blue"
                onClick={() => {
                  onActionSelect("about");
                  setActionDialogText("About mE!");
                }}
                isCurrentScreen={false}
              /> */}
            </div>
          )}
        </HStack>
      </div>
    </div>
  );
};

export default ActionMenu;
