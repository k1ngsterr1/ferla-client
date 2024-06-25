import spark_product from "@assets/spark_product_logo.svg";

import styles from "./styles.module.scss";

interface ISparkMenu {
  onClick: () => void;
}

export const SparkMenu: React.FC<ISparkMenu> = ({ onClick }) => {
  return (
    <button className={styles.spark_btn} onClick={onClick}>
      <img
        src={spark_product}
        alt="Spark Studio"
        className={styles.spark_btn__logo}
      />
    </button>
  );
};
