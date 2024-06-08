"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useCartPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";

interface ICartCard {
  photo: string | StaticImageData;
  name: string;
  title: string;
  paragraph: string;
}

export const CartCard: React.FC<ICartCard> = ({
  photo,
  name,
  paragraph,
  title,
}) => {
  const { toggleCartPopup } = useCartPopup();

  const handleCardClick = () => {
    const cardData = {
      image: photo,
      name: name,
      title: title,
      paragraph: paragraph,
    };
    toggleCartPopup(cardData);
  };

  return (
    <div
      className="flex flex-col items-center hoverable"
      onClick={handleCardClick}
    >
      <div className={`${styles.cart_card} hoverable`}>
        <img src={photo} alt={name} className={styles.cart_card__image} />
        <span className={styles.cart_card__name}>{name}</span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className={`${styles.link} hoverable`}>
          Explore
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.link__icon}
          />
        </span>
      </div>
    </div>
  );
};
