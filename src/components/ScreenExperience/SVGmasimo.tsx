import React from "react";

const SVGmasimo = ({ size = 250, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 126 124"
      className={className}
    >
      <path
        fill="#DA1A32"
        fillRule="evenodd"
        d="M49.516 1.422c-45.78 9.631-64.543 64.691-34.17 100.273 29.15 34.15 84.168 27.072 104.227-13.409 22.665-45.74-19.141-97.576-70.057-86.864Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M65.048 49.036c-4.057 8.938-7.56 16.473-7.784 16.746-.224.273-2.89-2.314-5.923-5.75l-5.515-6.246H23.528c-24.96 0-23.512-.467-23.512 7.582v4.418h28.85l17.728 19c9.75 10.45 17.997 18.991 18.325 18.98.635-.021 3.617-6.224 18.858-39.23l9.58-20.75h14.937c11.547 0 14.823-.284 14.439-1.25-.274-.687-1.271-3.163-2.216-5.5l-1.718-4.25H72.425l-7.377 16.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SVGmasimo;
