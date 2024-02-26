import { StackItem } from "@/data/projects";
import React from "react";

const StackItemTag = ({ stackItem }: { stackItem: StackItem }) => {
  switch (stackItem) {
    case "html":
      return (
        <span className="inline-block rounded border-t border-orange-300 bg-orange-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            HTML
          </p>
        </span>
      );
    case "css":
      return (
        <span className="inline-block rounded border-t border-blue-300 bg-blue-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            CSS
          </p>
        </span>
      );
    case "discordapi":
      return (
        <span className="inline-block rounded border-t border-indigo-300 bg-indigo-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            Discord API
          </p>
        </span>
      );
    case "graphql":
      return (
        <span className="inline-block rounded border-t border-pink-300 bg-pink-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            GraphQL
          </p>
        </span>
      );
    case "webaudio":
      return (
        <span className="inline-block rounded border-t border-red-300 bg-red-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            Web Audio API
          </p>
        </span>
      );
    case "emotion":
      return (
        <span className="inline-block rounded border-t border-orange-300 bg-orange-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            Emotion
          </p>
        </span>
      );
    case "gatsby":
      return (
        <span className="inline-block rounded border-t border-purple-300 bg-purple-600 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            Gatsby
          </p>
        </span>
      );
    case "nextjs":
      return (
        <span className="inline-block rounded border-t border-gray-400 bg-gray-800 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            Next.js
          </p>
        </span>
      );
    case "electron":
      return (
        <span className="inline-block rounded border-t border-cyan-200 bg-cyan-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            Electron
          </p>
        </span>
      );
    case "mongodb":
      return (
        <span className="inline-block rounded border-t border-green-200 bg-green-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            MongoDB
          </p>
        </span>
      );
    case "react":
      return (
        <span className="inline-block rounded border-t border-teal-200 bg-teal-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            React
          </p>
        </span>
      );
    case "typescript":
      return (
        <span className="inline-block rounded border-t border-blue-200 bg-blue-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            TypeScript
          </p>
        </span>
      );
    case "javascript":
      return (
        <span className="inline-block rounded border-t border-yellow-200 bg-yellow-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            JavaScript
          </p>
        </span>
      );
    default:
      return (
        <span className="inline-block rounded border-t border-red-300 bg-red-500 py-1 px-1.5 pr-1 drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,.2)]">
          <p className="inline-block text-4xl tracking-wide font-semibold leading-6 text-white drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
            unknown
          </p>
        </span>
      );
  }
};

export default StackItemTag;
