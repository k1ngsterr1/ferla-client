"use client";
import TrustIndexWidget from "@features/TrustIndexWidget";

import styles from "./styles.module.scss";

export const Reviews = () => {
  return (
    <section className={styles.reviews} id="reviews">
      <h6 className={styles.reviews__heading}>Reviews</h6>
      <p className={styles.reviews__paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. Duis aute irure dolor in reprehenderit in...
      </p>
      <TrustIndexWidget />

      {/* <ReviewSwiper /> */}
    </section>
  );
};
