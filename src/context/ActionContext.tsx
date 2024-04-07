import { ScreenTypes } from "@/components/BattleUI/BattleUI";
import { default as projectList, ProjectInfo, BattleMove } from "@/data/projects";
import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

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
  triggerAllySwitch: (newBattler: ProjectInfo) => void;
  animateEnemyDeath: boolean;
  triggerEnemyDeath: () => void;
  animateAllyDeath: boolean;
  isFightMenu: boolean;
  setIsFightMenu: (val: boolean) => void;
  winner: "ally" | "enemy" | undefined;
  setWinner: (val: "ally" | "enemy" | undefined) => void;
  isTurnInProgress: boolean;
  setIsTurnInProgress: (val: boolean) => void;
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
  const [animateAllyDeath, setAnimateAllyDeath] = useState(false);

  const [winner, setWinner] = useState<"ally" | "enemy" | undefined>(undefined);
  const [hpIntervalId, setHpIntervalId] = useState<NodeJS.Timeout | undefined>(undefined);
  const [isTurnInProgress, setIsTurnInProgress] = useState(false); // On when ally begins attack, off when enemy finishes attack

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const resetBattle = async () => {
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
    setHpIntervalId(undefined);
    setActionDialogText("What will you do?");
    setIsTurnInProgress(false);
    await delay(10);
    setScreen("fight");
    await recoverHp();
    setWinner(undefined);
    // await delay(1000);
    setAnimateEnemyDeath(false);
    setAnimateAllyDeath(false);
  };

  // Function that safeguards against setting the action menu enabled again before something finishes
  const actionMenuEnable = useCallback(() => {
    // Alternative method of using while(true) to "wait" since JS is single threaded
    new Promise<void>((resolve) => {
      const checkInterval = setInterval(() => {
        if (hpIntervalId === undefined && !isTurnInProgress && battler.health > 0) {
          clearInterval(checkInterval);
          resolve();
        }
      }, 100); // Check every 100ms
    }).then(() => {
      setActionMenuDisabled(false);
    });
    // eslint-disable-next-line
  }, [battler.health, isTurnInProgress, hpIntervalId]);

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
    setIsTurnInProgress(false);
    actionMenuEnable();
  }, [actionMenuEnable]);

  const triggerBattlerDeath = useCallback(
    async (updatedProjects: ProjectInfo[]) => {
      setActionMenuDisabled(true);
      await delay(1000);
      setAnimateAllyDeath(true);
      await delay(1000);
      setActionDialogText(`${battler.name} is defeated!`);
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
        setIsTurnInProgress(false);
        actionMenuEnable();
      } else {
        setScreen("projects");
        setActionDialogText("Select the next Project.");
      }
    },
    [battler, actionMenuEnable]
  );

  const recoverHp = useCallback(async () => {
    return new Promise<void>((resolve) => {
      const duration = 1000;
      const startTime = Date.now();
      const initialHealth = enemyHealth;
      const targetHealth = ENEMY_INIT_HEALTH;

      const updateHealth = (newHealth: number) => {
        setEnemyHealth(Math.max(0, Math.min(newHealth, ENEMY_INIT_HEALTH)));
      };

      const animate = () => {
        const now = Date.now();
        const elapsedTime = now - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentHealth = initialHealth + ENEMY_INIT_HEALTH * progress;

        updateHealth(currentHealth);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensuring the final health is accurately set to the target
          updateHealth(targetHealth);
          resolve();
        }
      };

      requestAnimationFrame(animate);
    });
  }, [enemyHealth]);

  const animateHp = useCallback(
    async (hpChange: number, type: "ally" | "enemy") => {
      return new Promise<void>((resolve) => {
        const duration = 1000;
        const startTime = Date.now();
        const initialHealth = type === "enemy" ? enemyHealth : battler.health;
        const targetHealth = initialHealth - hpChange;

        const updateHealth = (newHealth: number) => {
          if (type === "enemy") {
            setEnemyHealth(Math.max(0, Math.min(newHealth, ENEMY_INIT_HEALTH)));
          } else if (type === "ally") {
            setBattler((prevBattler) => ({
              ...prevBattler,
              health: Math.max(0, Math.min(newHealth, prevBattler.maxHealth)),
            }));
          }
        };

        const animate = () => {
          const now = Date.now();
          const elapsedTime = now - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const currentHealth = initialHealth - hpChange * progress;

          updateHealth(currentHealth);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            // Ensuring the final health is accurately set to the target
            updateHealth(targetHealth);
            resolve();
          }
        };

        requestAnimationFrame(animate);
      });
    },
    [enemyHealth, battler, setEnemyHealth, setBattler]
  );

  // Animation functions

  const triggerAllyAttack = useCallback(
    async (battleMove: BattleMove) => {
      const enemyPower = Math.floor(Math.random() * (randomMax - randomMin + 1)) + randomMin;
      // const enemyPower = 44.01;

      // Prepare UI for animations
      setActionMenuDisabled(true);
      setIsTurnInProgress(true);
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
      await delay(300);
      setAnimateAllyAttack(false);
      setAnimateEnemyHit(false);
      if (enemyWillDie) {
        await animateHp(enemyHealth, "enemy");
      } else {
        await animateHp(battleMove.power, "enemy");
      }

      // Begin animations for enemy turn
      if (enemyWillDie) {
        await triggerEnemyDeath();
      } else {
        setActionDialogText(`Robert's Unemployment used RandomMove (${enemyPower} DMG)!`);
        setAnimateEnemyAttack(true);
        await delay(150);
        setAnimateAllyHit(true);
        await delay(300);
        setAnimateEnemyAttack(false);
        setAnimateAllyHit(false);
        if (battlerWillDie) {
          await animateHp(battler.health, "ally");
        } else {
          await animateHp(enemyPower, "ally");
        }

        if (battlerWillDie) {
          await triggerBattlerDeath(updatedProjects);
        } else {
          setIsTurnInProgress(false);
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

  // Will need to split triggerAllyAttack into triggerAllyAttack and triggerEnemyAttack
  // if want to implement an enemy turn on ally switch in

  const triggerAllySwitch = useCallback(
    async (newBattler: ProjectInfo) => {
      setActionMenuDisabled(true);
      await delay(500);
      setAnimateAllySwitchReturn(true);
      await delay(500);
      setActionDialogText(`Go, ${newBattler.name}!`); // should put this in switch enter
      setBattler(newBattler);
      await delay(1200);
      // New ally enters
      setAnimateAllyDeath(false);
      setAnimateAllySwitchReturn(false);
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
        actionDialogText,
        setActionDialogText,
        actionMenuDisabled,
        setActionMenuDisabled,
        triggerAllyAttack,
        animateAllyHit,
        animateEnemyHit,
        animateAllyAttack,
        animateEnemyAttack,
        animateAllySwitchReturn,
        animateAllySwitchEnter,
        animateEnemyDeath,
        animateAllyDeath,
        triggerAllySwitch,
        triggerEnemyDeath,
        isFightMenu,
        setIsFightMenu,
        winner,
        setWinner,
        isTurnInProgress,
        setIsTurnInProgress,
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
