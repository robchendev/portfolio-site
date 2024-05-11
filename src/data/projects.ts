export type StackItem =
  | "javascript"
  | "typescript"
  | "mongodb"
  | "react"
  | "postgresql"
  | "electron"
  | "nextjs"
  | "gatsby"
  | "emotion"
  | "webaudio"
  | "graphql"
  | "discordapi"
  | "html"
  | "css"
  | "framer"
  | "postgresql"
  | "zustand"
  | "vite";

export type BattleMove = {
  name: string;
  power: number;
};

export type ProjectInfo = {
  enabled: boolean;
  name: string;
  shortName?: string; // in case there's no room to display
  deploymentUrl?: string;
  description: string;
  stack: StackItem[];
  battleImage: string;
  imageUrls: string[];
  battleMoves: BattleMove[];
  health: number;
  maxHealth: number;
  level: number;
};

// Initial values for projects
const projects: ProjectInfo[] = [
  {
    enabled: true,
    name: "Portfolio Website",
    deploymentUrl: "https://robchen.dev",
    shortName: "Portfolio",
    description:
      "This portfolio website, showcasing my projects, commissions and work experience. Designed to closely replicate POKéMON battle UI, with a turn based game engine for gameplay replication.",
    stack: ["typescript", "react", "nextjs", "framer"],
    battleImage: "/img/sadpepe.png",
    imageUrls: [],
    battleMoves: [
      {
        name: "Impress",
        power: 20,
      },
      {
        name: "Disappoint",
        power: -20,
      },
      {
        name: "Move3",
        power: 40,
      },
    ],
    health: 100,
    maxHealth: 100,
    level: 30,
  },
  {
    enabled: true,
    name: "Guitardex",
    deploymentUrl: "https://guitardex.com",
    description:
      "Guitar tutorial website for the niche style of fingerstyle. Users can save a personalized list of techniques and share it around via an encoded link. Currently creating an audio production section that includes audio visualizers for analysis.",
    stack: ["typescript", "react", "nextjs", "webaudio"],
    battleImage: "",
    imageUrls: [],
    battleMoves: [
      {
        name: "Impress",
        power: 20,
      },
      {
        name: "Disappoint",
        power: -20,
      },
      {
        name: "Move3",
        power: 40,
      },
    ],
    health: 100,
    maxHealth: 100,
    level: 30,
  },
  {
    enabled: true,
    name: "Vikelabs Dashboard",
    shortName: "Vikes Dashboard",
    description: "",
    stack: ["typescript", "react", "nextjs", "postgresql"],
    battleImage: "",
    imageUrls: [],
    battleMoves: [
      {
        name: "Impress",
        power: 20,
      },
      {
        name: "Disappoint",
        power: -20,
      },
      {
        name: "Move3",
        power: 40,
      },
    ],
    health: 100,
    maxHealth: 100,
    level: 30,
  },
  {
    enabled: true,
    name: "FRET: Discord Bot",
    shortName: "FRET Bot",
    description:
      "A multipurpose Discord bot whose purpose is to encourage discussion in a discord server by facilitating an organized environment using threads, self-moderating channels and by managing databases to store and retrieve information.",
    stack: ["javascript", "mongodb", "discordapi"],
    battleImage: "",
    imageUrls: [],
    battleMoves: [
      {
        name: "Impress",
        power: 20,
      },
      {
        name: "Disappoint",
        power: -20,
      },
      {
        name: "Move3",
        power: 40,
      },
    ],
    health: 100,
    maxHealth: 100,
    level: 30,
  },
  {
    enabled: true,
    name: "Fribbels' Honkai Star Rail Optimizer",
    shortName: "HSR Optimizer",
    deploymentUrl: "https://fribbels.github.io/hsr-optimizer/",
    description: "I've made a large-sized feature update to this and fixed ...",
    stack: ["typescript", "react", "vite", "zustand"],
    battleImage: "",
    imageUrls: [],
    battleMoves: [
      {
        name: "Impress",
        power: 20,
      },
      {
        name: "Disappoint",
        power: -20,
      },
      {
        name: "Move3",
        power: 40,
      },
    ],
    health: 32,
    maxHealth: 100,
    level: 30,
  },
  // {
  //   enabled: false,
  //   name: "Leaderboard Generator",
  //   description: "idk",
  //   stack: ["javascript"],
  //   battleImage: "/img/jhin.png",
  //   imageUrls: ["/img/visual2.png", "/img/visual2.png", "/img/visual2.png"],
  //   battleMoves: [
  //     {
  //       name: "Impress",
  //       power: 20,
  //     },
  //     {
  //       name: "Disappoint",
  //       power: -20,
  //     },
  //     {
  //       name: "Move3",
  //       power: 40,
  //     },
  //   ],
  //   health: 100,
  //   maxHealth: 100,
  //   level: 30,
  // },
  // {
  //   enabled: false,
  //   name: "Realtor Website",
  //   description: "idk",
  //   stack: ["javascript"],
  //   battleImage: "/img/jhin.png",
  //   imageUrls: ["/img/visual2.png", "/img/visual2.png", "/img/visual2.png"],
  //   battleMoves: [
  //     {
  //       name: "Impress",
  //       power: 20,
  //     },
  //     {
  //       name: "Disappoint",
  //       power: -20,
  //     },
  //     {
  //       name: "Move3",
  //       power: 40,
  //     },
  //   ],
  //   health: 10,
  //   maxHealth: 100,
  //   level: 30,
  // },
];

export default projects;
