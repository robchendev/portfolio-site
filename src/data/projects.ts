export type ProjectInfo = {
  enabled: boolean;
  name: string;
  shortName?: string; // in case there's no room to display
  description: string;
  stack: string[];
  imageUrls?: string[];
  health: number;
};

const projects: ProjectInfo[] = [
  {
    enabled: true,
    name: "Portfolio Website",
    shortName: "Portfolio",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS"],
    imageUrls: ["/img/visual2.png", "/img/visual2.png", "/img/visual2.png"],
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
    shortName: "FRET Bot",
    description: "idk",
    stack: ["JavaScript", "DiscordJS", "MongoDB"],
    health: 100,
  },
  {
    enabled: true,
    name: "Canputer: Tech Tutor",
    shortName: "Canputer",
    description: "idk",
    stack: ["JavaScript", "DiscordJS", "MongoDB"],
    health: 10,
  },
  {
    enabled: true,
    name: "Shopify Description Generator",
    shortName: "DescGenerator",
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
