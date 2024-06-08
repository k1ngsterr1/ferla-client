"use client";
import { useEffect } from "react";

function useScript(src: string) {
  useEffect(() => {
    // Check if the script is already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
}

export default useScript;
