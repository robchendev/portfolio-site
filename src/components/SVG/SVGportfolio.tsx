import React from "react";

const SVGportfolio = ({ size = 250, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      width={size}
      height={size}
      viewBox="0 0 241 206"
      className={className}
    >
      <path
        fill="#9A6634"
        fillRule="evenodd"
        d="M87.279 26.588C39.429 41.148.155 53.184.003 53.334c-.248.245 15.925 151.733 16.256 152.278.076.124 9.786-2.708 21.579-6.293 43.98-13.371 54.049-16.424 78.941-23.939a84338.425 84338.425 0 0 0 50-15.115c13.475-4.079 24.909-8.021 25.409-8.761 2.012-2.976 49.229-122.138 48.51-122.425-.426-.17-7.417 1.732-15.536 4.228-17.426 5.355-15.682 6.033-13.838-5.374 1.831-11.32 2.661-10.611-8.37-7.152-9.175 2.875-9.175 2.875-9.175-3.509 0-7.45-.252-7.567-9.5-4.385-7.421 2.554-7.5 2.545-7.5-.86 0-4.467-1.205-12.152-1.886-12.025-.338.063-39.764 12.029-87.614 26.587Zm102.167-6.038c-.327 2.015-.948 3.976-1.381 4.355-.432.38-34.473 10.856-75.647 23.28C71.245 60.61 37.413 70.92 37.237 71.096c-.394.395-2.784 15.433-9.98 62.791-3.05 20.075-5.754 36.95-6.01 37.5-.255.55-.198-22.625.127-51.5.325-28.874.66-52.546.748-52.603 9.043-5.99 167.913-50.36 167.324-46.733Zm16.919 11.582c-1.086 7.245-1.086 7.245-41.925 19.578-44.646 13.482-42.69 13.158-40.199 6.639 2.306-6.04 3.612-6.003-18.249-.515-20.754 5.208-21.38 5.498-24.32 11.261-1.526 2.992-3.387 4.547-8.4 7.019-6.44 3.175-6.44 3.175-27.717 56.424-11.702 29.287-21.383 52.933-21.514 52.548-.358-1.049 16.333-109.128 16.947-109.742.558-.558 163.51-50.172 165.377-50.352.781-.076.781 1.927 0 7.14Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        stroke="#fff"
        d="M103.5 40.5c-48 11.214-81.292 26.73-81.378 26.787-.087.056-.423 23.728-.748 52.604-.325 28.875-.382 52.05-.127 51.5.256-.55 2.96-17.425 6.01-37.5 7.196-47.36 9.586-62.397 9.98-62.791.176-.176 34.008-10.486 75.181-22.91 41.174-12.424 75.215-22.9 75.647-23.28 1.576-1.387 2.074-8.026.595-7.924-.76.053-34.66 7.924-85.16 23.514Zm19.898 9.46c-45.034 13.672-82.12 25.096-82.41 25.389-.614.614-17.305 108.693-16.947 109.742.13.385 9.812-23.261 21.514-52.548 21.277-53.25 21.277-53.25 27.717-56.425 5.013-2.471 6.874-4.027 8.4-7.018 2.94-5.763 3.566-6.053 24.32-11.262 21.861-5.489 20.555-5.526 18.249.514-2.491 6.52-4.447 6.843 40.199-6.638 40.839-12.332 40.839-12.332 41.925-19.578.781-5.213.781-7.217 0-7.14-.597.056-37.932 11.29-82.967 24.963Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SVGportfolio;
