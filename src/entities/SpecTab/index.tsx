import React from "react";

import styles from "./styles.module.scss";

export interface ISpecTab {
  name: string;
  feature: string;
}

export const SpecTab: React.FC<ISpecTab> = ({ name, feature }) => {
  return (
    <div className={styles.spec_tab}>
      <span className={styles.spec_tab__name}>{name}</span>
      <span className={styles.spec_tab__feature}>{feature}</span>
    </div>
  );
};
