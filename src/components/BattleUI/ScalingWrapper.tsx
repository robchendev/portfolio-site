import React, { useState, useEffect, useRef } from "react";

export const DesktopScalingWrapper = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [scaleFactor, setScaleFactor] = useState(1);
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width } = entry.contentRect;
        setScaleFactor(width / 1000);
      }
    });
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div
        ref={ref}
        className="w-full max-h-screen h-[66.67vw] max-w-[150vh] bg-white box-border flex justify-center items-center"
      >
        <div
          style={{
            transform: `scale(${scaleFactor})`,
          }}
        >
          <h1>Header</h1>
          <p>some text</p>
        </div>
      </div>
    </div>
  );
};
