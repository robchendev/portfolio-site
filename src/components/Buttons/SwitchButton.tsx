import React from "react";

export const SwitchButtonDisabled = () => {
  return (
    <button className="ml-2 p-[12px] rounded-[25px] text-4xl h-full w-full text-white font-medium shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#374151] bg-gray-500">
      <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-gray-500 from-40% to-gray-700 to-80%">
        <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-gray-500 transition ease-out duration-300">
          <h2 className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">SWITCH</h2>
        </div>
      </div>
    </button>
  );
};

const SwitchButton = () => {
  return (
    <button className="ml-2 p-[12px] rounded-[25px] text-4xl h-full w-full text-white font-medium shadow-[inset_0px_0px_0px_6px_black,inset_0px_0px_0px_9px_white,inset_0_0_0_12px_#15803d] bg-green-500">
      <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-green-500 from-40% to-green-700 to-80%">
        <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-green-500 transition ease-out duration-300">
          <h2 className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">SWITCH</h2>
        </div>
      </div>
    </button>
  );
};

export default SwitchButton;
