import { BattleMove } from "../../components/config/projects";

// export type EnemyBattleMove = BattleMove & {
//   likelihood: number;
// };

export type EnemyData = {
  name: string;
  level: number; // For display only, not used in calculations
  health: number;
  maxHealth: number;
  battleMoves: BattleMove[];
};

export const enemyData: EnemyData = {
  name: "Robert's Unemployment",
  level: 25,
  health: 1600,
  maxHealth: 1600,
  battleMoves: [
    {
      name: "Not Good Enough",
      power: 27,
    },
    {
      name: "Budget Cuts",
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
