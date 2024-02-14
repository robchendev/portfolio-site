export type ProjectInfo = {
  enabled: boolean;
  name: string;
  description: string;
  stack: string[];
};

const projects: ProjectInfo[] = [
  {
    enabled: true,
    name: "Portfolio Website",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS"],
  },
  {
    enabled: true,
    name: "Guitardex",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS"],
  },
  {
    enabled: true,
    name: "FRET Bot",
    description: "idk",
    stack: ["JavaScript", "DiscordJS", "MongoDB"],
  },
  {
    enabled: false,
    name: "Canputer",
    description: "idk",
    stack: ["JavaScript", "DiscordJS", "MongoDB"],
  },
  {
    enabled: false,
    name: "Realtor Website",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS", "PostgreSQL"],
  },
];

export default projects;
