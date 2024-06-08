import React from "react";
import styles from "./styles.module.scss";

interface IResultProps {
  moneyBack: number;
  estimatedEarnings: number;
}

export const Result: React.FC<IResultProps> = ({
  moneyBack,
  estimatedEarnings,
}) => {
  return (
    <div className={styles.result}>
      <span className={styles.result__heading}>Result:</span>
      <div className="flex flex-col items-center">
        <span className={styles.result__money_back}>Make money back:</span>
        <span className={styles.result__money_back_amount}>{moneyBack}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className={styles.result__money_back}>
          In 3 months estimated earnings:
        </span>
        <span className={styles.result__money_back_amount}>
          {estimatedEarnings}$
        </span>
      </div>
    </div>
  );
};
