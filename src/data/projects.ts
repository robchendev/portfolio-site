export type ProjectInfo = {
  enabled: boolean;
  name: string;
  description: string;
  stack: string[];
  health: number;
};

const projects: ProjectInfo[] = [
  {
    enabled: true,
    name: "Portfolio Website",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS"],
    health: 50,
  },
  {
    enabled: true,
    name: "Guitardex",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS"],
    health: 100,
  },
  {
    enabled: true,
    name: "FRET: Discord Bot",
    description: "idk",
    stack: ["JavaScript", "DiscordJS", "MongoDB"],
    health: 100,
  },
  {
    enabled: true,
    name: "Canputer: Tech Tutor",
    description: "idk",
    stack: ["JavaScript", "DiscordJS", "MongoDB"],
    health: 10,
  },
  {
    enabled: true,
    name: "DescGenerator",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS", "PostgreSQL"],
    health: 100,
  },
  {
    enabled: false,
    name: "Leaderboard Generator",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS", "PostgreSQL"],
    health: 100,
  },
  {
    enabled: false,
    name: "Realtor Website",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS", "PostgreSQL"],
    health: 10,
  },
];

export default projects;
