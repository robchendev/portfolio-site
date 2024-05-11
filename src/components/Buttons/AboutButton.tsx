import { useActionContext } from "@/context/ActionContext";
import React from "react";
import { IconType } from "react-icons";

type ButtonColor = "resume" | "github" | "linkedin" | "contact" | "sourceCode";

const buttonStyles: {
  [K in ButtonColor]?: {
    borders: string;
    gradientFrom: string;
    gradientTo: string;
    hoverBg: string;
  };
} = {
  resume: {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#15803d] bg-green-500",
    gradientFrom: "from-green-500",
    gradientTo: "to-green-700",
    hoverBg: "hover:bg-green-500",
  },
  linkedin: {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#1e40af] bg-blue-600",
    gradientFrom: "from-blue-600",
    gradientTo: "to-blue-800",
    hoverBg: "hover:bg-blue-600",
  },
  github: {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#6b21a8] bg-purple-600",
    gradientFrom: "from-purple-600",
    gradientTo: "to-purple-800",
    hoverBg: "hover:bg-purple-600",
  },
  contact: {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#ea580c] bg-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
    hoverBg: "hover:bg-orange-500",
  },
  sourceCode: {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#be123c] bg-rose-600",
    gradientFrom: "from-rose-600",
    gradientTo: "to-rose-700",
    hoverBg: "hover:bg-rose-600",
  },
};

const AboutButton = ({
  text,
  color,
  href,
  Icon,
  isLast = false,
}: {
  text: string;
  color: ButtonColor;
  href: string;
  Icon: React.ReactNode;
  isLast?: boolean;
}) => {
  const { showActionMenu } = useActionContext();
  const defaultStyles = {
    borders:
      "shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#d97706] bg-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-orange-600",
    hoverBg: "hover:bg-orange-500",
  };
  const { borders, gradientFrom, gradientTo, hoverBg } = buttonStyles[color] || defaultStyles;
  return (
    <a
      href={href}
      target="_blank"
      className={`w-full h-full ${showActionMenu ? "" : "pointer-events-none"} ${
        isLast ? "" : "-mb-[0.3rem]"
      }`}
    >
      <button
        //  ${margin}
        className={`${borders} rounded-[25px] p-[12px] font-medium text-[2.1rem] text-white h-full w-full`}
      >
        <div
          className={`rounded-[14px] w-full h-full leading-3 bg-gradient-to-b ${gradientFrom} from-40% ${gradientTo} to-80%`}
        >
          <div
            className={`flex items-center h-full pt-px pl-2.5 pr-0.5 justify-start rounded-[14px] bg-transparent ${hoverBg} transition ease-out duration-300`}
          >
            <p className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)] mr-2">{Icon}</p>
            <h2 className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">{text}</h2>
          </div>
        </div>
      </button>
    </a>
  );
};

export default AboutButton;
