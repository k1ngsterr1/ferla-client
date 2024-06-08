"use client";
import React from "react";
import Button from "@shared/ui/Button";
import Link from "next/link";
import { HeaderMobile } from "@features/HeaderMobile";

import styles from "./styles.module.scss";

export const MainScreenMobile = () => {
  return (
    <main className={styles.main_screen_mob}>
      <div className={styles.main_screen_mob__content}>
        <HeaderMobile />
        <h1 className={styles.main_screen_mob__content__heading}>
          <strong>Business on Wheels for Everyone</strong>
        </h1>
        <p className={styles.main_screen_mob__content__paragraph}>
          From Coffee Bikes and Ice Cream Bikes to Marketing & Promo Bikes,
          Hospitality Bikes, Vending Carts and more, we provide the perfect
          solution for your mobile retail pop-up.
        </p>
        <Button
          text="Get A Free Consultation"
          buttonType="filled"
          margin="mt-8"
        />
        <a className={styles.main_screen_mob__content__link} href="#video">
          Watch the true story
        </a>
      </div>
    </main>
  );
};
