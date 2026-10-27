import React from "react";

const SVGTranscriber = ({ size = 250, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 406 492"
      fill="none"
      className={className}
    >
      {/* PyTorch logo */}
      <g fill="#EE4C2C">
        <path d="M203 0 59.5 143.5C21 182 0 232.5 0 287c0 112.1 90.9 203 203 203s203-90.9 203-203c0-55.4-22.2-105.7-59.7-143.5l-36.2 36.2C338.2 207.8 355 245.8 355 287c0 83.9-68.1 152-152 152S51 370.9 51 287c0-41.2 16.8-79.2 45-107.3L203 71V0Z" />
        <circle cx="275" cy="108" r="26.5" />
      </g>

      {/* Centered musical eighth-note pair */}
      <g fill="#EE4C2C">
        {/* Angled beam */}
        <path d="M181 216 263 193 263 213 181 236Z" />

        {/* Stems */}
        <path d="M181 225H190V322H181Z" />
        <path d="M254 203H263V300H254Z" />

        {/* Left notehead */}
        <path d="M190 316C194 326 181 340 166 346C149 353 134 349 132 338C129 327 141 314 157 308C174 302 186 306 190 316Z" />

        {/* Right notehead */}
        <path d="M263 294C267 304 254 318 239 324C222 331 207 327 205 316C202 305 214 292 230 286C247 280 259 284 263 294Z" />
      </g>
    </svg>
  );
};

export default SVGTranscriber;
