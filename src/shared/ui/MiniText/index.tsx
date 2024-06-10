import React from "react";

import styles from "./styles.module.scss";

interface IMiniText {
  text: string;
  id: string;
}

export const MiniText: React.FC<IMiniText> = ({ text, id }) => {
  return (
    <span className={styles.mini_text} id={id}>
      {text}
    </span>
  );
};
