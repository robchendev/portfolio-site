import { ProjectInfo } from "@/components/config/projects";
import { enemyData } from "@/lib/data/enemy";
import { ActionStore } from "@/store/useActionStore";
import projectList from "@/components/config/projects";

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const battleUtils = {
  async animateHp(
    hpChange: number,
    type: "ally" | "enemy",
    get: () => ActionStore,
    set: (partial: Partial<ActionStore> | ((state: ActionStore) => Partial<ActionStore>)) => void
  ) {
    const { enemyHealth, setEnemyHealth, battler, setBattler, projects, setProjects } = get();
    return new Promise<void>((resolve) => {
      const duration = 1000;
      const startTime = Date.now();
      const initialHealth = type === "enemy" ? enemyHealth : battler.health;
      const targetHealth = initialHealth - hpChange;
      let updatedProjects = projects;

      const updateHealth = (newHealth: number) => {
        if (type === "enemy") {
          setEnemyHealth(Math.max(0, Math.min(newHealth, enemyData.maxHealth)));
        } else if (type === "ally") {
          setBattler({
            ...battler,
            health: Math.max(0, Math.min(newHealth, battler.maxHealth)),
          });
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
            ...battler,
            health: targetHealth,
          };
          updatedProjects = projects.map((project: ProjectInfo) =>
            project.name === battler.name ? updatedBattler : project
          );
          setProjects(updatedProjects);
          resolve();
        }
      };

      requestAnimationFrame(animate);
    });
  },

  async recoverHp(get: () => ActionStore) {
    const { enemyHealth, setEnemyHealth } = get();
    return new Promise<void>((resolve) => {
      const duration = 1000;
      const startTime = Date.now();
      const initialHealth = enemyHealth;
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
  },

  async handleActionText(val: string, set: any) {
    set({ actionDialogText: "" });
    await delay(10);
    set({ actionDialogText: val });
  },

  async resetBattle(set: (partial: Partial<ActionStore>) => void, get: () => ActionStore) {
    const { personalizedName } = get();
    set({
      screen: "fight",
      projects: projectList,
      projectIndex: -1,
      battler: projectList[0],
      actionDialogText: "",
      showActionMenu: true,
      enemyHealth: enemyData.maxHealth,
      animateAllyHit: false,
      animateEnemyHit: false,
      animateAllyAttack: false,
      animateEnemyAttack: false,
      animateAllySwitchReturn: false,
      animateAllySwitchEnter: false,
      animateAllyPanelSwitch: false,
      animateEnemyDeath: false,
      animateAllyDeath: false,
      isFightMenu: false,
      winner: undefined,
      isFightOver: false,
      personalizedName: "you",
    });

    set({
      projects: projectList,
      projectIndex: -1,
      battler: projectList[0],
      isFightMenu: false,
      isFightOver: false,
      animateAllyHit: false,
      animateEnemyHit: false,
      animateAllyAttack: false,
      animateEnemyAttack: false,
      animateAllySwitchReturn: false,
      animateAllySwitchEnter: false,
      animateAllyPanelSwitch: false,
      showActionMenu: true,
    });

    await delay(10);

    set({
      screen: "fight",
    });

    await this.recoverHp(get);

    set({
      winner: undefined,
      animateEnemyDeath: false,
      animateAllyDeath: false,
    });

    await this.handleActionText(`What will ${personalizedName} do?`, set);
  },
};
