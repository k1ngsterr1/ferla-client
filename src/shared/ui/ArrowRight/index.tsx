"use client";
import { useArrowRightAnimation } from "@shared/lib/animations/arrowRightAnimation";
import React, { useRef, useEffect } from "react";

const ArrowRight = () => {
  const arrowRef = useRef<SVGPathElement>(null);
  useArrowRightAnimation(arrowRef);

  return (
    <svg
      width="68"
      height="63"
      viewBox="0 0 68 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={arrowRef}
        d="M67 0V55.7654H0.999996M0.999996 55.7654L5.71428 49.5307M0.999996 55.7654L5.71428 62"
        stroke="#E33A3A"
        strokeWidth="2"
        strokeLinejoin="round"
        style={{ strokeDasharray: 400, strokeDashoffset: 400 }}
      />
    </svg>
  );
};

export default ArrowRight;
