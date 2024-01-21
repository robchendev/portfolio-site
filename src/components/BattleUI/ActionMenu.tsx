import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ActionButton from "./ActionButton";

const ActionMenu = () => {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-400 from-0% via-white via-50% to-gray-400 to-100% px-3 py-1.5">
        <HStack w="full" h="full">
          <div className="h-full rounded-[20px] font-semibold text-4xl text-gray-500 bg-black w-full p-1.5">
            <div className="h-full rounded-[14px] bg-yellow-300 p-[3px]">
              <div className="h-full rounded-[12px] bg-gray-500 py-1 px-2">
                <div className="h-full rounded-[8px] bg-white">
                  <Text noOfLines={2} className="h-full w-full rounded-[9px] py-2 px-4">
                    What will you do?
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <Grid
              h="full"
              w="full"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={0}
            >
              <ActionButton text="FIGHT" color="pink" />
              <ActionButton text="BAG" color="orange" />
              <ActionButton text="POKeMON" color="green" />
              <ActionButton text="RUN" color="blue" />
            </Grid>
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default ActionMenu;
