import { useActionStore } from "@/store/useActionStore";
import React from "react";

type ButtonColor = "pink" | "orange" | "green" | "blue";

const buttonStyles: {
  [K in ButtonColor]?: {
    borders: string;
    gradientFrom: string;
    gradientTo: string;
    hoverBg: string;
    margin: string;
  };
} = {
  pink: {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#b91c1c] bg-red-500",
    gradientFrom: "from-red-500",
    gradientTo: "to-red-700",
    hoverBg: "hover:bg-red-500",
    margin: "-mr-[0.35rem] -mb-[6px]",
  },
  orange: {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#d97706] bg-amber-500",
    gradientFrom: "from-amber-500",
    gradientTo: "to-amber-600",
    hoverBg: "hover:bg-amber-500",
    margin: "-ml-[0.35rem] -mb-[6px]",
  },
  green: {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#4d7c0f] bg-green-500",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-700",
    hoverBg: "hover:bg-green-500",
    margin: "-mr-[0.35rem] -mt-[6px]",
  },
  blue: {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#0369a1] bg-sky-500",
    gradientFrom: "from-sky-500",
    gradientTo: "to-sky-700",
    hoverBg: "hover:bg-sky-500",
    margin: "-ml-[0.35rem] -mt-[6px]",
  },
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
  const { showActionMenu } = useActionStore();
  const defaultStyles = {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#d97706] bg-amber-500",
    gradientFrom: "from-amber-500",
    gradientTo: "to-amber-600",
    hoverBg: "hover:bg-amber-500",
    margin: "-ml-[0.35rem] -mb-[0.2rem]",
  };
  const { borders, gradientFrom, gradientTo, hoverBg, margin } =
    buttonStyles[color] || defaultStyles;
  return (
    // 0.0875
    <span
      className={`w-1/2 h-[calc(50%+3px)] inline-flex justify-center ${
        showActionMenu ? "" : "pointer-events-none"
      }`}
    >
      <button
        className={`${borders} rounded-[25px] p-[12px] font-medium text-4xl text-white h-full w-full ${margin}`}
        onClick={onClick}
      >
        <div
          className={`rounded-[14px] w-full h-full leading-3 bg-gradient-to-b ${gradientFrom} from-40% ${gradientTo} to-80%`}
        >
          <div
            className={`flex items-center h-full pt-px justify-center rounded-[14px] bg-transparent ${hoverBg} transition ease-out duration-300`}
          >
            <h2 className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</h2>
          </div>
        </div>
      </button>
    </span>
  );
};

export default ActionButton;
