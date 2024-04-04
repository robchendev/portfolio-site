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
  | "css";

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
    shortName: "Portfolio",
    description:
      "This portfolio website, showcasing my projects and work experience. Designed to closely replicate POKéMON battle UI.",
    stack: ["typescript", "react", "nextjs"],
    battleImage: "/img/sadpepe.png",
    imageUrls: [
      "/img/visual2.png",
      "/img/visual.jpg",
      "/img/partmarks.png",
      "/img/jhin.png",
      "/img/chinese.jpg",
    ],
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
    health: 50,
    maxHealth: 100,
    level: 30,
  },
  {
    enabled: true,
    name: "Guitardex v2",
    deploymentUrl: "https://guitardex.com",
    description:
      "Second iteration of Guitardex, with audio visualization features for user analysis and comparison. Utilizes server-side rendering to efficiently serve dynamic paths and glossary information.",
    stack: ["typescript", "react", "nextjs", "webaudio"],
    battleImage: "/img/jhin.png",
    imageUrls: ["/img/visual2.png", "/img/visual2.png", "/img/visual2.png"],
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
    name: "Guitardex v1",
    description:
      "Guitar tutorial website to provide resources for guitarists wishing to learn more about the niche style of fingerstyle. Users can save their own personal list of techniques and share it around via an encoded link.",
    stack: ["javascript", "react", "gatsby", "emotion", "graphql"],
    battleImage: "/img/jhin.png",
    imageUrls: ["/img/visual2.png", "/img/visual2.png", "/img/visual2.png"],
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
    health: 0,
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
    battleImage: "/img/jhin.png",
    imageUrls: ["/img/visual2.png", "/img/visual2.png", "/img/visual2.png"],
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
    name: "Shopify HTML Generator",
    shortName: "DescGenerator",
    description:
      "Made for a Avian Guitar's Shopify store. The description of the product page is written in HTML. This GUI is made to make it easier for the user to write the HTML description with zero knowledge on HTML.",
    stack: ["javascript", "electron", "html", "css"],
    battleImage: "/img/jhin.png",
    imageUrls: ["/img/visual2.png", "/img/visual2.png", "/img/visual2.png"],
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
    enabled: false,
    name: "Leaderboard Generator",
    description: "idk",
    stack: ["javascript"],
    battleImage: "/img/jhin.png",
    imageUrls: ["/img/visual2.png", "/img/visual2.png", "/img/visual2.png"],
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
    enabled: false,
    name: "Realtor Website",
    description: "idk",
    stack: ["javascript"],
    battleImage: "/img/jhin.png",
    imageUrls: ["/img/visual2.png", "/img/visual2.png", "/img/visual2.png"],
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
    health: 10,
    maxHealth: 100,
    level: 30,
  },
];

export default projects;
