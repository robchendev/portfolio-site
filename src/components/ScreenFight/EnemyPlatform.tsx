import React from "react";

const EnemyPlatform = () => {
  return (
    <div className="ml-[50%] h-[20%] w-[48%]">
      <div className="h-full w-full rounded-[100%] bg-green-600 p-[0.15rem] drop-shadow-[1px_3px_2px_rgba(0,0,0,0.2)]">
        <div className="h-full w-full rounded-[100%] bg-gradient-radial from-green-100 from-40% to-green-500 to-80% px-[30%] py-[6%]">
          <div className="h-full w-full rounded-[100%] bg-gradient-radial from-green-900 from-10% to-green-100 to-70% opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default EnemyPlatform;
