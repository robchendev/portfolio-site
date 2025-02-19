"use client";

import React, { useState, useEffect, useRef } from "react";
import BattleUI from "./BattleUI";
import { Spinner } from "@chakra-ui/react";

export const DesktopScalingWrapper = () => {
  const refOuter = useRef<HTMLDivElement>(null);
  const refInner = useRef<HTMLDivElement>(null);
  const aspectRatioW = 900;
  const aspectRatioH = 600;
  const [contentWidthValue, setContentWidthValue] = useState(aspectRatioW);
  const [contentHeightValue, setContentHeightValue] = useState(aspectRatioH);
  const [scaleFactor, setScaleFactor] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const Loader = () => (
    <div className="flex items-center justify-center w-screen h-screen text-white bg-black text-4xl">
      <Spinner thickness="5px" speed="1s" emptyColor="gray.400" color="black" size="xl" />
    </div>
  );

  return (
    <div
      ref={refOuter}
      className="flex items-center justify-center h-screen bg-black text-black overflow-hidden"
    >
      {isLoading ? (
        <Loader />
      ) : (
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
              backgroundColor: "black",
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
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
