import React from "react";

export const Pokeball = ({ size = 50, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
    >
      <circle cx="100" cy="100" r="90" fill="white" stroke="black" strokeWidth="10" />
      <path d="M 10 100 A 90 90 0 0 1 190 100" fill="red" stroke="black" strokeWidth="10" />
      <rect x="10" y="95" width="180" height="10" fill="black" strokeWidth="10" />
      <circle cx="100" cy="100" r="35" fill="white" stroke="black" strokeWidth="10" />
    </svg>
  );
};

export const PokeballFill = ({
  size = 50,
  fill = "black",
  stroke = "white",
  className = "",
}: {
  size?: number;
  fill?: string;
  stroke?: string;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
    >
      <circle cx="100" cy="100" r="90" fill="#efb563" stroke="#de6363" strokeWidth="22" />
      <path d="M 10 100 A 90 90 0 0 1 190 100" fill="#efb563" stroke="#de6363" strokeWidth="22" />
      <rect x="10" y="89" width="180" height="22" fill="#de6363" strokeWidth="22" />
      <circle cx="100" cy="100" r="35" fill="#efb563" stroke="#de6363" strokeWidth="22" />
    </svg>
  );
};

export const PokeballTop = ({
  size = 50,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
    >
      <path d="M 10 100 A 90 90 0 0 1 190 100" fill="red" stroke="black" strokeWidth="10" />
      <rect x="5" y="95" width="190" height="10" fill="black" strokeWidth="10" />
      <clipPath id="clipTopHalf">
        <rect x="10" y="95" width="180" height="10" fill="black" strokeWidth="10" />
      </clipPath>
      <circle cx="100" cy="100" r="35" fill="white" stroke="black" strokeWidth="10" />
    </svg>
  );
};

export const PokeballBottom = ({
  size = 50,
  className = "",
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
    >
      <mask id="topHalf">
        <circle cx="100" cy="100" r="90" fill="white" stroke="white" strokeWidth="10" />
        <circle cx="100" cy="100" r="35" fill="black" />
      </mask>
      <mask id="button">
        <path d="M 10 95 A 90 90 0 0 0 190 95" fill="white" />
      </mask>
      <path
        d="M 10 100 A 90 90 0 0 1 190 100"
        fill="white"
        stroke="black"
        strokeWidth="10"
        transform="rotate(180 100 100)"
        mask="url(#topHalf)"
      />
      <rect
        x="5"
        y="95"
        width="190"
        height="10"
        fill="black"
        strokeWidth="10"
        mask="url(#topHalf)"
      />
      <circle
        cx="100"
        cy="100"
        r="35"
        fill="transparent"
        stroke="black"
        strokeWidth="10"
        mask="url(#button)"
      />
    </svg>
  );
};
