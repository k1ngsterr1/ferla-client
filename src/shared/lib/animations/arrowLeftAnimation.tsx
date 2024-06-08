import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function useArrowLeftAnimation(
  arrowRef: React.RefObject<SVGPathElement>
) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = arrowRef.current;
    if (!element) return;

    const triggerAnimation = () => {
      gsap.fromTo(
        element,
        { strokeDashoffset: 400 },
        { strokeDashoffset: 0, duration: 2, ease: "none" }
      );
    };

    const handleIntersect = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerAnimation();
          observer.disconnect();
        }
      });
    };

    // Create an observer instance linked to the callback function
    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null, // Default observing viewport
      rootMargin: "0px",
      threshold: 0.5, // Adjust this value based on when you want to trigger the animation
    });

    // Start observing the element
    if (element) {
      observerRef.current.observe(element);
    }

    // Cleanup function to disconnect the observer
    return () => {
      observerRef.current?.disconnect();
    };
  }, [arrowRef]); // Ensure the effect runs only once or when arrowRef changes

  // No need to return anything from this hook unless you need to expose something specific
}
