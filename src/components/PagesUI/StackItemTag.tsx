import { StackItem } from "@/data/projects";
import React from "react";

const stackItemStyles: {
  [K in StackItem]?: { borderColor: string; bgColor: string; text: string };
} = {
  html: { borderColor: "border-orange-300", bgColor: "bg-orange-500", text: "HTML" },
  css: { borderColor: "border-blue-300", bgColor: "bg-blue-500", text: "CSS" },
  discordapi: { borderColor: "border-indigo-300", bgColor: "bg-indigo-500", text: "Discord API" },
  graphql: { borderColor: "border-pink-300", bgColor: "bg-pink-500", text: "GraphQL" },
  webaudio: { borderColor: "border-red-200", bgColor: "bg-red-500", text: "Web Audio API" },
  emotion: { borderColor: "border-orange-300", bgColor: "bg-orange-500", text: "Emotion" },
  gatsby: { borderColor: "border-purple-300", bgColor: "bg-purple-600", text: "Gatsby" },
  nextjs: { borderColor: "border-gray-300", bgColor: "bg-gray-800", text: "Next.js" },
  electron: { borderColor: "border-cyan-200", bgColor: "bg-cyan-500", text: "Electron" },
  mongodb: { borderColor: "border-green-200", bgColor: "bg-green-500", text: "MongoDB" },
  react: { borderColor: "border-teal-200", bgColor: "bg-teal-500", text: "React" },
  typescript: { borderColor: "border-blue-200", bgColor: "bg-blue-500", text: "TypeScript" },
  javascript: { borderColor: "border-yellow-200", bgColor: "bg-yellow-500", text: "JavaScript" },
};

const StackItemTag = ({ stackItem }: { stackItem: StackItem }) => {
  const defaultStyles = { borderColor: "border-red-300", bgColor: "bg-red-500", text: "unknown" };
  const { borderColor, bgColor, text } = stackItemStyles[stackItem] || defaultStyles;

  return (
    <span
      className={`rounded border-t ${borderColor} ${bgColor} px-1.5 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]`}
    >
      <p className="inline-block text-[2rem] tracking-wide font-semibold leading-[2.25rem] text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
        {text}
      </p>
    </span>
  );
};

export default StackItemTag;
