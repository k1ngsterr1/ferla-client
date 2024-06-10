"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Calculator } from "@features/Calculator";

export const CalculatorBlock = () => {
  return (
    <section className={styles.calculator}>
      <h6
        className={styles.calculator__heading}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_51"
      >
        Calculator
      </h6>
      <p
        className={styles.calculator__paragraph}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_52"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
      <Calculator />
    </section>
  );
};
