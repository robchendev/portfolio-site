import { default as projectList, ProjectInfo } from "@/data/projects";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface BattleContextType {
  projects: ProjectInfo[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectInfo[]>>;
  projectIndex: number;
  setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
  battler: ProjectInfo;
  setBattler: React.Dispatch<React.SetStateAction<ProjectInfo>>;
}

const BattleContext = createContext<BattleContextType | undefined>(undefined);

export const useBattleContext = () => {
  const context = useContext(BattleContext);
  if (context === undefined) {
    throw new Error("useActionContext must be used within a ActionProvider");
  }
  return context;
};

interface BattleProviderProps {
  children: ReactNode;
}

export const BattleProvider: React.FC<BattleProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<ProjectInfo[]>(projectList);
  const [projectIndex, setProjectIndex] = useState(-1);
  const [battler, setBattler] = useState<ProjectInfo>(projectList[0]);

  return (
    <BattleContext.Provider
      value={{
        projects,
        setProjects,
        projectIndex,
        setProjectIndex,
        battler,
        setBattler,
      }}
    >
      {children}
    </BattleContext.Provider>
  );
};
