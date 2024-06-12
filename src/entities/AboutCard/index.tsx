import React from "react";
import styles from "./styles.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDot } from "@shared/ui/IconDot";

interface IAboutCard {
  name: string;
  text: string;
  icon: IconProp;
  id: string;
  secondId: string;
}

export const AboutCard: React.FC<IAboutCard> = ({
  name,
  text,
  icon,
  id,
  secondId,
}) => {
  return (
    <div className={`${styles.about_card} hoverable`}>
      <IconDot icon={icon} />
      <span className={styles.about_card__name} id={id}>
        {name}
      </span>
      <span className={styles.about_card__text} id={secondId}>
        {text}
      </span>
    </div>
  );
};
