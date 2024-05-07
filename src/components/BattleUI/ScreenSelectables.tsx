import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import BattlerPreview, { BattlerDisabled, BattlerPreviewDead } from "./BattlerPreview";
import { ProjectInfo } from "@/data/projects";
import { useActionContext } from "@/context/ActionContext";

const BattlerPreviewSafe = ({ item, onClick }: { item?: ProjectInfo; onClick: () => void }) => {
  const { battler } = useActionContext();
  if (item && item.enabled && item.health > 0) {
    return <BattlerPreview item={item} isBattling={battler.name === item.name} onClick={onClick} />;
  } else if (item && item.enabled && item.health === 0) {
    return <BattlerPreviewDead item={item} onClick={onClick} />;
  } else {
    return <BattlerDisabled />;
  }
};

const ScreenSelectables = () => {
  const { setActionDialogText, setProjectIndex, projects, isFightOver } = useActionContext();

  const onProjectSelect = (i: number) => {
    setProjectIndex(i);
    setTimeout(() => {
      if (isFightOver) {
        setActionDialogText("View Project details, images, or battle data.");
      } else {
        setActionDialogText("View Project information, SWITCH Project into battle, or CANCEL.");
      }
    }, 10);
  };

  return (
    <div className="bg-slate-100 h-full">
      <div className="h-full w-full absolute border-cyan-400 border-l-[60px] border-r-[60px]">
        <div className="h-full w-full border-cyan-500 border-l-[30px] border-r-[30px]">
          <div className="h-full w-full bg-cyan-200 border-cyan-100 border-l-[15px] border-r-[15px]"></div>
        </div>
      </div>

      <div className="h-full w-full absolute">
        <HStack justifyContent="space-between" px={8} pt={2} pb={4} h="full">
          <div className="h-full w-full">
            <VStack justifyContent="space-between" className="h-[90%] w-full">
              <BattlerPreviewSafe item={projects[0]} onClick={() => onProjectSelect(0)} />
              <BattlerPreviewSafe item={projects[2]} onClick={() => onProjectSelect(2)} />
              <BattlerPreviewSafe item={projects[4]} onClick={() => onProjectSelect(4)} />
            </VStack>
          </div>
          <div className="h-full w-full">
            <VStack justifyContent="space-between" className="mt-[10%] h-[90%] w-full">
              <BattlerPreviewSafe item={projects[1]} onClick={() => onProjectSelect(1)} />
              <BattlerPreviewSafe item={projects[3]} onClick={() => onProjectSelect(3)} />
              <BattlerPreviewSafe item={projects[5]} onClick={() => onProjectSelect(5)} />
            </VStack>
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default ScreenSelectables;
