import React from "react";

import styles from "./styles.module.scss";

interface ISeparator {
  width: string;
  margins?: string;
}

export const Separator: React.FC<ISeparator> = ({ width, margins }) => {
  return <hr className={styles.separator} />;
};
