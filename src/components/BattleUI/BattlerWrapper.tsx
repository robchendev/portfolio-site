import React from "react";

export const BattlerWrapperEnemy = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[20%] w-[45%] overflow-hidden relative">
      <div className="h-full w-full bg-white p-[0.15rem] skew-x-12 z-0 -ml-4">
        <div className="h-full w-full bg-gray-700 py-1.5 pr-1">
          <div className="h-full w-full bg-gray-500 py-1">
            <div className="h-full w-full bg-gradient-to-t from-gray-400 from-0% to-gray-100 to-50% pl-6 pr-3 py-0.5">
              <div className="-skew-x-12">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BattlerWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ml-[55%] h-[25%] w-[45%] overflow-hidden relative">
      <div className="h-full w-full bg-white p-[0.15rem] -skew-x-12 z-0 ml-4">
        <div className="h-full w-full bg-gray-700 py-1.5 pl-1">
          <div className="h-full w-full bg-gray-500 py-1">
            <div className="h-full w-full bg-gradient-to-t from-gray-400 from-0% to-gray-100 to-50% pl-3 pr-6 py-0.5">
              <div className="skew-x-12">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
