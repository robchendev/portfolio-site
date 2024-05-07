import React from "react";

const SwitchButton = ({ disabled }: { disabled: boolean }) => {
  // tOdo: w-full does nothing here
  return (
    <div className="rounded-[25px] font-medium text-4xl text-white text-outline bg-black w-full p-1.5 ml-2">
      <div className="h-full rounded-[20px] bg-white p-[3px]">
        {disabled ? (
          <button className="w-full h-full rounded-[17px] bg-gray-700 p-[3px]">
            <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-gray-500 from-40% to-gray-700 to-80%">
              <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-gray-500 transition ease-out duration-300">
                <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">SWITCH</div>
              </div>
            </div>
          </button>
        ) : (
          <button className="w-full h-full rounded-[17px] bg-green-700 p-[3px]">
            <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-green-500 from-40% to-green-700 to-80%">
              <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-green-500 transition ease-out duration-300">
                <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">SWITCH</div>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default SwitchButton;
