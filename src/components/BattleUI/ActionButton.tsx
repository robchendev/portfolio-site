import { useActionContext } from "@/context/ActionContext";
import React from "react";

type ButtonColor = "pink" | "orange" | "green" | "blue";

const buttonStyles: {
  [K in ButtonColor]?: {
    outerBg: string;
    buttonBg: string;
    gradientFrom: string;
    gradientTo: string;
    hoverBg: string;
    margin: string;
  };
} = {
  pink: {
    outerBg: "bg-black",
    buttonBg: "bg-red-700",
    gradientFrom: "from-red-500",
    gradientTo: "to-red-700",
    hoverBg: "hover:bg-red-500",
    margin: "-mr-[0.35rem] -mb-[0.175rem]",
  },
  orange: {
    outerBg: "bg-black",
    buttonBg: "bg-amber-600",
    gradientFrom: "from-amber-500",
    gradientTo: "to-amber-600",
    hoverBg: "hover:bg-amber-500",
    margin: "-ml-[0.35rem] -mb-[0.175rem]",
  },
  green: {
    outerBg: "bg-black",
    buttonBg: "bg-green-700",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-700",
    hoverBg: "hover:bg-green-500",
    margin: "-mr-[0.35rem] -mt-[0.175rem]",
  },
  blue: {
    outerBg: "bg-black",
    buttonBg: "bg-sky-700",
    gradientFrom: "from-sky-500",
    gradientTo: "to-sky-700",
    hoverBg: "hover:bg-sky-500",
    margin: "-ml-[0.35rem] -mt-[0.175rem]",
  },
};

const IntermediateButton = ({ text, color }: { text: string; color: ButtonColor }) => {
  const defaultStyles = {
    outerBg: "bg-black",
    buttonBg: "bg-amber-600",
    gradientFrom: "from-amber-500",
    gradientTo: "to-amber-600",
    hoverBg: "hover:bg-amber-500",
    margin: "-ml-[0.35rem] -mb-[0.175rem]",
  };
  const { outerBg, buttonBg, gradientFrom, gradientTo, hoverBg, margin } =
    buttonStyles[color] || defaultStyles;

  return (
    <div
      className={`rounded-[25px] font-medium text-4xl text-white text-outline ${outerBg} w-full p-1.5 ${margin}`}
    >
      <div className="h-full rounded-[20px] bg-white p-[3px]">
        <button className={`w-full h-full rounded-[17px] ${buttonBg} p-[3px]`}>
          <div
            className={`h-full rounded-[14px] leading-3 bg-gradient-to-b ${gradientFrom} from-40% ${gradientTo} to-80%`}
          >
            <div
              className={`h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent ${hoverBg} transition ease-out duration-300`}
            >
              <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

const ActionButton = ({
  text,
  color,
  onClick,
}: {
  text: string;
  color: ButtonColor;
  onClick: () => void;
}) => {
  const { actionMenuDisabled } = useActionContext();
  return (
    <span
      className={`w-1/2 h-1/2 inline-block ${
        actionMenuDisabled ? "filter grayscale pointer-events-none" : ""
      }`}
    >
      <div className="flex justify-center h-full" onClick={onClick}>
        <IntermediateButton text={text} color={color} />
      </div>
    </span>
  );
};

export default ActionButton;
