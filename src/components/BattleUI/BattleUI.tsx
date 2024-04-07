import React from "react";
import ActionMenu from "./ActionMenu";
import CombatScene from "./CombatScene";
import projects from "@/data/projects";
import ScreenSelectables from "./ScreenSelectables";
import AboutMe from "./AboutMe";
import { motion, AnimatePresence } from "framer-motion";
import ProjectScreen from "../PagesUI/ProjectScreen";
import { useActionContext } from "@/context/ActionContext";
import EndScreen from "./EndScreen";

export type ScreenTypes = "fight" | "experience" | "projects" | "about" | "end";

const BattleUI = () => {
  const { screen, projectIndex, setProjectIndex, isFightOver } = useActionContext();

  const screenVariants = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
  };

  const endScreenVariants = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
  };

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <main className="flex-grow overflow-hidden relative z-0">
        <AnimatePresence>
          <motion.div
            key="endscreen"
            className="h-full w-full absolute bottom-0 z-[5]"
            variants={endScreenVariants}
            initial="initial"
            animate={isFightOver ? "animate" : "initial"}
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
          >
            <EndScreen />
          </motion.div>
          <CombatScene key="combatscreen" />
          {screen !== "fight" && (
            <motion.div
              key="otherscreen"
              className="h-full w-full absolute bottom-0 z-[6]"
              variants={screenVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
            >
              {screen === "experience" && <div>Experience gym badge screen</div>}
              {screen === "projects" && <ScreenSelectables items={projects} />}
              {screen === "about" && <AboutMe />}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          className={`h-full w-full absolute z-[10] ${
            projectIndex === -1 ? "pointer-events-none" : ""
          }`}
        >
          <ProjectScreen
            onExit={() => {
              setProjectIndex(-1);
            }}
            projects={projects}
          />
        </div>
      </main>
      <footer className="h-[27%] z-2">
        <ActionMenu
          onProjectClose={() => {
            setProjectIndex(-1);
          }}
        />
      </footer>
    </div>
  );
};

export default BattleUI;
