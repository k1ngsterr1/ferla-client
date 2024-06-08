import React from "react";
import styles from "./styles.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { IconDot } from "@shared/ui/IconDot";

interface IAboutCard {
  name: string;
  text: string;
  icon: IconProp;
  id: string;
}

export const AboutCard: React.FC<IAboutCard> = ({ name, text, icon, id }) => {
  return (
    <div className={`${styles.about_card} hoverable`} id={id}>
      <IconDot icon={icon} />
      <span className={styles.about_card__name}>{name}</span>
      <span className={styles.about_card__text}>{text}</span>
    </div>
  );
};
