import React from "react";

import styles from "./styles.module.scss";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IconDot } from "@shared/ui/IconDot";

interface IBlock {
  icon: IconDefinition;
  paragraph: string;
  margin?: string;
  border?: string;
  id: string;
}

export const Block: React.FC<IBlock> = ({
  icon,
  paragraph,
  margin,
  border,
  id,
}) => {
  return (
    <div className={`${styles.block} ${margin} ${border}`} id={id}>
      <IconDot icon={icon} />
      <p className={styles.block__paragraph}>{paragraph}</p>
    </div>
  );
};
