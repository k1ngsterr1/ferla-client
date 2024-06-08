import React from "react";
import logo from "@assets/vectors/logo.svg";

import styles from "./styles.module.scss";

export const HeaderMobile = () => {
  return (
    <header className={styles.header_mob}>
      <img
        src={logo}
        alt="Ferla Bikes Logo"
        className={styles.header_mob__logo}
      />
      <a className={styles.header_mob__link} href="#">
        Get a quote
      </a>
    </header>
  );
};
