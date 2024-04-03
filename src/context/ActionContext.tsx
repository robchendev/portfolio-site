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
  animateHp: (hpChange: number, type: "ally" | "enemy") => void;
  triggerAllyAttack: (battleMove: BattleMove) => void;
  animateAllyHit: boolean;
  animateEnemyHit: boolean;
  animateAllyAttack: boolean;
  animateEnemyAttack: boolean;
  animateAllySwitchReturn: boolean;
  animateAllySwitchEnter: boolean;
  triggerAllySwitchReturn: () => void;
  triggerAllySwitchEnter: () => void;
  animateEnemyDeath: boolean;
  triggerEnemyDeath: () => void;
  isFightMenu: boolean;
  setIsFightMenu: (val: boolean) => void;
  isEnemyDead: boolean;
  setIsEnemyDead: (val: boolean) => void;
  isFullTurnInProgress: boolean;
  setIsFullTurnInProgress: (val: boolean) => void;
  actionMenuEnable: () => void;
  isFightOver: boolean;
  setIsFightOver: (val: boolean) => void;
  resetBattle: () => void;
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

  const [isEnemyDead, setIsEnemyDead] = useState(false);
  const [hpIntervalId, setHpIntervalId] = useState<NodeJS.Timeout | undefined>(undefined);
  const [isFullTurnInProgress, setIsFullTurnInProgress] = useState(false); // On when ally begins attack, off when enemy finishes attack

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const resetBattle = async () => {
    // animateHp(-(ENEMY_INIT_HEALTH * 1.1), "enemy"); // 1.1 multiplier handles rounding error
    setProjects(projectList);
    setProjectIndex(-1);
    setBattler(projectList[0]);
    setIsFightMenu(false);
    setIsFightOver(false);
    setActionMenuDisabled(false);
    setAnimateAllyHit(false);
    setAnimateEnemyHit(false);
    setAnimateAllyAttack(false);
    setAnimateEnemyAttack(false);
    setAnimateAllySwitchReturn(false);
    setAnimateAllySwitchEnter(false);
    setIsEnemyDead(false);
    setHpIntervalId(undefined);
    setActionDialogText("What will you do?");
    setIsFullTurnInProgress(false);
    await delay(10);
    recoverHp();
    setScreen("fight");
    await delay(1000);
    setAnimateEnemyDeath(false);
  };

  // Function that safeguards against setting the action menu enabled again before something finishes
  const actionMenuEnable = useCallback(() => {
    console.log("invoking actionMenuEnable");
    // Alternative method of using while(true) to "wait" since JS is single threaded
    new Promise<void>((resolve) => {
      const checkInterval = setInterval(() => {
        console.log("isFullTurnInProgress", isFullTurnInProgress);
        if (hpIntervalId === undefined && !isFullTurnInProgress) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100); // Check every 100ms
    }).then(() => {
      setActionMenuDisabled(false);
    });
    // eslint-disable-next-line
  }, [isFullTurnInProgress]);

  const triggerEnemyDeath = useCallback(async () => {
    setIsEnemyDead(true);
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
      if (enemyHealth - hpChange < 0.01 * ENEMY_INIT_HEALTH) {
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
              triggerEnemyDeath();
            }
            return newHealth;
          });
        } else if (type === "ally") {
          // TODO
        } else {
          throw new Error(`type ${type} not handled!`);
        }
      }, tickInterval);
      setHpIntervalId(intervalId);

      // Clear the interval after the total duration has elapsed
      setTimeout(() => {
        clearInterval(intervalId);
        // if (!isEnemyDead) {
        //   // Dont want to enable action menu when doing enemy death animation
        //   // or when the enemy is not even on the field to get attacked
        //   actionMenuEnable();
        // }
        setHpIntervalId(undefined);
      }, duration);
    },
    [triggerEnemyDeath, enemyHealth]
  );

  // Animation functions
  const triggerAllyAttack = useCallback(
    async (battleMove: BattleMove) => {
      // Prepare UI for animations
      setActionMenuDisabled(true);
      setIsFullTurnInProgress(true);

      // Prepare death flag
      let enemyWillDie = false;
      if (enemyHealth - battleMove.power < 0.01 * ENEMY_INIT_HEALTH) {
        enemyWillDie = true;
      }

      // Begin animations for ally turn
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
        setAnimateEnemyAttack(true);
        await delay(150);
        setAnimateAllyHit(true);
        await delay(300);
        setAnimateEnemyAttack(false);
        await delay(600);
        setIsFullTurnInProgress(false);
        setAnimateAllyHit(false);
        actionMenuEnable();
      }
    },
    [animateHp, actionMenuEnable, enemyHealth, triggerEnemyDeath]
  );

  const triggerAllySwitchReturn = useCallback(() => {
    setActionMenuDisabled(true);
    setAnimateAllySwitchReturn(true);
    setTimeout(() => {
      setAnimateAllySwitchReturn(false);
    }, 1200);
  }, []);

  const triggerAllySwitchEnter = useCallback(() => {
    setAnimateAllySwitchEnter(true);
    setTimeout(() => {
      setAnimateAllySwitchEnter(false);
      setTimeout(() => {
        setActionDialogText("What will you do?");
        actionMenuEnable();
      }, 300);
    }, 1200);
  }, [actionMenuEnable]);

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
        triggerAllySwitchReturn,
        triggerAllySwitchEnter,
        triggerEnemyDeath,
        // Fight Menu
        isFightMenu,
        setIsFightMenu,
        isEnemyDead,
        setIsEnemyDead,
        isFullTurnInProgress,
        setIsFullTurnInProgress,
        actionMenuEnable,
        isFightOver,
        setIsFightOver,
        resetBattle,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};
