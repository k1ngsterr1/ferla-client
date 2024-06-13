"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCartPopup } from "@shared/lib/context/PopupContext";

import styles from "./styles.module.scss";
import { deleteResource } from "@shared/lib/hooks/useDeleteCart";

interface ICartCard {
  photo: string;
  name: string;
  title: string;
  id: number;
  paragraph: string;
  accessToken?: string;
  isDeletable?: boolean;
}

export const CartCard: React.FC<ICartCard> = ({
  photo,
  id,
  accessToken,
  name,
  paragraph,
  isDeletable,
  title,
}) => {
  const { toggleCartPopup } = useCartPopup();

  const handleCardClick = () => {
    const cardData = {
      image: photo,
      id: id,
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
      {isDeletable && (
        <button
          className={`${styles.link} mt-4`}
          onClick={() => deleteResource(id, accessToken)}
        >
          <FontAwesomeIcon icon={faTrash} className={styles.link__icon} />
          Delete
        </button>
      )}
    </div>
  );
};
