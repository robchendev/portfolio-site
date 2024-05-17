import { GridItem } from "@chakra-ui/react";
import React from "react";

const Badge = ({ children, onClick }: { children?: React.ReactNode; onClick: () => void }) => {
  return (
    <GridItem className="drop-shadow-[1px_1px_0px_rgba(0,0,0,0.3)]" onClick={onClick}>
      <div className="m-auto w-[90px] h-[90px] flex justify-center items-center">{children}</div>
    </GridItem>
  );
};

export default Badge;
