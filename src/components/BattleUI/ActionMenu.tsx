import { Grid, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import ActionButton from "./ActionButton";
import ActionDialog from "./ActionDialog";
import { ScreenTypes } from "./BattleUI";

const ActionMenu = ({
  onActionSelect,
  screen,
}: {
  onActionSelect: (screen: ScreenTypes) => void;
  screen: ScreenTypes;
}) => {
  const [actionDialogText, setActionDialogText] = useState("What will you do?");

  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-400 from-0% via-white via-50% to-gray-400 to-100% px-3 py-1.5">
        <HStack w="full" h="full">
          <ActionDialog text={actionDialogText} />
          <div className="w-full h-full -mr-1">
            <span className="w-1/2 h-1/2 inline-block">
              <ActionButton
                text="Fight"
                color="pink"
                onClick={() => {
                  onActionSelect("fight");
                  setActionDialogText("What will you do?");
                }}
                isCurrentScreen={screen === "fight"}
              />
            </span>
            <span className="w-1/2 h-1/2 inline-block">
              <ActionButton
                text="Experience"
                color="orange"
                onClick={() => {
                  onActionSelect("experience");
                  setActionDialogText("Choose an Experience");
                }}
                isCurrentScreen={screen === "experience"}
              />
            </span>
            <span className="w-1/2 h-1/2 inline-block">
              <ActionButton
                text="Projects"
                color="green"
                onClick={() => {
                  onActionSelect("projects");
                  setActionDialogText("Choose a Project");
                }}
                isCurrentScreen={screen === "projects"}
              />
            </span>
            <span className="w-1/2 h-1/2 inline-block">
              <ActionButton
                text="About Me"
                color="blue"
                onClick={() => {
                  onActionSelect("about");
                  setActionDialogText("About mE!");
                }}
                isCurrentScreen={screen === "about"}
              />
            </span>
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default ActionMenu;
