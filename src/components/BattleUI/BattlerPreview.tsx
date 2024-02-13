import { ExperienceInfo } from "@/data/experience";
import { ProjectInfo } from "@/data/projects";
import { Text } from "@chakra-ui/react";
import React from "react";

const BattlerPreview = ({ item }: { item: ProjectInfo | ExperienceInfo }) => {
  return (
    <div className="w-full h-full">
      {item.enabled ? (
        // TODO: If Projects, green. If Experience, Yellow...?
        <div className="bg-green-600 w-full h-full px-4 py-3 border-4 border-gray-800 hover:border-4 hover:border-red-500 rounded-ss-3xl rounded-ee-3xl cursor-pointer">
          <Text
            noOfLines={1}
            className="text-white text-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]"
          >
            {item.name}
          </Text>
        </div>
      ) : (
        <div className="bg-red-400 w-full h-full">DISABLED</div>
      )}
    </div>
  );
};

export default BattlerPreview;
