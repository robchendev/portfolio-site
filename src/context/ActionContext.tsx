import { ScreenTypes } from "@/components/BattleUI/BattleUI";
import { default as projectList, ProjectInfo } from "@/data/projects";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

export const ENEMY_INIT_HEALTH = 200;

interface CombinedContextType {
  screen: ScreenTypes;
  setScreen: React.Dispatch<React.SetStateAction<ScreenTypes>>;
  projects: ProjectInfo[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectInfo[]>>;
  projectIndex: number;
  setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
  battler: ProjectInfo;
  setBattler: React.Dispatch<React.SetStateAction<ProjectInfo>>;
  actionDialogText: string;
  setActionDialogText: React.Dispatch<React.SetStateAction<string>>;
  actionMenuDisabled: boolean;
  setActionMenuDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  enemyHealth: number;
  setEnemyHealth: React.Dispatch<React.SetStateAction<number>>;
  triggerAllyAttack: () => void;
  triggerEnemyAttack: () => void;
  animateAllyHit: boolean;
  animateEnemyHit: boolean;
  animateAllyAttack: boolean;
  animateEnemyAttack: boolean;
}

const ActionContext = createContext<CombinedContextType | undefined>(undefined);

export const useActionContext = () => {
  const context = useContext(ActionContext);
  if (context === undefined) {
    throw new Error("useActionContext must be used within a ActionProvider");
  }
  return context;
};

interface ActionProviderProps {
  children: ReactNode;
}

export const ActionProvider: React.FC<ActionProviderProps> = ({ children }) => {
  const [screen, setScreen] = useState<ScreenTypes>("fight");
  const [projects, setProjects] = useState<ProjectInfo[]>(projectList);
  const [projectIndex, setProjectIndex] = useState(-1);
  const [battler, setBattler] = useState<ProjectInfo>(projectList[0]);

  // Action Bar
  const [actionDialogText, setActionDialogText] = useState("This portfolio is under development.");
  const [actionMenuDisabled, setActionMenuDisabled] = useState(false);

  // Enemy HP
  const [enemyHealth, setEnemyHealth] = useState(ENEMY_INIT_HEALTH);

  // Animation states
  const [animateAllyHit, setAnimateAllyHit] = useState(false);
  const [animateEnemyHit, setAnimateEnemyHit] = useState(false);
  const [animateAllyAttack, setAnimateAllyAttack] = useState(false);
  const [animateEnemyAttack, setAnimateEnemyAttack] = useState(false);

  // Animation functions
  const triggerAllyAttack = useCallback(() => {
    setActionMenuDisabled(true);
    setAnimateAllyAttack(true);
    setTimeout(() => {
      setAnimateAllyAttack(false);
    }, 450);

    setTimeout(() => {
      setAnimateEnemyHit(true);
      setTimeout(() => {
        setAnimateEnemyHit(false);
        setActionMenuDisabled(false);
      }, 600);
    }, 150);
  }, []);

  const triggerEnemyAttack = useCallback(() => {
    setActionMenuDisabled(true);
    setAnimateEnemyAttack(true);
    setTimeout(() => {
      setAnimateEnemyAttack(false);
    }, 450);

    setTimeout(() => {
      setAnimateAllyHit(true);
      setTimeout(() => {
        setAnimateAllyHit(false);
        setActionMenuDisabled(false);
      }, 600);
    }, 150);
  }, []);

  return (
    <ActionContext.Provider
      value={{
        screen,
        setScreen,
        projects,
        setProjects,
        projectIndex,
        setProjectIndex,
        battler,
        setBattler,
        enemyHealth,
        setEnemyHealth,
        // Action Menu Controls
        actionDialogText,
        setActionDialogText,
        actionMenuDisabled,
        setActionMenuDisabled,
        // Animation Controls
        triggerAllyAttack,
        triggerEnemyAttack,
        animateAllyHit,
        animateEnemyHit,
        animateAllyAttack,
        animateEnemyAttack,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};
