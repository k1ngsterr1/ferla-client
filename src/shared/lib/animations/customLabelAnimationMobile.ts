"use client";

import { useRef } from "react";
import gsap from "gsap";

export const useCustomLabel = () => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current) {
      gsap.to(labelRef.current, {
        bottom: "clamp(15px,7.0092vw,60px)",
        fontSize: "clamp(7px,3.2709599999999996vw,28px)",
        color: "#E33A3A",
        duration: 0.1,
        ease: "power3.out",
      });
    }
  };

  const onLabelBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current && e.target.value === "") {
      gsap.to(labelRef.current, {
        bottom: "4px",
        fontSize: "clamp(9px,4.20552vw,36px)",
        color: "#232121",
        duration: 0.1,
        ease: "power3.out",
      });
    }
  };

  return { onLabelFocus, onLabelBlur, labelRef };
};

export const useCustomLabelTablet = () => {
  const tabletLabelRef = useRef<HTMLLabelElement>(null);

  const onLabelTabletFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (tabletLabelRef.current) {
      gsap.to(tabletLabelRef.current, {
        bottom: "clamp(17.5px,4.861vw,70px)",
        fontSize: "clamp(10px,2.778vw,40px)",
        color: "#E33A3A",
        duration: 0.1,
        ease: "power3.out",
      });
    }
  };

  const onLabelTabletBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (tabletLabelRef.current && e.target.value === "") {
      gsap.to(tabletLabelRef.current, {
        bottom: "4px",
        fontSize: "clamp(12px, 3.333vw, 48px)",
        color: "#232121",
        duration: 0.1,
        ease: "power3.out",
      });
    }
  };

  return { onLabelTabletFocus, onLabelTabletBlur, tabletLabelRef };
};
