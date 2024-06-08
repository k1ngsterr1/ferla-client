"use client";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { AboutCardSwiper } from "@features/AboutCardSwiper";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import bike from "@assets/webp/mob/best_sellers_mob.webp";

import styles from "./styles.module.scss";

export const BestSellersMobile = () => {
  return (
    <section className={styles.best_sellers_mob}>
      <div className={styles.best_sellers_mob__content}>
        <div className={styles.best_sellers_mob__content__text}>
          <MiniText text="Best Sellers" />
          <h3 className="mt-4">
            <strong>Your Business, Your Cart, Your Way</strong>
          </h3>
          <p className={styles.best_sellers_mob__content__text__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <AboutCardSwiper />
        <Button
          text="Manage Your Business"
          buttonType="transparent"
          margin="mt-8"
          icon={faChevronRight}
        />
      </div>
      <img
        src={bike}
        alt="Best Sellers"
        className={styles.best_sellers_mob__image}
      />
    </section>
  );
};
