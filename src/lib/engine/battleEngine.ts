import { ProjectInfo, BattleMove } from "@/components/config/projects";
import { enemyData } from "@/lib/data/enemy";
import { useActionStore } from "@/store/useActionStore";
import { calculateDamage } from "../utils/calculateDamage";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Simple battle logic engine to handle turn-based battle system
// - Turn sequencing (ally / enemy attack)
// - Death and victory (ally / enemy death)
// - Reflect specific scenarios to UI
// Future Extensions:
// - Move types
// - Complex damage calculations (ATK/DEF)
// - Turn order handling (SPD)
// - Additional UI animations
// Future Enhancements:
// - Error handling
// - Refactor bigger functions into smaller, modular ones
// - Testing
export const BattleEngine = {
  async triggerAllyAttack(battleMove: BattleMove) {
    const {
      setShowActionMenu,
      handleActionText,
      animateHp,
      projects,
      setProjects,
      setAnimateAllyAttack,
      setAnimateEnemyHit,
    } = useActionStore.getState();

    // Prepare UI for animations
    setShowActionMenu(false);
    let updatedProjects = projects;

    // Prepare death flags
    const { battler, enemyHealth } = useActionStore.getState();
    const allyMoveDamage = calculateDamage(battler.level, battleMove.power);
    const enemyMove: BattleMove =
      enemyData.battleMoves[Math.floor(Math.random() * enemyData.battleMoves.length)];
    let enemyWillDie = false;
    let battlerWillDie = false;
    if (enemyHealth - allyMoveDamage < 0.01 * enemyData.maxHealth) {
      enemyWillDie = true;
    }
    if (battler.health - enemyMove.power < 0.01 * battler.health) {
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
    handleActionText(`${battler.name} used "${battleMove.name}"!`);
    setAnimateAllyAttack(true);
    await delay(150);
    setAnimateEnemyHit(true);
    await delay(300);
    setAnimateAllyAttack(false);
    setAnimateEnemyHit(false);
    if (enemyWillDie) {
      await animateHp(enemyHealth, "enemy");
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
      await this.triggerEnemyDeath();
    } else {
      await this.triggerEnemyAttack(enemyMove, battlerWillDie, updatedProjects);
    }
  },

  async triggerEnemyAttack(
    enemyMove: BattleMove,
    battlerWillDie: boolean,
    updatedProjects: ProjectInfo[]
  ) {
    const {
      battler,
      setShowActionMenu,
      personalizedName,
      handleActionText,
      animateHp,
      setAnimateEnemyAttack,
      setAnimateAllyHit,
    } = useActionStore.getState();

    handleActionText(`${enemyData.name} used "${enemyMove.name}"!`);
    setAnimateEnemyAttack(true);
    await delay(150);
    setAnimateAllyHit(true);
    await delay(300);
    setAnimateEnemyAttack(false);
    setAnimateAllyHit(false);
    if (battlerWillDie) {
      await animateHp(battler.health, "ally");
    } else {
      await animateHp(enemyMove.power, "ally");
    }

    if (battlerWillDie) {
      await this.triggerBattlerDeath(updatedProjects);
    } else {
      await delay(500);
      setShowActionMenu(true);
      handleActionText("");
      setTimeout(() => {
        handleActionText(`What will ${personalizedName} do?`);
      }, 10);
    }
  },

  async triggerAllySwitch(newBattler: ProjectInfo, prevBattlerDied: boolean) {
    const {
      setBattler,
      setShowActionMenu,
      personalizedName,
      handleActionText,
      setAnimateAllySwitchReturn,
      setAnimateAllyPanelSwitch,
      setAnimateAllySwitchEnter,
      setProjects,
      setAnimateAllyDeath,
    } = useActionStore.getState();

    setShowActionMenu(false);
    if (!prevBattlerDied) {
      await delay(500);
      setAnimateAllySwitchReturn(true);
      setAnimateAllyPanelSwitch(true);
      await delay(500);
    }
    handleActionText(`Go, ${newBattler.shortName ?? newBattler.name}!`); // should put this in switch enter
    setBattler(newBattler);
    await delay(800);
    setAnimateAllyPanelSwitch(false);
    await delay(400);
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
      // Retrieve states here to prevent stale closures
      const { battler, projects } = useActionStore.getState();
      if (battler.health - enemyMove.power < 0.01 * battler.health) {
        battlerWillDie = true;
        let updatedProjects = projects;
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
      await this.triggerEnemyAttack(enemyMove, battlerWillDie, projects); // Shouldn't always be false!
    }
  },

  async triggerEnemyDeath() {
    const {
      setShowActionMenu,
      setAnimateEnemyDeath,
      handleActionText,
      setWinner,
      setIsFightMenu,
      setIsFightOver,
    } = useActionStore.getState();
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
  },

  async triggerBattlerDeath(updatedProjects: ProjectInfo[]) {
    const {
      battler,
      setShowActionMenu,
      setAnimateAllyDeath,
      handleActionText,
      setScreen,
      setAnimateAllyPanelSwitch,
      setWinner,
      setIsFightMenu,
      setIsFightOver,
    } = useActionStore.getState();
    setShowActionMenu(false);
    await delay(1000);
    setAnimateAllyDeath(true);
    await delay(1000);
    handleActionText(`${battler.shortName ?? battler.name} is defeated!`);
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
      await delay(500);
      setAnimateAllyPanelSwitch(true);
    }
  },

  onProjectSwitch() {
    const {
      projects,
      projectIndex,
      isFightOver,
      battler,
      setProjectIndex,
      setScreen,
      setShowActionMenu,
      handleActionText,
      setProjects,
    } = useActionStore.getState();
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
      this.triggerAllySwitch(projects[projectIndex], true);
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
        this.triggerAllySwitch(projects[projectIndex], false);
      }, 1000);
    }
  },
};
