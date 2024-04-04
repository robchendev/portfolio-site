import { ScreenTypes } from "@/components/BattleUI/BattleUI";
import { default as projectList, ProjectInfo, BattleMove } from "@/data/projects";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from "react";

export const ENEMY_INIT_HEALTH = 100;
const randomMin = 30;
const randomMax = 70;

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
  animateHp: (hpChange: number, type: "ally" | "enemy") => void;
  // TODO: Rename Ally to Battler OR vice versa
  triggerAllyAttack: (battleMove: BattleMove) => void;
  animateAllyHit: boolean;
  animateEnemyHit: boolean;
  animateAllyAttack: boolean;
  animateEnemyAttack: boolean;
  animateAllySwitchReturn: boolean;
  animateAllySwitchEnter: boolean;
  triggerAllySwitchReturn: (newBattler: ProjectInfo) => void;
  triggerAllySwitchEnter: (newBattler: ProjectInfo) => void;
  animateEnemyDeath: boolean;
  triggerEnemyDeath: () => void;
  animateAllyDeath: boolean;
  isFightMenu: boolean;
  setIsFightMenu: (val: boolean) => void;
  winner: "ally" | "enemy" | undefined;
  setWinner: (val: "ally" | "enemy" | undefined) => void;
  isFullTurnInProgress: boolean;
  setIsFullTurnInProgress: (val: boolean) => void;
  actionMenuEnable: () => void;
  isFightOver: boolean;
  setIsFightOver: (val: boolean) => void;
  resetBattle: () => void;
  onBattlerDeathSwitch: () => void;
  isResetting: boolean;
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
  const [isFightMenu, setIsFightMenu] = useState(false);
  const [isFightOver, setIsFightOver] = useState(false);

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
  const [animateAllySwitchReturn, setAnimateAllySwitchReturn] = useState(false);
  const [animateAllySwitchEnter, setAnimateAllySwitchEnter] = useState(false);
  const [animateEnemyDeath, setAnimateEnemyDeath] = useState(false);
  const [animateAllyDeath, setAnimateAllyDeath] = useState(false);

  const [winner, setWinner] = useState<"ally" | "enemy" | undefined>(undefined);
  const [hpIntervalId, setHpIntervalId] = useState<NodeJS.Timeout | undefined>(undefined);
  const [isFullTurnInProgress, setIsFullTurnInProgress] = useState(false); // On when ally begins attack, off when enemy finishes attack

  const [isResetting, setIsResetting] = useState(false);

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const resetBattle = async () => {
    setIsResetting(true);
    // animateHp(-(ENEMY_INIT_HEALTH * 1.1), "enemy"); // 1.1 multiplier handles rounding error
    setActionMenuDisabled(false);
    setIsFullTurnInProgress(false);
    actionMenuEnable();
    setScreen("fight");
    setAnimateAllyHit(false);
    setProjects(projectList);
    setProjectIndex(-1);
    setBattler(projectList[0]);
    setIsFightMenu(false);
    setIsFightOver(false);
    setAnimateEnemyHit(false);
    setAnimateAllyAttack(false);
    setAnimateEnemyAttack(false);
    setAnimateAllySwitchReturn(false);
    setAnimateAllySwitchEnter(false);
    setWinner(undefined);
    setHpIntervalId(undefined);
    setActionDialogText("What will you do?");
    await delay(10);
    recoverHp();
    await delay(1000);
    setAnimateEnemyDeath(false);
    setAnimateAllyDeath(false);
    setIsResetting(false);
  };

  useEffect(() => {
    // if (screen === "projects") {
    //   setActionDialogText("Choose a project.");
    // }
  }, [screen]);

  // Function that safeguards against setting the action menu enabled again before something finishes
  const actionMenuEnable = useCallback(() => {
    // Alternative method of using while(true) to "wait" since JS is single threaded
    new Promise<void>((resolve) => {
      const checkInterval = setInterval(() => {
        if (hpIntervalId === undefined && !isFullTurnInProgress && battler.health > 0) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100); // Check every 100ms
    }).then(() => {
      setActionMenuDisabled(false);
    });
    // eslint-disable-next-line
  }, []);

  const triggerEnemyDeath = useCallback(async () => {
    setWinner("ally");
    await delay(1000);
    setActionMenuDisabled(true);
    setAnimateEnemyDeath(true);
    await delay(1000);
    setActionDialogText("Robert's Unemployment is defeated!");
    await delay(2000);
    setActionDialogText("Congrats, you won!");
    await delay(2000);
    setIsFightMenu(false);
    setIsFightOver(true);
    setIsFullTurnInProgress(false);
    actionMenuEnable();
  }, [actionMenuEnable]);

  const onBattlerDeathSwitch = useCallback(async () => {
    setIsFullTurnInProgress(false);
    // actionMenuEnable();
  }, []);

  const areAllProjectsDead = useCallback(() => {
    for (const project of projects) {
      if (project.health !== 0 && project.enabled) {
        console.log("This project is alive", project);
        return false;
      }
    }
    return true;
  }, [projects]);

  // TODO: this is executing twice for some reason
  const triggerBattlerDeath = useCallback(
    async (updatedProjects: ProjectInfo[]) => {
      console.log("triggerBattlerDeath", updatedProjects, projects);
      // Prepare UI
      setActionMenuDisabled(true);

      // Animate battler death (shift downwards on y axis)
      await delay(1000);
      setAnimateAllyDeath(true);

      // Text
      await delay(1000);
      setActionDialogText(`${battler.name} is defeated!`);
      // setIsFightMenu(false);

      await delay(1000);
      // Open projects screen if one battler still alive. Otherwise, game over
      const allDead = updatedProjects.every((project) => project.health === 0 || !project.enabled);
      if (allDead) {
        setWinner("enemy");
        await delay(1000);
        setActionDialogText("All your projects are dead!");
        await delay(2000);
        setActionDialogText("You lost!");
        await delay(2000);
        setIsFightMenu(false);
        setIsFightOver(true);
        setIsFullTurnInProgress(false);
        actionMenuEnable();
      } else {
        setScreen("projects");
        setActionDialogText("Select the next Project.");
      }
    },
    [battler, actionMenuEnable, projects]
  );

  const recoverHp = useCallback(() => {
    const duration = 1000;
    const tickInterval = 8; // 16.67ms is average time per frame on a 60FPS device
    const numberOfTicks = duration / tickInterval;
    const hpPerTick = (ENEMY_INIT_HEALTH * 1.1) / numberOfTicks;
    setActionMenuDisabled(true);

    const intervalId = setInterval(() => {
      setEnemyHealth((prevHealth) => {
        let newHealth = prevHealth + hpPerTick;
        newHealth = newHealth > 0 ? newHealth : 0;
        newHealth = newHealth < ENEMY_INIT_HEALTH ? newHealth : ENEMY_INIT_HEALTH;
        // If health adjustment is done, clear the interval immediately
        if (newHealth === 0 || newHealth === ENEMY_INIT_HEALTH) {
          clearInterval(intervalId);
          setHpIntervalId(undefined);
        }
        return newHealth;
      });
    }, tickInterval);
    setHpIntervalId(intervalId);

    // Clear the interval after the total duration has elapsed
    setTimeout(() => {
      clearInterval(intervalId);
      setHpIntervalId(undefined);
      actionMenuEnable();
    }, duration);
  }, [actionMenuEnable]);

  const animateHp = useCallback(
    (hpChange: number, type: "ally" | "enemy") => {
      let duration = 1000;
      const tickInterval = 8; // 16.67ms is average time per frame on a 60FPS device
      const numberOfTicks = duration / tickInterval;
      const hpPerTick = hpChange / numberOfTicks;
      setActionMenuDisabled(true);

      // If enemy is close to dying, such that the hp bar will leave a sliver of hp,
      // then just continue draining the hp until it is zero.
      if (type === "ally" && battler.health - hpChange < 0.01 * battler.maxHealth) {
        duration *= 1.2;
      } else if (type === "enemy" && enemyHealth - hpChange < 0.01 * ENEMY_INIT_HEALTH) {
        duration *= 1.2;
      }

      const intervalId = setInterval(() => {
        if (type === "enemy") {
          setEnemyHealth((prevHealth) => {
            let newHealth = prevHealth - hpPerTick;
            newHealth = newHealth > 0 ? newHealth : 0;
            newHealth = newHealth < ENEMY_INIT_HEALTH ? newHealth : ENEMY_INIT_HEALTH;
            // If health adjustment is done, clear the interval immediately
            if (newHealth === 0 || newHealth === ENEMY_INIT_HEALTH) {
              clearInterval(intervalId);
              // actionMenuEnable();
              setHpIntervalId(undefined);
            }
            if (newHealth === 0) {
              // triggerEnemyDeath();
            }
            return newHealth;
          });
        } else if (type === "ally") {
          setBattler((prevBattler) => {
            let newHealth = prevBattler.health - hpPerTick;
            newHealth = newHealth > 0 ? newHealth : 0;
            newHealth = newHealth < prevBattler.maxHealth ? newHealth : prevBattler.maxHealth;
            if (newHealth === 0 || newHealth === prevBattler.maxHealth) {
              clearInterval(intervalId);
              setHpIntervalId(undefined);
            }
            if (newHealth === 0) {
              const updatedBattler = {
                ...battler,
                health: 0,
              };
              // console.log("this project is is dead!", updatedBattler);
              const updatedProjects = projects.map((project) =>
                project.name === battler.name ? updatedBattler : project
              );
              setProjects(updatedProjects);
              // passing in the updatedProjects to make sure it's up to date
              // triggerBattlerDeath(updatedProjects);
            }
            return {
              ...prevBattler,
              health: newHealth,
            };
          });
        } else {
          throw new Error(`type ${type} not handled!`);
        }
      }, tickInterval);
      setHpIntervalId(intervalId);

      // Clear the interval after the total duration has elapsed
      setTimeout(() => {
        clearInterval(intervalId);
        setHpIntervalId(undefined);
      }, duration);
    },

    // // After the ending calculation, set current battler to projectsList to update it
    // const updatedProjectsList = getUpdatedProjectList(projectList, battlerUpdate);
    // setProjects(updatedProjectsList);
    [enemyHealth, battler, projects]
  );

  // Animation functions
  const triggerAllyAttack = useCallback(
    async (battleMove: BattleMove) => {
      const enemyPower = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;

      // Prepare UI for animations
      setActionMenuDisabled(true);
      setIsFullTurnInProgress(true);
      let updatedProjects = projects;

      // Prepare death flags
      let enemyWillDie = false;
      let battlerWillDie = false;
      if (enemyHealth - battleMove.power < 0.01 * ENEMY_INIT_HEALTH) {
        enemyWillDie = true;
      }
      if (battler.health - enemyPower < 0.01 * battler.maxHealth) {
        battlerWillDie = true;
        // We know ally will die here, so update battler into projects
        const updatedBattler = {
          ...battler,
          health: 0,
        };
        // console.log("this project is is dead!", updatedBattler);
        updatedProjects = projects.map((project) =>
          project.name === battler.name ? updatedBattler : project
        );
        setProjects(updatedProjects);
      }

      // Begin animations for ally turn
      setActionDialogText(`${battler.name} used ${battleMove.name}!`);
      setAnimateAllyAttack(true);
      await delay(150);
      setAnimateEnemyHit(true);
      animateHp(battleMove.power, "enemy");
      await delay(300);
      setAnimateAllyAttack(false);
      await delay(600);
      setAnimateEnemyHit(false);
      await delay(500);

      // Begin animations for enemy turn
      if (enemyWillDie) {
        await triggerEnemyDeath();
      } else {
        setActionDialogText(`Robert's Unemployment used RandomMove (${enemyPower} DMG)!`);
        setAnimateEnemyAttack(true);
        await delay(150);
        setAnimateAllyHit(true);
        animateHp(enemyPower, "ally");
        await delay(300);
        setAnimateEnemyAttack(false);
        await delay(600);
        setAnimateAllyHit(false);
        if (battlerWillDie) {
          await triggerBattlerDeath(updatedProjects);
          // const updatedBattler = {
          //   ...battler,
          //   health: 0,
          // };
          // console.log("battler is dead!", updatedBattler);
          // const updatedProjects = projects.map((project) =>
          //   project.name === battler.name ? updatedBattler : project
          // );
          // setProjects(updatedProjects);
          // await triggerBattlerDeath(); // idk why this is here. Removed because it causes textwriter issues
        } else {
          setIsFullTurnInProgress(false);
          actionMenuEnable();
          setTimeout(() => {
            setActionDialogText("What will you do?");
          }, 10);
        }
      }
    },
    [
      animateHp,
      actionMenuEnable,
      enemyHealth,
      triggerEnemyDeath,
      battler,
      projects,
      triggerBattlerDeath,
    ]
  );

  const triggerAllySwitchReturn = async (newBattler: ProjectInfo) => {
    // Prepare UI for animation
    // TODO: logic to check if we can skil the "switchreturn and just go to the switchenter"
    setActionMenuDisabled(true);
    await delay(500);
    setAnimateAllySwitchReturn(true);
    await delay(500);
    setActionDialogText(`Go, ${newBattler.name}!`); // should put this in switch enter
    setBattler(newBattler);
    // animate
    await delay(1200);

    triggerAllySwitchEnter(newBattler);

    setAnimateAllyDeath(false);
    setAnimateAllySwitchReturn(false);
  };

  const triggerAllySwitchEnter = useCallback(
    async (newBattler: ProjectInfo) => {
      // Do we need this newBattler?
      // Save current battler state into projects
      // const updatedProjects = projects.map((project) =>
      //   project.name === battler.name ? battler : project
      // );
      // // Only want to update when battler is not dead since we
      // // already update it when we calculate ally will die in animateHp
      // if (battler.health !== 0) {
      //   console.log("Updating in triggerAllySwitchReturn!");
      //   setProjects(updatedProjects);
      // }

      setAnimateAllySwitchEnter(true);
      await delay(600);
      setAnimateAllySwitchEnter(false);
      await delay(300);
      setActionDialogText("What will you do?");
      actionMenuEnable();
    },
    [actionMenuEnable]
  );

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
        animateHp,
        // Action Menu Controls
        actionDialogText,
        setActionDialogText,
        actionMenuDisabled,
        setActionMenuDisabled,
        // Animation Controls
        triggerAllyAttack,
        animateAllyHit,
        animateEnemyHit,
        animateAllyAttack,
        animateEnemyAttack,
        animateAllySwitchReturn,
        animateAllySwitchEnter,
        animateEnemyDeath,
        animateAllyDeath,
        triggerAllySwitchReturn,
        triggerAllySwitchEnter,
        triggerEnemyDeath,
        // Fight Menu
        isFightMenu,
        setIsFightMenu,
        winner,
        setWinner,
        isFullTurnInProgress,
        setIsFullTurnInProgress,
        actionMenuEnable,
        isFightOver,
        setIsFightOver,
        resetBattle,
        onBattlerDeathSwitch,
        isResetting,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};
