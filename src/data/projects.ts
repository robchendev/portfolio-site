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
  | "vite"
  | "reactquery";

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
    imageUrls: [
      // "/img/guitardex/about-page.jpg",
      "/img/guitardex/techniques-search.jpg",
      // "/img/guitardex/audio-production.jpg",
      "/img/guitardex/glossary-open.jpg",
      "/img/guitardex/continue-learning.jpg",
      "/img/guitardex/required-overview.jpg",
      "/img/guitardex/fx-on.jpg",
      "/img/guitardex/fx-off.jpg",
      "/img/guitardex/gdex-example.jpg",
      // "/img/guitardex/gdex-example-dark.jpg",
      "/img/guitardex/tab-light.jpg",
      "/img/guitardex/tab-dark.jpg",
      // "/img/guitardex/glossary-closed-dark.jpg",
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
    health: 100,
    maxHealth: 100,
    level: 30,
  },
  {
    enabled: true,
    name: "Vikelabs Dashboard",
    shortName: "Vikes Dashboard",
    description:
      "Software club administrative web app that gives tiered access to team lead and admin dashboards. Team leads can edit their project's detail including title, description, tech stack, images and members, and submit it for admin approval.",
    stack: ["typescript", "react", "nextjs", "postgresql", "reactquery"],
    battleImage: "",
    imageUrls: [
      // "/img/vikes-dash/editor-editing.jpg",
      "/img/vikes-dash/project-editor.jpg",
      "/img/vikes-dash/editor-preview-s.jpg",
      "/img/vikes-dash/livedraft-preview.jpg",
      // "/img/vikes-dash/lead-project-members.jpg",
      // "/img/vikes-dash/image-customizer-preview.jpg",
      "/img/vikes-dash/image-customizer.jpg",
      // "/img/vikes-dash/link-customizer-preview.jpg",
      // "/img/vikes-dash/link-customizer-search.jpg",
      "/img/vikes-dash/stack-search.jpg",
      "/img/vikes-dash/stack-customizer.jpg",
      // "/img/vikes-dash/member-customizer.jpg",
      "/img/vikes-dash/lead-project-members-adding.jpg",
      // "/img/vikes-dash/lead-project-update-members.jpg",
      "/img/vikes-dash/lead-project-members-post-update.jpg",
      // "/img/vikes-dash/admin-project-approval.jpg",
      "/img/vikes-dash/admin-project-panel.jpg",
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
    imageUrls: [
      // "/img/fret/weekly-profile-no-trophy.jpg",
      "/img/fret/weekly-profile.jpg",
      "/img/fret/weekly-finalization.jpg",
      "/img/fret/leaderboard.jpg",
      "/img/fret/thread-maker-help.jpg",
      "/img/fret/thank.jpg",
      "/img/fret/rankup.jpg",
      "/img/fret/thread-maker.jpg",
      // "/img/fret/contribute.jpg",
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
    health: 100,
    maxHealth: 100,
    level: 30,
  },
  {
    enabled: true,
    name: "Fribbels' Honkai Star Rail Optimizer",
    shortName: "HSR Optimizer",
    deploymentUrl: "https://fribbels.github.io/hsr-optimizer/",
    description:
      "This highlights a feature contribution I've made to an open source project by Fribbels. The feature allows users to customize the portrait shown on their character build showcase to screenshot and share on social media.",
    stack: ["typescript", "react", "vite", "zustand"],
    battleImage: "",
    imageUrls: [
      "/img/hsr-optimizer/uploadimage.jpg",
      "/img/hsr-optimizer/defaultimage.jpg",
      "/img/hsr-optimizer/url.jpg",
      "/img/hsr-optimizer/cropimage.jpg",
      // "/img/hsr-optimizer/finalresult.jpg",
      "/img/hsr-optimizer/screenshot.jpg",
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
    health: 100,
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
