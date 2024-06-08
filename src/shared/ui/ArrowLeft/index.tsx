"use client";

import { useArrowLeftAnimation } from "@shared/lib/animations/arrowLeftAnimation";
import React, { useRef } from "react";

export const ArrowLeft = () => {
  const arrowLeftRef = useRef<SVGPathElement>(null);
  useArrowLeftAnimation(arrowLeftRef);

  return (
    <svg
      width="68"
      height="63"
      viewBox="0 0 68 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={arrowLeftRef}
        d="M1 0V55.7654H67M67 55.7654L62.2857 49.5307M67 55.7654L62.2857 62"
        stroke="#E33A3A"
        strokeWidth="2"
        strokeLinejoin="round"
        style={{ strokeDasharray: 400, strokeDashoffset: 400 }}
      />
    </svg>
  );
};
