import React from "react";

export const Pokeball = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="white" stroke="black" strokeWidth="10" />
      <path d="M 10 100 A 90 90 0 0 1 190 100" fill="red" stroke="black" strokeWidth="10" />
      <rect x="10" y="95" width="180" height="10" fill="black" strokeWidth="10" />
      <circle cx="100" cy="100" r="35" fill="white" stroke="black" strokeWidth="10" />
    </svg>
  );
};

export const PokeballTop = ({ size = 50 }: { size?: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 200 200">
      <path d="M 10 100 A 90 90 0 0 1 190 100" fill="red" stroke="black" strokeWidth="10" />
      <rect x="5" y="95" width="190" height="10" fill="black" strokeWidth="10" />
      <clipPath id="clipTopHalf">
        <rect x="10" y="95" width="180" height="10" fill="black" strokeWidth="10" />
      </clipPath>
      <circle cx="100" cy="100" r="35" fill="white" stroke="black" strokeWidth="10" />
    </svg>
  );
};

export const PokeballBottom = ({ size = 50 }: { size?: number }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 200 200">
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
