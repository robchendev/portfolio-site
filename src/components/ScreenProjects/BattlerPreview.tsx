import React from "react";
import BattlerPreviewAlive from "./BattlerPreviewAlive";
import BattlerPreviewDead from "./BattlerPreviewDead";
import BattlerPreviewDisabled from "./BattlerPreviewDisabled";
import { useActionContext } from "@/context/ActionContext";
import { ProjectInfo } from "@/components/config/projects";

const BattlerPreview = ({ item, onClick }: { item?: ProjectInfo; onClick: () => void }) => {
  const { battler } = useActionContext();
  if (item && item.enabled && item.health > 0) {
    return (
      <BattlerPreviewAlive item={item} isBattling={battler.name === item.name} onClick={onClick} />
    );
  } else if (item && item.enabled && item.health === 0) {
    return <BattlerPreviewDead item={item} onClick={onClick} />;
  } else {
    return <BattlerPreviewDisabled />;
  }
};

export default BattlerPreview;
