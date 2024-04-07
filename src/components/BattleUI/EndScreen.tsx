import { useActionContext } from "@/context/ActionContext";
import { VStack } from "@chakra-ui/react";
import React from "react";

const EndScreen = () => {
  const { winner } = useActionContext();
  return (
    <div className="bg-white h-full w-full flex justify-center items-center">
      <VStack spacing={0}>
        {winner === "ally" && <p className="text-[2.5rem]">You won!</p>}
        {winner === "enemy" && <p className="text-[2.5rem]">You lost!</p>}
        <p className="text-[2.5rem]">Thank you for checking out my portfolio!</p>
        <p className="text-[2.5rem]">You can click &quot;Reset&quot; to play the battle again</p>
      </VStack>
    </div>
  );
};

export default EndScreen;
