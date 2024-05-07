import React from "react";

const CancelButton = () => {
  return (
    <div className="rounded-[25px] font-medium text-4xl text-white text-outline bg-black w-full p-1.5 ml-2">
      <div className="h-full rounded-[20px] bg-white p-[3px]">
        <button className="w-full h-full rounded-[17px] bg-red-700 p-[3px]">
          <div className="h-full rounded-[14px] leading-3 bg-gradient-to-b from-red-500 from-40% to-red-700 to-80%">
            <div className="h-full w-full flex items-center pt-px justify-center rounded-[14px] bg-transparent hover:bg-red-500 transition ease-out duration-300">
              <div className="drop-shadow-[0_2px_2px_rgba(0,0,0,.35)]">CANCEL</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CancelButton;
