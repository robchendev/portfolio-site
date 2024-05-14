import { BattleMove } from "./projects";

// export type EnemyBattleMove = BattleMove & {
//   likelihood: number;
// };

export type EnemyData = {
  name: string;
  level: number; // For display only, not used in calculations
  health: number;
  maxHealth: number;
  images: string[]; // 1 image per 25% hp
  battleMoves: BattleMove[];
};

export const enemyData: EnemyData = {
  name: "Robert's Unemployment",
  level: 25,
  health: 2000,
  maxHealth: 2000,
  images: [
    "/img/enemy/frown.svg",
    "/img/enemy/deadpan.svg",
    "/img/enemy/slight-smile.svg",
    "/img/enemy/smile.svg",
    "/img/enemy/big-smile.svg",
    "/img/enemy/briefcase.svg",
  ],
  battleMoves: [
    {
      name: "Not good enough",
      power: 27,
    },
    {
      name: "10+ years of experience required",
      power: 38,
    },
    {
      name: "Hiring Freeze",
      power: 49,
    },
    {
      name: "Tech Market Crash",
      power: 60,
    },
  ],
};
