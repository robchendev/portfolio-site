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
import { ActionDialogProvider, useActionDialog } from "./../../context/ActionDialogContext";
import { motion, AnimatePresence } from "framer-motion";
import ProjectScreen from "../PagesUI/ProjectScreen";

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
  const { setActionDialogText } = useActionDialog();

  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(-1);
  const [projectIndex, setProjectIndex] = useState<number>(-1);

  const screenVariants = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
  };

  // const screenTransition = {
  //   duration: 0.6,
  //   ease: "easeInOut",
  // };

  useEffect(() => {
    // switch (screen) {
    //   case "experience":
    //   case "projects":
    //   case "about":
    //     setTimeout(() => setActiveScreen(screen), 1000); // Adjust timing as needed
    //     break;
    //   case "fight":
    //     setActiveScreen(screen);
    //     break;
    // }
    setActiveScreen(screen);
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
      <main className="h-3/4 z-0 top-0 left-0 relative">
        <CombatScene />
        <AnimatePresence>
          {activeScreen !== "fight" && (
            <motion.div
              className="h-full w-full absolute bottom-0 z-[5]"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {activeScreen === "experience" && <div>Experience gym badge screen</div>}
              {activeScreen === "projects" && (
                <ScreenSelectables
                  items={projects}
                  currentBattler={battler}
                  activeProjectIndex={activeProjectIndex}
                  setActiveProjectIndex={setActiveProjectIndex}
                  projectIndex={projectIndex}
                  setProjectIndex={setProjectIndex}
                />
              )}
              {activeScreen === "about" && <AboutMe />}
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={`h-full w-full absolute projects z-[10] ${
            projectIndex === -1 ? "pointer-events-none" : ""
          }`}
        >
          <ProjectScreen
            onExit={() => {
              setProjectIndex(-1);
              setActionDialogText("Choose a Project or CANCEL.");

              // panelController(".projects", false, 100);
            }}
            activeProjectIndex={activeProjectIndex}
            projectIndex={projectIndex}
            projects={projects}
          />
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
            // setTimeout(() => {
            // panelController(".projects", false, 100);
            setProjectIndex(-1);
            setActiveProjectIndex(projectIndex);
            // }, 800);
          }}
        />
      </footer>
    </div>
  );
};

export default BattleUI;
