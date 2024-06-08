"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Calculator } from "@features/Calculator";

export const CalculatorBlock = () => {
  return (
    <section className={styles.calculator}>
      <h6 className={styles.calculator__heading} id="ferla-edit-42">
        Calculator
      </h6>
      <p className={styles.calculator__paragraph} id="ferla-edit-43">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p>
      <Calculator />
    </section>
  );
};
