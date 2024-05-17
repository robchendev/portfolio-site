import React from "react";

const SVGevdm = ({ size = 250, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 244 333"
      className={className}
    >
      <path fill="#000" d="M0 333V0h244v73H72v60h89l-33 35.5 33 37.5H72v54h172v73H0Z" />
      <path fill="#000" d="m244 206-42.5-37.5L244 127v79Z" />
    </svg>
  );
};

export default SVGevdm;
