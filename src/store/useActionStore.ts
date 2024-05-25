import { create } from "zustand";
import { ScreenTypes } from "@/components/BattleUI/BattleUI";
import { enemyData } from "@/lib/data/enemy";
import { default as projectList, ProjectInfo } from "@/components/config/projects";
import { battleUtils } from "@/lib/utils/battleUtils";

export interface ActionStore {
  screen: ScreenTypes;
  projects: ProjectInfo[];
  projectIndex: number;
  battler: ProjectInfo;
  actionDialogText: string;
  showActionMenu: boolean;
  enemyHealth: number;
  animateAllyHit: boolean;
  animateEnemyHit: boolean;
  animateAllyAttack: boolean;
  animateEnemyAttack: boolean;
  animateAllySwitchReturn: boolean;
  animateAllySwitchEnter: boolean;
  animateAllyPanelSwitch: boolean;
  animateEnemyDeath: boolean;
  animateAllyDeath: boolean;
  isFightMenu: boolean;
  winner: "ally" | "enemy" | undefined;
  isFightOver: boolean;
  personalizedName: string;

  setScreen: (screen: ScreenTypes) => void;
  setProjects: (projects: ProjectInfo[]) => void;
  setProjectIndex: (index: number) => void;
  setBattler: (battler: ProjectInfo) => void;
  setActionDialogText: (text: string) => void;
  setShowActionMenu: (show: boolean) => void;
  setEnemyHealth: (health: number) => void;
  setAnimateAllyHit: (val: boolean) => void;
  setAnimateEnemyHit: (val: boolean) => void;
  setAnimateAllyAttack: (val: boolean) => void;
  setAnimateEnemyAttack: (val: boolean) => void;
  setAnimateAllySwitchReturn: (val: boolean) => void;
  setAnimateAllySwitchEnter: (val: boolean) => void;
  setAnimateAllyPanelSwitch: (val: boolean) => void;
  setAnimateEnemyDeath: (val: boolean) => void;
  setAnimateAllyDeath: (val: boolean) => void;
  setIsFightMenu: (val: boolean) => void;
  setWinner: (val: "ally" | "enemy" | undefined) => void;
  setIsFightOver: (val: boolean) => void;
  setPersonalizedName: (val: string) => void;
  animateHp: (hpChange: number, type: "ally" | "enemy") => Promise<void>;
  resetBattle: () => void;
  handleActionText: (val: string) => Promise<void>;
}

export const useActionStore = create<ActionStore>((set, get) => ({
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

  setScreen: (screen) => set({ screen }),
  setProjects: (projects) => set({ projects }),
  setProjectIndex: (index) => set({ projectIndex: index }),
  setBattler: (battler) => set({ battler }),
  setActionDialogText: (text) => set({ actionDialogText: text }),
  setShowActionMenu: (show) => set({ showActionMenu: show }),
  setEnemyHealth: (health) => set({ enemyHealth: health }),
  setAnimateAllyHit: (val) => set({ animateAllyHit: val }),
  setAnimateEnemyHit: (val) => set({ animateEnemyHit: val }),
  setAnimateAllyAttack: (val) => set({ animateAllyAttack: val }),
  setAnimateEnemyAttack: (val) => set({ animateEnemyAttack: val }),
  setAnimateAllySwitchReturn: (val) => set({ animateAllySwitchReturn: val }),
  setAnimateAllySwitchEnter: (val) => set({ animateAllySwitchEnter: val }),
  setAnimateAllyPanelSwitch: (val) => set({ animateAllyPanelSwitch: val }),
  setAnimateEnemyDeath: (val) => set({ animateEnemyDeath: val }),
  setAnimateAllyDeath: (val) => set({ animateAllyDeath: val }),
  setIsFightMenu: (val) => set({ isFightMenu: val }),
  setWinner: (val) => set({ winner: val }),
  setIsFightOver: (val) => set({ isFightOver: val }),
  setPersonalizedName: (val) => set({ personalizedName: val }),

  // Methods using utility functions
  animateHp: (hpChange, type) => battleUtils.animateHp(hpChange, type, get, set),
  resetBattle: () => battleUtils.resetBattle(set, get),
  handleActionText: (val) => battleUtils.handleActionText(val, set),
}));
