"use client";
import TrustIndexWidget from "@features/TrustIndexWidget";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

import styles from "./styles.module.scss";

export const Reviews = () => {
  const { content } = useFetchContent();

  return (
    <section className={styles.reviews} id="reviews">
      <h6 className={styles.reviews__heading}>
        {" "}
        {content && content["46"] ? content["46"].value : "Content not found"}
      </h6>
      <p className={styles.reviews__paragraph}>
        {content && content["47"] ? content["47"].value : "Content not found"}
      </p>
      <TrustIndexWidget />
      {/* <ReviewSwiper /> */}
    </section>
  );
};
