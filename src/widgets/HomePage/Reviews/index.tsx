"use client";
import TrustIndexWidget from "@features/TrustIndexWidget";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

import styles from "./styles.module.scss";

export const Reviews = () => {
  const { content } = useFetchContent();

  return (
    <section className={styles.reviews} id="reviews">
      <h6
        className={styles.reviews__heading}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_52"
      >
        {" "}
        {content && content["51"] ? content["51"].value : "Content not found"}
      </h6>
      <p
        className={styles.reviews__paragraph}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_53"
      >
        {content && content["52"] ? content["52"].value : "Content not found"}
      </p>
      <TrustIndexWidget />
      {/* <ReviewSwiper /> */}
    </section>
  );
};
