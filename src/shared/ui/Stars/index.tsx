import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface IStarsProps {
  quantity: number;
}

export const Stars: React.FC<IStarsProps> = ({ quantity }) => {
  const stars = Array.from({ length: quantity }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} className={styles.star_icon} />
  ));

  return <div className={styles.stars}>{stars}</div>;
};
