"use client";
import React, { useEffect } from "react";
import useScript from "@shared/lib/hooks/useScript";

const TrustIndexWidget = () => {
  const scriptUrl =
    "https://cdn.trustindex.io/loader.js?9fa959e30e81566f4c668f3ff30";
  useScript(scriptUrl);

  // Effect to relocate the TrustIndex widget after it loads
  useEffect(() => {
    const interval = setInterval(() => {
      const widget = document.querySelector(".ti-widget"); // TrustIndex should provide the correct class or ID
      const targetContainer = document.getElementById(
        "trustindex-widget-container"
      );

      if (widget && targetContainer) {
        targetContainer.appendChild(widget); // Move the widget to the specified container
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="trustindex-widget-container"></div> // Container where you want the widget to appear
  );
};

export default TrustIndexWidget;
