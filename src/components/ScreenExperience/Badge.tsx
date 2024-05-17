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
      className={`transition ease-in-out duration-300 px-2 cursor-pointer m-auto w-[90px] h-full flex justify-center items-center ${
        isActive
          ? "scale-110 drop-shadow-[2px_2px_0px_white] brightness-[105%]"
          : "brightness-[90%]"
      }`}
    >
      {children}
    </div>
  );
};

export default Badge;
