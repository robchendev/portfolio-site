import { ExperienceInfo } from "@/data/experience";
import { ProjectInfo } from "@/data/projects";
import React from "react";

const BattlerPreview = ({ item }: { item: ProjectInfo | ExperienceInfo }) => {
  return (
    <div className="w-full h-full">
      {item.enabled ? (
        <div className="bg-blue-400 w-full h-full">{item.name}</div>
      ) : (
        <div className="bg-red-400 w-full h-full">DISABLED</div>
      )}
    </div>
  );
};

export default BattlerPreview;
