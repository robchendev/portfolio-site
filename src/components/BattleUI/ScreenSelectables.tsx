import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import BattlerPreview, { BattlerDisabled } from "./BattlerPreview";
import { ProjectInfo } from "@/data/projects";
import { ExperienceInfo } from "@/data/experience";
import { useActionContext } from "@/context/ActionContext";
import { useBattleContext } from "@/context/BattleContext";

const BattlerPreviewSafe = ({
  currentBattler,
  item,
  onClick,
}: {
  currentBattler: ProjectInfo;
  item?: ProjectInfo | ExperienceInfo;
  onClick: () => void;
}) => {
  if (item && item.enabled) {
    return (
      <BattlerPreview
        item={item}
        isBattling={currentBattler.name === item.name}
        onClick={onClick}
      />
    );
  } else {
    return <BattlerDisabled />;
  }
};

const ScreenSelectables = ({
  items,
  currentBattler,
}: {
  items: ProjectInfo[] | ExperienceInfo[];
  currentBattler: ProjectInfo;
}) => {
  const { setActionDialogText } = useActionContext();
  const onBattlerPreviewActionDialogText =
    "View Project information, switch Project into battle, or CLOSE.";
  const { setProjectIndex } = useBattleContext();

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
              <BattlerPreviewSafe
                item={items[0]}
                currentBattler={currentBattler}
                onClick={() => {
                  setProjectIndex(0);
                  setActionDialogText(onBattlerPreviewActionDialogText);
                }}
              />
              <BattlerPreviewSafe
                item={items[2]}
                currentBattler={currentBattler}
                onClick={() => {
                  setProjectIndex(2);
                  setActionDialogText(onBattlerPreviewActionDialogText);
                }}
              />
              <BattlerPreviewSafe
                item={items[4]}
                currentBattler={currentBattler}
                onClick={() => {
                  setProjectIndex(4);
                  setActionDialogText(onBattlerPreviewActionDialogText);
                }}
              />
            </VStack>
          </div>
          <div className="h-full w-full">
            <VStack justifyContent="space-between" className="mt-[10%] h-[90%] w-full">
              <BattlerPreviewSafe
                item={items[1]}
                currentBattler={currentBattler}
                onClick={() => {
                  setProjectIndex(1);
                  setActionDialogText(onBattlerPreviewActionDialogText);
                }}
              />
              <BattlerPreviewSafe
                item={items[3]}
                currentBattler={currentBattler}
                onClick={() => {
                  setProjectIndex(3);
                  setActionDialogText(onBattlerPreviewActionDialogText);
                }}
              />
              <BattlerPreviewSafe
                item={items[5]}
                currentBattler={currentBattler}
                onClick={() => {
                  setProjectIndex(5);
                  setActionDialogText(onBattlerPreviewActionDialogText);
                }}
              />
            </VStack>
          </div>
        </HStack>
      </div>
    </div>
  );
};
// top-[100%]

export default ScreenSelectables;
