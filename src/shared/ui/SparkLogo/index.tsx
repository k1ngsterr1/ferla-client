"use client";
import React from "react";

import spark_logo from "@assets/vectors/spark_logo.svg";

export const SparkLogo = () => {
  return (
    <img
      className="hoverable mt-8"
      src={spark_logo}
      onClick={() => (window.location.href = "https://sparkstudio.kz/home")}
      alt="Spark Studio Logotype"
    />
  );
};
