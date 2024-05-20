import { useActionStore } from "@/store/useActionStore";
import { Text } from "@chakra-ui/react";
import React from "react";
import TextWriter from "./TextWriter";

const ActionDialog = ({ text }: { text: string }) => {
  const { screen, showActionMenu } = useActionStore();
  const isDialogWidth = (screen === "fight" || screen === "end") && showActionMenu;
  return (
    <div
      className={`h-full p-[12px] rounded-[20px] text-[2.5rem] text-gray-600 font-medium shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_#fcd34d] bg-gray-500 py-[13px] px-[17px] ${
        isDialogWidth ? "w-1/2" : showActionMenu ? "w-3/4 flex-grow" : "w-3/4 flex-grow mr-2"
      } p-1.5 ml-2`}
    >
      <div className="h-full rounded-[8px] bg-white">
        <Text
          noOfLines={2}
          className="leading-[3rem] h-full w-full rounded-[9px] py-2.5 px-4 drop-shadow-[3px_2px_0px_rgba(0,0,0,.15)]"
        >
          {text && <TextWriter text={text} speed={10} />}
        </Text>
      </div>
    </div>
  );
};

export default ActionDialog;
