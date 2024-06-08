import React from "react";

import styles from "./styles.module.scss";
import { Stars } from "@shared/ui/Stars";

export interface IReviewCard {
  name: string;
  undername: string;
  photo: string;
  alt: string;
  text: string;
}

export const ReviewCard: React.FC<IReviewCard> = ({
  name,
  photo,
  alt,
  undername,
  text,
}) => {
  return (
    <div className={styles.review_card}>
      <div className="flex items-center justify-center gap-2">
        <img src={photo} alt={alt} className={styles.review_card__image} />
        <div className="flex flex-col items-start">
          <span className={styles.review_card__name}>{name}</span>
          <span className={styles.review_card__undername}>{undername}</span>
        </div>
      </div>
      <Stars quantity={5} />
      <span className={styles.review_card__text}>{text}</span>
    </div>
  );
};
