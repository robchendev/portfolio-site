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
  health: 1600,
  maxHealth: 1600,
  images: [
    "/img/placeholder.png", // 75% < HP <= 100%
    "/img/placeholder.png", // 50% < HP <= 75%
    "/img/placeholder.png", // 25% < HP <= 50%
    "/img/placeholder.png", // 0% < HP <= 25%
  ],
  battleMoves: [
    {
      name: "Not good enough",
      power: 27,
    },
    {
      name: "5+ years of experience required",
      power: 35,
    },
    {
      name: "Hiring Freeze",
      power: 46,
    },
    {
      name: "Tech Market Crash",
      power: 59,
    },
  ],
};
