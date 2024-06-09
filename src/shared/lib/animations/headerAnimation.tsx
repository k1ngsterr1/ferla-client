"use client";
import { RefObject, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useHeaderScroll = (headerRef: RefObject<HTMLHeadElement>) => {
  useEffect(() => {
    const headerElement = headerRef.current;

    gsap.to(headerElement, {
      backgroundColor: "#fbfbfb",
      ease: "power1.out",
      scrollTrigger: {
        trigger: headerElement,
        start: "top+=100 top",
        toggleActions: "play none none reverse",
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [headerRef]);
};

export default useHeaderScroll;
