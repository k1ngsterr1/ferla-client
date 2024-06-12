"use client";
import { Calculator } from "@features/Calculator";
import { useFetchContent } from "@shared/lib/hooks/useFetchContent";

import styles from "./styles.module.scss";

export const CalculatorBlock = () => {
  const { content } = useFetchContent();

  return (
    <section className={styles.calculator}>
      <h6
        className={styles.calculator__heading}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_51"
      >
        {content && content["50"] ? content["50"].value : "Content Not Found"}
      </h6>
      <p
        className={styles.calculator__paragraph}
        id="editable_ferla-bikes_89d6700c-288d-46c6-b463-60aae8b1b830_52"
      >
        {content && content["51"] ? content["51"].value : "Content Not Found"}
      </p>
      <Calculator />
    </section>
  );
};
