import { RefObject } from "react";
import gsap from "gsap";

export const useCustomLabel = (labelRef: RefObject<HTMLElement>) => {
  const onLabelFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current) {
      gsap.to(labelRef.current, {
        bottom: "clamp(16px,1.66656vw,64px)",
        fontSize: "clamp(8px,0.83328vw,32px)",
        color: "#E33A3A",
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  const onLabelBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    if (labelRef.current && e.target.value === "") {
      gsap.to(labelRef.current, {
        bottom: "4px",
        fontSize: "clamp(9px,0.93744vw,36px)",
        color: "#232121",
        duration: 0.5,
        ease: "power3.out",
      });
    }
  };

  return { onLabelFocus, onLabelBlur };
};
