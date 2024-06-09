"use client";
import React, { useRef } from "react";
import useHeaderScroll from "@shared/lib/animations/headerAnimation";
import logo from "@assets/vectors/logo.svg";

import styles from "./styles.module.scss";

export const HeaderMobile = () => {
  const headerRef = useRef(null);

  useHeaderScroll(headerRef);

  return (
    <header className={styles.header_mob} ref={headerRef}>
      <div
        className={`${styles.header_mob__container}  m-auto w-full  !flex !flex-row items-center`}
      >
        <img
          src={logo}
          alt="Ferla Bikes Logo"
          className={styles.header_mob__container__logo}
        />
        <a className={styles.header_mob__container__link} href="#">
          Get a quote
        </a>
      </div>
    </header>
  );
};
