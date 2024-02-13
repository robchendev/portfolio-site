"use client";

import React, { useState, useEffect, useRef } from "react";
import BattleUI from "./BattleUI";

export const DesktopScalingWrapper = () => {
  const refOuter = useRef<HTMLDivElement>(null);
  const refInner = useRef<HTMLDivElement>(null);
  const aspectRatioW = 900;
  const aspectRatioH = 600;
  const [contentWidthValue, setContentWidthValue] = useState(aspectRatioW);
  const [contentHeightValue, setContentHeightValue] = useState(aspectRatioH);
  const [scaleFactor, setScaleFactor] = useState<number | null>(null);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === refOuter.current || entry.target === refInner.current) {
          const containerWidth = refOuter.current?.clientWidth || 1; // Use 1 as a fallback to avoid division by zero
          const containerHeight = refOuter.current?.clientHeight || 1;
          const widthScaleFactor = containerWidth / aspectRatioW;
          const heightScaleFactor = containerHeight / aspectRatioH;
          const aspectRatioMaxHeight = containerWidth / (3 / 2);
          const aspectRatioMaxWidth = containerHeight * (3 / 2);

          // If size is controlled by width (black bars on top/bottom):
          if (aspectRatioMaxHeight < containerHeight) {
            setContentWidthValue(Number(containerWidth.toFixed(4)));
            setContentHeightValue(Number(aspectRatioMaxHeight.toFixed(4)));
            setScaleFactor(Number(widthScaleFactor.toFixed(4)));
          }

          // If size is controlled by height (black bars on left/right):
          if (aspectRatioMaxWidth < containerWidth) {
            setContentWidthValue(Number(aspectRatioMaxWidth.toFixed(4)));
            setContentHeightValue(Number(containerHeight.toFixed(4)));
            setScaleFactor(Number(heightScaleFactor.toFixed(4)));
          }
        }
      }
    });
    if (refInner.current) {
      resizeObserver.observe(refInner.current);
    }
    if (refOuter.current) {
      resizeObserver.observe(refOuter.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={refOuter}
      className="flex items-center justify-center h-screen bg-black overflow-hidden"
    >
      <div
        ref={refInner}
        className="bg-white"
        style={{
          width: `${contentWidthValue}px`,
          height: `${contentHeightValue}px`,
        }}
      >
        <div
          className="block"
          style={{
            width: `${aspectRatioW}px`,
            height: `${aspectRatioH}px`,
          }}
        >
          {scaleFactor && (
            <div
              style={{
                transformOrigin: "0 0",
                transform: `scale(${scaleFactor})`,
              }}
              className="w-full h-full"
            >
              <BattleUI />
              {scaleFactor}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
