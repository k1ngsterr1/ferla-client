import { RefObject, useState, useCallback, useRef } from "react";
import gsap from "gsap";

export const useHoverMenu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLElement | null>(null);

  const setRef = useCallback((node: any) => {
    if (node) {
      ref.current = node;
    }
  }, []);

  const openMenu = () => {
    setIsVisible(true);
    if (ref.current) {
      gsap.to(ref.current, {
        opacity: 1,
        top: "0px",
        zIndex: 99,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  const closeMenu = () => {
    if (ref.current) {
      gsap.to(ref.current, {
        opacity: 0,
        top: "-100%",
        zIndex: -1,
        duration: 0.3,
        ease: "power3.in",
      });
    }
    setIsVisible(false);
  };

  return { isVisible, openMenu, closeMenu, setRef };
};
