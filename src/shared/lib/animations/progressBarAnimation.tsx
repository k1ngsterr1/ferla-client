import { RefObject, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useProgressBarAnimation = (progressBarRef: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const progressBar = progressBarRef.current;
    if (progressBar) {
      gsap.fromTo(
        progressBar,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            scrub: 1,
            start: "top top",
            end: "bottom bottom",
          },
        }
      );
    } else {
      [];
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [progressBarRef]);
};

export default useProgressBarAnimation;
