import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import styles from "./styles.module.scss";

interface IIConDot {
  icon: IconProp;
  margins?: string;
}

// Красная точка с иконкой внутри как на дизайне в фигме: https://www.figma.com/design/gYoEOvjepU4YYQ1eH2HwpB/Ferla-Bikes-New?node-id=153-211&t=yIdmAPRinfJreBoI-1
export const IconDot: React.FC<IIConDot> = ({ icon, margins }) => {
  return (
    <div className={`${styles.icon_dot} ${margins}`}>
      <FontAwesomeIcon icon={icon} className={styles.icon_dot__icon} />
    </div>
  );
};
