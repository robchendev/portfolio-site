import { VStack } from "@chakra-ui/react";
import React from "react";
import { useActionStore } from "@/store/useActionStore";

const EndScreen = () => {
  const { winner } = useActionStore();
  return (
    <div className="bg-white h-full w-full flex justify-center items-center">
      <VStack spacing={0}>
        {winner === "ally" && <p className="text-[2.5rem]">You won!</p>}
        {winner === "enemy" && <p className="text-[2.5rem]">You lost!</p>}
        <p className="text-[2.5rem]">Thank you for checking out my portfolio!</p>
        <p className="text-[2.5rem]">You can click &quot;Reset&quot; to play the battle again</p>
        {/* <HStack align="center">
          <p className="text-[2.5rem]">Hint: View</p>
          <div className="mb-0.5">
            <TabButton color="purple" onClick={() => {}} isActive>
              <HStack className="block whitespace-nowrap">
                <RiSwordFill size="38" className="-ml-1.5" />
                <h2>Battle Moves</h2>
              </HStack>
            </TabButton>
          </div>
          <p className="text-[2.5rem]">in Project&apos;s page</p>
        </HStack> */}
      </VStack>
    </div>
  );
};

export default EndScreen;
