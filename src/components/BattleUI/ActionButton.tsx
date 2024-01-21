import { GridItem } from "@chakra-ui/react";
import React from "react";
import "./style.css";

type ButtonColor = "pink" | "orange" | "green" | "blue";

const IntermediateButton = ({ text, color }: { text: string; color: ButtonColor }) => {
  // Have to do this terribleness because Tailwind doesn't allow template literals
  switch (color) {
    case "pink":
      return (
        <div className="rounded-[25px] font-medium text-3xl text-white text-outline bg-black w-full p-1.5 -mr-[0.35rem] -mb-[0.175rem]">
          <div className="h-full rounded-[20px] bg-white p-[3px]">
            <button className="tracking-tight w-full h-full rounded-[17px] bg-red-700 p-[3px]">
              <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-red-500 from-40% to-red-700 to-80%">
                <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-red-500 transition ease-out duration-300">
                  <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      );
    case "orange":
      return (
        <div className="rounded-[25px] font-medium text-3xl text-white text-outline bg-black w-full p-1.5 -ml-[0.35rem] -mb-[0.175rem]">
          <div className="h-full rounded-[20px] bg-white p-[3px]">
            <button className="tracking-tight w-full h-full rounded-[17px] bg-amber-600 p-[3px]">
              <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-amber-500 from-40% to-amber-600 to-80%">
                <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-amber-500 transition ease-out duration-300">
                  <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      );
    case "green":
      return (
        <div className="rounded-[25px] font-medium text-3xl text-white text-outline bg-black w-full p-1.5 -mr-[0.35rem] -mt-[0.175rem]">
          <div className="h-full rounded-[20px] bg-white p-[3px]">
            <button className="tracking-tight w-full h-full rounded-[17px] bg-green-700 p-[3px]">
              <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-green-500 from-40% to-green-700 to-80%">
                <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-green-500 transition ease-out duration-300">
                  <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      );
    case "blue":
      return (
        <div className="rounded-[25px] font-medium text-3xl text-white text-outline bg-black w-full p-1.5 -ml-[0.35rem] -mt-[0.175rem]">
          <div className="h-full rounded-[20px] bg-white p-[3px]">
            <button className="tracking-tight w-full h-full rounded-[17px] bg-sky-700 p-[3px]">
              <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-sky-500 from-40% to-sky-700 to-80%">
                <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-sky-500 transition ease-out duration-300">
                  <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      );
  }
};

const ActionButton = ({ text, color }: { text: string; color: ButtonColor }) => {
  return (
    <div className="flex justify-center h-full">
      <IntermediateButton text={text} color={color} />
    </div>
  );
};

export default ActionButton;
