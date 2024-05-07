import { useActionContext } from "@/context/ActionContext";
import React from "react";

type ButtonColor = "green" | "blue" | "purple";

const buttonStyles: {
  [K in ButtonColor]?: {
    base: string;
    from: string;
    to: string;
    border: string;
    hover: string;
  };
} = {
  green: {
    base: "bg-green-500",
    from: "from-green-500",
    to: "to-green-700",
    border: "border-green-700",
    hover: "hover:bg-green-500",
  },
  blue: {
    base: "bg-blue-500",
    from: "from-blue-500",
    to: "to-blue-700",
    border: "border-blue-700",
    hover: "hover:bg-blue-500",
  },
  purple: {
    base: "bg-purple-500",
    from: "from-purple-500",
    to: "to-purple-700",
    border: "border-purple-700",
    hover: "hover:bg-purple-500",
  },
};

const TabButton = ({
  children,
  color,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  color: ButtonColor;
  isActive: boolean;
  onClick: () => void;
}) => {
  const defaultStyles = {
    base: "bg-green-500",
    from: "from-green-700",
    to: "to-green-500",
    border: "border-green-700",
    hover: "hover:bg-green-500",
  };
  const { base, from, to, border, hover } = buttonStyles[color] || defaultStyles;

  return (
    <button
      className={`${base} text-white rounded-t-[24px] border-4 border-b-0 border-black mt-2 stroketest h-full text-[2.5rem] leading-[2.5rem] font-medium`}
      onClick={onClick}
    >
      <div className="border-[3px] border-b-0 h-full rounded-t-[20px] border-white">
        <div className={`border-[3px] border-b-0 h-full rounded-t-[17px] ${border}`}>
          <div
            className={`h-full rounded-t-[14px] ${
              !isActive && "bg-gradient-to-b"
            } ${from} from-40% ${to} to-80%`}
          >
            <div
              className={`h-full px-4 flex items-center pt-px justify-center rounded-t-[14px] bg-transparent ${hover} transition ease-out duration-300`}
            >
              <h2 className="drop-shadow-[2px_1.5px_1px_rgba(0,0,0,0.5)]">{children}</h2>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default TabButton;
