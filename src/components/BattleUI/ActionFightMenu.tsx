import { Text } from "@chakra-ui/react";
import React from "react";

const ActionFightMenu = ({ text }: { text: string }) => {
  return (
    <div className="flex-grow h-full rounded-[20px] font-semibold text-[3rem] text-gray-600 bg-black w-full p-1.5">
      <div className="h-full rounded-[14px] bg-yellow-300 p-[3px]">
        <div className="h-full rounded-[12px] bg-gray-500 py-1 px-2">
          <div className="h-full rounded-[8px] bg-white">
            <Text
              noOfLines={2}
              className="leading-[2.75rem] h-full w-full rounded-[9px] py-2.5 px-4 drop-shadow-[3px_2px_0px_rgba(0,0,0,.2)]"
            >
              {text}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionFightMenu;
