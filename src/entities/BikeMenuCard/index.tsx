import React from "react";

import styles from "./styles.module.scss";

interface IBikeMenuCard {
  image: string;
  name: string;
  href: string;
}

export const BikeMenuCard: React.FC<IBikeMenuCard> = ({
  image,
  name,
  href,
}) => {
  return (
    <div className={`${styles.bike_card} hoverable`}>
      <img
        className={`${styles.bike_card__image} hoveralbe`}
        src={image}
        alt={name}
      />
      <span className={`${styles.bike_card__name} hoverable`}>{name}</span>
      <a href={href} className={`${styles.bike_card__link} hoverable`}>
        Learn
      </a>
    </div>
  );
};
