"use client";
import React from "react";
import { ReviewSwiperMobile } from "@features/ReviewSwiperMobile";

import styles from "./styles.module.scss";

export const ReviewsMobile = () => {
  return (
    <section className={styles.reviews_mob}>
      <h6>
        <strong>Reviews</strong>
      </h6>
      <p className={styles.reviews_mob__paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. Duis aute irure dolor in reprehenderit in...
      </p>
      <ReviewSwiperMobile />
    </section>
  );
};
