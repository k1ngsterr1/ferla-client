"use client";
import TrustIndexWidget from "@features/TrustIndexWidget";

import styles from "./styles.module.scss";

export const Reviews = () => {
  return (
    <section className={styles.reviews} id="reviews">
      <h6
        className={styles.reviews__heading}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_45"
      >
        Reviews
      </h6>
      <p
        className={styles.reviews__paragraph}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_46"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. Duis aute irure dolor in reprehenderit in...
      </p>
      <TrustIndexWidget />

      {/* <ReviewSwiper /> */}
    </section>
  );
};
