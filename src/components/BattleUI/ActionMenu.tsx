import { Grid, HStack } from "@chakra-ui/react";
import React from "react";
import ActionButton from "./ActionButton";
import ActionDialog from "./ActionDialog";

const ActionMenu = () => {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-400 from-0% via-white via-50% to-gray-400 to-100% px-3 py-1.5">
        <HStack w="full" h="full">
          <ActionDialog text="What will you do?" />
          <div className="w-full h-full -mr-1">
            <span className="w-1/2 h-1/2 inline-block">
              <ActionButton text="Fight" color="pink" />
            </span>
            <span className="w-1/2 h-1/2 inline-block">
              <ActionButton text="Experience" color="orange" />
            </span>
            <span className="w-1/2 h-1/2 inline-block">
              <ActionButton text="Projects" color="green" />
            </span>
            <span className="w-1/2 h-1/2 inline-block">
              <ActionButton text="About Me" color="blue" />
            </span>
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default ActionMenu;
