import { ScreenTypes } from "@/components/BattleUI/BattleUI";
import { enemyData } from "@/data/enemy";
import { default as projectList, ProjectInfo, BattleMove } from "@/data/projects";
import { calculateDamage } from "@/utils/calculate-damage";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface CombinedContextType {
  screen: ScreenTypes;
  setScreen: React.Dispatch<React.SetStateAction<ScreenTypes>>;
  projects: ProjectInfo[];
  setProjects: React.Dispatch<React.SetStateAction<ProjectInfo[]>>;
  onProjectSwitch: () => void;
  projectIndex: number;
  setProjectIndex: React.Dispatch<React.SetStateAction<number>>;
  battler: ProjectInfo;
  setBattler: React.Dispatch<React.SetStateAction<ProjectInfo>>;
  actionDialogText: string;
  setActionDialogText: React.Dispatch<React.SetStateAction<string>>;
  showActionMenu: boolean;
  setShowActionMenu: React.Dispatch<React.SetStateAction<boolean>>;
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
  triggerAllySwitch: (newBattler: ProjectInfo, prevBattlerDied: boolean) => void;
  animateEnemyDeath: boolean;
  triggerEnemyDeath: () => void;
  animateAllyDeath: boolean;
  isFightMenu: boolean;
  setIsFightMenu: (val: boolean) => void;
  winner: "ally" | "enemy" | undefined;
  setWinner: (val: "ally" | "enemy" | undefined) => void;
  isFightOver: boolean;
  setIsFightOver: (val: boolean) => void;
  personalizedName: string;
  setPersonalizedName: (val: string) => void;
  resetBattle: () => void;
  handleActionText: (val: string) => Promise<void>;
}
// TODO: Change the above to async where necessary like handleActionText

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
  const [personalizedName, setPersonalizedName] = useState("you");

  // Action Bar
  const [actionDialogText, setActionDialogText] = useState("");
  const [showActionMenu, setShowActionMenu] = useState(true);

  // Enemy HP
  const [enemyHealth, setEnemyHealth] = useState(enemyData.maxHealth);

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

  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const resetBattle = async () => {
    setProjects(projectList);
    setProjectIndex(-1);
    setBattler(projectList[0]);
    setIsFightMenu(false);
    setIsFightOver(false);
    setAnimateAllyHit(false);
    setAnimateEnemyHit(false);
    setAnimateAllyAttack(false);
    setAnimateEnemyAttack(false);
    setAnimateAllySwitchReturn(false);
    setAnimateAllySwitchEnter(false);
    setShowActionMenu(true);
    await delay(10);
    setScreen("fight");
    await recoverHp();
    setWinner(undefined);
    handleActionText(`What will ${personalizedName} do?`);
    setAnimateEnemyDeath(false);
    setAnimateAllyDeath(false);
  };

  const handleActionText = useCallback(async (text: string) => {
    setActionDialogText("");
    await delay(10);
    setActionDialogText(text);
  }, []);

  // Prevention of stale closure on states:
  // If callback functions have async operations or delays
  // and need the latest state value after these operations,
  // then use stateRef.current for most up-to-date state.
  const battlerRef = useRef(battler);
  useEffect(() => {
    battlerRef.current = battler;
  }, [battler]);
  const enemyHealthRef = useRef(enemyHealth);
  useEffect(() => {
    enemyHealthRef.current = enemyHealth;
  }, [enemyHealth]);

  const onProjectSwitch = () => {
    let errors: string[] = [];

    if (!projects[projectIndex]) {
      errors.push("The current project at the specified index does not exist.");
    }
    if (isFightOver) {
      errors.push("The fight is already over.");
    }
    if (battler.name === projects[projectIndex].name) {
      errors.push("The battler's name matches the current project's name.");
    }
    if (projects[projectIndex].health <= 0) {
      errors.push("The current project's health is 0 or less.");
    }

    if (errors.length > 0) {
      console.error(errors);
      return;
    }

    setProjectIndex(-1);
    setScreen("fight");

    // When current ally is dead, "go, B!"
    if (battler.health === 0) {
      triggerAllySwitch(projects[projectIndex], true);
    }
    // When current ally is alive, "A, come back!" -> "go, B!"
    else {
      const updatedProjects = projects.map((project) =>
        project.name === battler.name ? battler : project
      );
      setProjects(updatedProjects);
      setShowActionMenu(false);
      handleActionText(`${battler.shortName ?? battler.name}, come back!`);
      setTimeout(() => {
        triggerAllySwitch(projects[projectIndex], false);
      }, 1000);
    }
  };

  const triggerEnemyDeath = useCallback(async () => {
    setWinner("ally");
    await delay(1000);
    setShowActionMenu(false);
    setAnimateEnemyDeath(true);
    await delay(1000);
    handleActionText(`${enemyData.name} is defeated!`);
    await delay(2000);
    handleActionText("Congrats, you won!");
    await delay(2000);
    setIsFightMenu(false);
    setIsFightOver(true);
    setShowActionMenu(true);
  }, [handleActionText]);

  const triggerBattlerDeath = useCallback(
    async (updatedProjects: ProjectInfo[]) => {
      setShowActionMenu(false);
      await delay(1000);
      setAnimateAllyDeath(true);
      await delay(1000);
      handleActionText(`${battlerRef.current.shortName ?? battlerRef.current.name} is defeated!`);
      await delay(1000);
      // Open projects screen if one battler still alive. Otherwise, game over
      const allDead = updatedProjects.every((project) => project.health === 0 || !project.enabled);
      if (allDead) {
        setWinner("enemy");
        await delay(1000);
        handleActionText("All your projects are dead!");
        await delay(2000);
        handleActionText("You lost!");
        await delay(2000);
        setIsFightMenu(false);
        setIsFightOver(true);
        setShowActionMenu(true);
      } else {
        setScreen("projects");
        handleActionText("Select the next Project.");
      }
    },
    [handleActionText]
  );

  const recoverHp = useCallback(async () => {
    return new Promise<void>((resolve) => {
      const duration = 1000;
      const startTime = Date.now();
      const initialHealth = enemyHealthRef.current;
      const targetHealth = enemyData.maxHealth;

      const updateHealth = (newHealth: number) => {
        setEnemyHealth(Math.max(0, Math.min(newHealth, enemyData.maxHealth)));
      };

      const animate = () => {
        const now = Date.now();
        const elapsedTime = now - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentHealth = initialHealth + enemyData.maxHealth * progress;

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
  }, []);

  const animateHp = useCallback(
    async (hpChange: number, type: "ally" | "enemy") => {
      return new Promise<void>((resolve) => {
        const duration = 1000;
        const startTime = Date.now();
        const initialHealth = type === "enemy" ? enemyHealthRef.current : battlerRef.current.health;
        const targetHealth = initialHealth - hpChange;
        let updatedProjects = projects;

        const updateHealth = (newHealth: number) => {
          if (type === "enemy") {
            setEnemyHealth(Math.max(0, Math.min(newHealth, enemyData.maxHealth)));
          } else if (type === "ally") {
            setBattler((prevBattler) => ({
              ...prevBattler,
              health: Math.max(0, Math.min(newHealth, battlerRef.current.maxHealth)),
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
            const updatedBattler = {
              ...battlerRef.current,
              health: targetHealth,
            };
            updatedProjects = projects.map((project) =>
              project.name === battlerRef.current.name ? updatedBattler : project
            );
            setProjects(updatedProjects);
            resolve();
          }
        };

        requestAnimationFrame(animate);
      });
    },
    [setEnemyHealth, setBattler, projects]
  );

  // Animation functions
  const triggerEnemyAttack = useCallback(
    async (
      enemyAttackMove: BattleMove,
      battlerWillDie: boolean,
      updatedProjects: ProjectInfo[]
    ) => {
      handleActionText(`${enemyData.name} used "${enemyAttackMove.name}"!`);
      setAnimateEnemyAttack(true);
      await delay(150);
      setAnimateAllyHit(true);
      await delay(300);
      setAnimateEnemyAttack(false);
      setAnimateAllyHit(false);
      if (battlerWillDie) {
        await animateHp(battlerRef.current.health, "ally");
      } else {
        await animateHp(enemyAttackMove.power, "ally");
      }

      if (battlerWillDie) {
        await triggerBattlerDeath(updatedProjects);
      } else {
        await delay(500);
        setShowActionMenu(true);
        handleActionText("");
        setTimeout(() => {
          handleActionText(`What will ${personalizedName} do?`);
        }, 10);
      }
    },
    [animateHp, triggerBattlerDeath, personalizedName, handleActionText]
  );

  const triggerAllyAttack = useCallback(
    async (battleMove: BattleMove) => {
      // Prepare UI for animations
      setShowActionMenu(false);
      let updatedProjects = projects;

      // Prepare death flags
      const allyMoveDamage = calculateDamage(battlerRef.current.level, battleMove.power);
      const enemyMove: BattleMove =
        enemyData.battleMoves[Math.floor(Math.random() * enemyData.battleMoves.length)];
      let enemyWillDie = false;
      let battlerWillDie = false;
      if (enemyHealthRef.current - allyMoveDamage < 0.01 * enemyData.maxHealth) {
        enemyWillDie = true;
      }
      if (battlerRef.current.health - enemyMove.power < 0.01 * battlerRef.current.health) {
        battlerWillDie = true;
        // We know ally will die here, so update battler into projects
        const updatedBattler = {
          ...battlerRef.current,
          health: 0,
        };
        updatedProjects = projects.map((project) =>
          project.name === battlerRef.current.name ? updatedBattler : project
        );
        setProjects(updatedProjects);
      }

      // Begin animations for ally turn
      handleActionText(`${battlerRef.current.name} used "${battleMove.name}"!`);
      setAnimateAllyAttack(true);
      await delay(150);
      setAnimateEnemyHit(true);
      await delay(300);
      setAnimateAllyAttack(false);
      setAnimateEnemyHit(false);
      if (enemyWillDie) {
        await animateHp(enemyHealthRef.current, "enemy");
      } else {
        if (battleMove.power < 0) {
          await animateHp(allyMoveDamage, "enemy");
          handleActionText(`${enemyData.name} was healed!`);
          await delay(2000);
        } else {
          await animateHp(allyMoveDamage, "enemy");
        }
      }

      // Begin animations for enemy turn
      if (enemyWillDie) {
        await triggerEnemyDeath();
      } else {
        await triggerEnemyAttack(enemyMove, battlerWillDie, updatedProjects);
      }
    },
    [animateHp, triggerEnemyDeath, projects, triggerEnemyAttack, handleActionText]
  );

  const triggerAllySwitch = useCallback(
    async (newBattler: ProjectInfo, prevBattlerDied: boolean) => {
      setShowActionMenu(false);
      if (!prevBattlerDied) {
        await delay(500);
        setAnimateAllySwitchReturn(true);
        await delay(500);
      }
      handleActionText(`Go, ${newBattler.shortName ?? newBattler.name}!`); // should put this in switch enter
      setBattler(newBattler);
      await delay(1200);
      // New ally enters
      setAnimateAllyDeath(false);
      setAnimateAllySwitchReturn(false);
      setAnimateAllySwitchEnter(true);
      await delay(600);
      setAnimateAllySwitchEnter(false);
      await delay(300);

      const enemyMove: BattleMove =
        enemyData.battleMoves[Math.floor(Math.random() * enemyData.battleMoves.length)];
      if (prevBattlerDied) {
        handleActionText(`What will ${personalizedName} do?`);
        setShowActionMenu(true);
      } else {
        let battlerWillDie = false;
        if (battlerRef.current.health - enemyMove.power < 0.01 * battlerRef.current.health) {
          battlerWillDie = true;
          let updatedProjects = projects;
          // We know ally will die here, so update battler into projects
          const updatedBattler = {
            ...battlerRef.current,
            health: 0,
          };
          updatedProjects = projects.map((project) =>
            project.name === battlerRef.current.name ? updatedBattler : project
          );
          setProjects(updatedProjects);
        }
        await triggerEnemyAttack(enemyMove, battlerWillDie, projects); // Shouldn't always be false!
      }
    },
    [projects, triggerEnemyAttack, personalizedName, handleActionText]
  );

  return (
    <ActionContext.Provider
      value={{
        screen,
        setScreen,
        projects,
        setProjects,
        onProjectSwitch,
        projectIndex,
        setProjectIndex,
        battler,
        setBattler,
        enemyHealth,
        setEnemyHealth,
        animateHp,
        actionDialogText,
        setActionDialogText,
        showActionMenu,
        setShowActionMenu,
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
        isFightOver,
        setIsFightOver,
        personalizedName,
        setPersonalizedName,
        resetBattle,
        handleActionText,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};
