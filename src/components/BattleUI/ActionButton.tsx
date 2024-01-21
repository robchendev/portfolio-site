import { GridItem } from "@chakra-ui/react";
import React from "react";
import "./style.css";

type ButtonColor = "pink" | "orange" | "green" | "blue";

const IntermediateButton = ({ text, color }: { text: string; color: ButtonColor }) => {
  // Have to do this terribleness because Tailwind doesn't allow template literals
  switch (color) {
    case "pink":
      return (
        <button className="tracking-tight w-full h-full rounded-[12px] bg-red-700 p-[3px]">
          <div className="h-full rounded-[9px] leading-3 bg-gradient-to-b from-red-500 from-40% to-red-700 to-80%">
            <div className="h-full w-full flex items-center pt-px justify-center rounded-[9px] bg-transparent hover:bg-red-500 transition ease-out duration-300">
              <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</div>
            </div>
          </div>
        </button>
      );
    case "orange":
      return (
        <button className="tracking-tight w-full h-full rounded-[12px] bg-amber-600 p-[3px]">
          <div className="h-full rounded-[9px] leading-3 bg-gradient-to-b from-amber-500 from-40% to-amber-600 to-80%">
            <div className="h-full w-full flex items-center pt-px justify-center rounded-[9px] bg-transparent hover:bg-amber-500 transition ease-out duration-300">
              <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</div>
            </div>
          </div>
        </button>
      );
    case "green":
      return (
        <button className="tracking-tight w-full h-full rounded-[12px] bg-green-700 p-[3px]">
          <div className="h-full rounded-[9px] leading-3 bg-gradient-to-b from-green-500 from-40% to-green-700 to-80%">
            <div className="h-full w-full flex items-center pt-px justify-center rounded-[9px] bg-transparent hover:bg-green-500 transition ease-out duration-300">
              <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</div>
            </div>
          </div>
        </button>
      );
    case "blue":
      return (
        <button className="tracking-tight w-full h-full rounded-[12px] bg-sky-700 p-[3px]">
          <div className="h-full rounded-[9px] leading-3 bg-gradient-to-b from-sky-500 from-40% to-sky-700 to-80%">
            <div className="h-full w-full flex items-center pt-px justify-center rounded-[9px] bg-transparent hover:bg-sky-500 transition ease-out duration-300">
              <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</div>
            </div>
          </div>
        </button>
      );
  }
};

const ActionButton = ({ text, color }: { text: string; color: ButtonColor }) => {
  return (
    <GridItem colSpan={2} className="flex justify-center">
      <div className="rounded-[20px] font-medium text-3xl text-white text-outline bg-black w-full p-1.5">
        <div className="h-full rounded-[14px] bg-white p-[3px]">
          <IntermediateButton text={text} color={color} />
        </div>
      </div>
    </GridItem>
  );
};

export default ActionButton;