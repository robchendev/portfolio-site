import { GridItem } from "@chakra-ui/react";
import React from "react";

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
      className={`transition ease-in-out duration-300 px-2 cursor-pointer m-auto w-[90px] h-full flex justify-center items-center drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)] ${
        isActive ? "scale-110" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;
