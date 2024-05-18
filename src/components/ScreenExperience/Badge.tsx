import { GridItem } from "@chakra-ui/react";
import React from "react";
import MoveSelector from "../Elements/MoveSelectArrow";

const Badge = ({
  children,
  onClick,
  isActive,
}: {
  children?: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`transition relative ease-in-out duration-300 px-2 cursor-pointer m-auto w-[90px] h-full flex justify-center items-center`}
    >
      <div
        className={`w-8 pointer-events-none absolute h-full top-0 -left-2 flex transition ease-in-out duration-200 items-center ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <MoveSelector size={80} fill="#black" className="drop-shadow-[2px_0px_.5px_white]" />
      </div>
      {children}
    </div>
  );
};

export default Badge;
