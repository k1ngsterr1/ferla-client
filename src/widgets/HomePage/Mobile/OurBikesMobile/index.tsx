"use client";
import React from "react";
import { CartCardSwiper } from "@features/CartCardSwiper";

import styles from "./styles.module.scss";

export const OurBikesMobile = () => {
  return (
    <section className={styles.our_bikes_mob}>
      <h6>
        <strong>Our Bikes</strong>
      </h6>
      <CartCardSwiper />
    </section>
  );
};
