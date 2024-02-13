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
    name: "Realtor Website",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS", "PostgreSQL"],
  },
  {
    enabled: true,
    name: "Eddie van der Meer Website",
    description: "idk",
    stack: ["TypeScript", "React", "NextJS"],
  },
  {
    enabled: false,
    name: "FRET Bot",
    description: "idk",
    stack: ["JavaScript", "DiscordJS", "MongoDB"],
  },
  {
    enabled: true,
    name: "Canputer",
    description: "idk",
    stack: ["JavaScript", "DiscordJS", "MongoDB"],
  },
];

export default projects;
