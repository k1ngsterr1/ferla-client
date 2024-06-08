import React from "react";

import styles from "./styles.module.scss";

interface IMiniText {
  text: string;
}

export const MiniText: React.FC<IMiniText> = ({ text }) => {
  return <span className={styles.mini_text}>{text}</span>;
};
