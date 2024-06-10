import { Cursor } from "@shared/ui/Cursor";
import spark from "@assets/spark-logo/spark_product_logo.svg";

import styles from "./styles.module.scss";

export const ForbiddenPage = () => {
  return (
    <>
      <Cursor />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.heading}>403</h1>
          <p className={styles.paragraph}>
            Access Forbidden, please activate your account and{" "}
            <a href="/ferla/login" className="text-orange">
              try again.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
