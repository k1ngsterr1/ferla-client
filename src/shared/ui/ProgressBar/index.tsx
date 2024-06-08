"use client";
import React, { useRef } from "react";
import useProgressBarAnimation from "@shared/lib/animations/progressBarAnimation";

import styles from "./styles.module.scss";

export const ProgressBar = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  useProgressBarAnimation(progressBarRef);

  return <div className={styles.progress_bar} ref={progressBarRef} />;
};
