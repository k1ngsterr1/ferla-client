import React from "react";
import styles from "./styles.module.scss";

export const ForbiddenPage = () => {
  return (
    <div className="w-full h-full">
      <h1 className={styles.heading}>403</h1>
      <p className={styles.paragraph}>Access Forbidden</p>
    </div>
  );
};
