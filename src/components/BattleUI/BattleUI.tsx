import React, { useEffect, useState } from "react";
import ActionMenu from "./ActionMenu";
import CombatScene from "./CombatScene";
import anime from "animejs";
import projects, { ProjectInfo } from "@/data/projects";
import { HStack, VStack } from "@chakra-ui/react";
import BattlerPreview from "./BattlerPreview";
import ScreenSelectables from "./ScreenSelectables";
import experience from "@/data/experience";

export type ScreenTypes = "fight" | "experience" | "projects" | "about";

const panelController = (selector: string, enable: boolean) => {
  anime({
    targets: selector,
    translateY: enable ? "100%" : "-100%",
    easing: "easeInOutQuad",
    duration: 700,
  });
};

// const panelControls = {
//   fight: {
//     open: panelController(".fight", true),
//     close: panelController(".fight", false),
//   },
//   projects: {
//     open: panelController(".projects", true),
//     close: panelController(".projects", false),
//   },
//   experience: {
//     open: panelController(".projects", true),
//     close: panelController(".projects", false),
//   },
//   about: {
//     open: panelController(".fight", true),
//     close: panelController(".fight", false),
//   },
// };

const panelCloseAllExcept = (selectorsToClose: string, selectorToKeepOpen: string) => {};

const BattleUI = () => {
  const [screen, setScreen] = useState<ScreenTypes>("fight");

  // TODO: Debounce screen swap when it is in animation
  useEffect(() => {
    switch (screen) {
      case "experience":
      case "projects":
      case "about":
        panelController(".screens", false);
        break;
      case "fight":
        panelController(".screens", true);
        break;
    }
  }, [screen]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* <div className="absolute top-0 left-0 h-full w-8 bg-red-500" />
      <div className="absolute top-0 left-0 w-full h-8 bg-yellow-300">BattleUI</div> */}
      <div className="h-3/4 z-0 top-0 left-0">
        <div className="h-3/4 w-full absolute">
          <CombatScene />
        </div>
        <div className="h-3/4 w-full absolute top-[75%] screens">
          {screen === "experience" && <ScreenSelectables items={experience} />}
          {screen === "projects" && <ScreenSelectables items={projects} />}
          {screen === "about" && <div>ABOUT</div>}
        </div>
        <div className="w-full absolute bottom-[25%] z-[10]">
          <div className="h-2 w-full bg-black" />
        </div>
      </div>

      <div className="h-1/4 z-2">
        {/* Type: {screen} */}
        <ActionMenu onActionSelect={(screen: ScreenTypes) => setScreen(screen)} screen={screen} />
      </div>
    </div>
  );
};

export default BattleUI;
