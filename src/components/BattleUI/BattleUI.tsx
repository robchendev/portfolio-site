import React, { useEffect, useState } from "react";
import ActionMenu from "./ActionMenu";
import CombatScene from "./CombatScene";
import anime from "animejs";
import projects from "@/data/projects";
import ScreenSelectables from "./ScreenSelectables";
import experience from "@/data/experience";
import Link from "next/link";
import { HStack, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaSpotify, FaYoutube } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import AboutMe from "./AboutMe";

export type ScreenTypes = "fight" | "experience" | "projects" | "about";

const panelController = (selector: string, enable: boolean) => {
  anime({
    targets: selector,
    translateY: enable ? "-75%" : "75%",
    easing: "easeInOutQuad",
    duration: 600,
  });
};

const BattleUI = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenTypes>("fight");
  const [screen, setScreen] = useState<ScreenTypes>("fight");
  const [battler, setBattler] = useState(projects[0].name);

  useEffect(() => {
    switch (screen) {
      case "experience":
      case "projects":
      case "about":
        panelController(".screens", true);
        setTimeout(() => {
          setActiveScreen(screen);
        }, 800);
        break;
      case "fight":
        panelController(".screens", false);
        setTimeout(() => {
          setActiveScreen(screen);
        }, 800);
        break;
    }
  }, [screen]);

  return (
    <div className="w-full h-full relative">
      <div className="h-3/4 z-0 top-0 left-0 relative">
        <div className="h-full w-full absolute">
          <CombatScene />
        </div>
        <div className="h-full w-full absolute top-[75%] screens z-[5]">
          {(activeScreen === "experience" || screen === "experience") && (
            <ScreenSelectables items={experience} currentBattler={battler} />
          )}
          {(activeScreen === "projects" || screen === "projects") && (
            <ScreenSelectables items={projects} currentBattler={battler} />
          )}
          {(activeScreen === "about" || screen === "about") && <AboutMe />}
        </div>
        <div className="w-full absolute bottom-0 z-[10]">
          {/* activeScreen: {activeScreen} | screen: {screen} */}
          <div className="h-2 w-full bg-black" />
        </div>
      </div>

      <div className="h-1/4 z-2">
        <ActionMenu
          onActionSelect={(screenNew: ScreenTypes) => {
            setActiveScreen(screen);
            setScreen(screenNew);
          }}
          screen={screen}
        />
      </div>
    </div>
  );
};

export default BattleUI;
