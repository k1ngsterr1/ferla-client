import React from "react";
import CountUp from "react-countup";
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
      <div className="flex flex-col items-center">
        <span className={styles.result__money_back}>Make money back:</span>
        <span className={styles.result__money_back_amount}>{moneyBack}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className={styles.result__money_back}>
          In 3 months estimated earnings:
        </span>
        <span className={styles.result__money_back_amount}>
          <CountUp end={estimatedEarnings} prefix="$" duration={2} />
        </span>
      </div>
    </div>
  );
};
