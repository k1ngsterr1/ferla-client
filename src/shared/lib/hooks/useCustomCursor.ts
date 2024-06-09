import { RefObject, useEffect } from "react";
import gsap from "gsap";

export const useCustomCursor = (cursorRef: RefObject<HTMLElement>) => {
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: x,
          y: y,
          duration: 0.1,
          background: "transparent",
          ease: "power3.out",
        });
      }
    };

    const onMouseOver = (e: any) => {
      if (e.target.matches(".hoverable") && cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 0.7,
          background: "#transparent",
          fill: "#E33A3A",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const onMouseOut = (e: any) => {
      if (e.target.matches(".hoverable") && cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          backgroundColor: "transparent",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);
};
