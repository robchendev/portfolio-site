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
import { ActionDialogProvider } from "./../../context/ActionDialogContext";

export type ScreenTypes = "fight" | "experience" | "projects" | "about";

export const panelController = (selector: string, enable: boolean, amount = 75) => {
  anime({
    targets: selector,
    translateY: enable ? `-${amount}%` : `${amount}%`,
    easing: "easeInOutQuad",
    duration: 600,
  });
};

const BattleUI = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenTypes>("fight");
  const [screen, setScreen] = useState<ScreenTypes>("fight");
  const [battler, setBattler] = useState(projects[0].name);

  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(-1);
  const [projectIndex, setProjectIndex] = useState<number>(-1);

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

  useEffect(() => {
    if (projectIndex !== -1) {
      // panelController(".projects", true, 100);
      // setTimeout(() => {
      setActiveProjectIndex(projectIndex);
      // }, 800);
    } else {
      // setTimeout(() => {
      // panelController(".projects", false, 100);
      setActiveProjectIndex(projectIndex);
      // }, 800);
    }
  }, [projectIndex]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <ActionDialogProvider>
        <main className="h-3/4 z-0 top-0 left-0 relative">
          <CombatScene />
          <div className="h-full w-full absolute top-[75%] screens z-[5]">
            {(activeScreen === "experience" || screen === "experience") && (
              <div>Experience gym badge screen</div>
              // <ScreenSelectables items={projects} currentBattler={battler} />
            )}
            {(activeScreen === "projects" || screen === "projects") && (
              <ScreenSelectables
                items={projects}
                currentBattler={battler}
                activeProjectIndex={activeProjectIndex}
                setActiveProjectIndex={setActiveProjectIndex}
                projectIndex={projectIndex}
                setProjectIndex={setProjectIndex}
              />
            )}
            {(activeScreen === "about" || screen === "about") && <AboutMe />}
          </div>
          <div className="w-full absolute bottom-0 z-[10]">
            {/* activeScreen: {activeScreen} | screen: {screen} */}
            <hr className="h-2 w-full bg-black" />
          </div>
        </main>
        <footer className="h-1/4 z-2">
          <ActionMenu
            onActionSelect={(screenNew: ScreenTypes) => {
              setActiveScreen(screen);
              setScreen(screenNew);
            }}
            screen={screen}
            onProjectClose={() => {
              setTimeout(() => {
                // panelController(".projects", false, 100);
                setProjectIndex(-1);
                setActiveProjectIndex(projectIndex);
              }, 800);
            }}
          />
        </footer>
      </ActionDialogProvider>
    </div>
  );
};

export default BattleUI;
