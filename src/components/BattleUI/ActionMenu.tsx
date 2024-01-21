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
          <div className="w-full h-full">
            <Grid
              h="full"
              w="full"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={0}
            >
              <ActionButton text="Fight" color="pink" />
              <ActionButton text="Experience" color="orange" />
              <ActionButton text="Projects" color="green" />
              <ActionButton text="About Me" color="blue" />
            </Grid>
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default ActionMenu;
