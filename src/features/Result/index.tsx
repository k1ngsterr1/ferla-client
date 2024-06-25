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
  const getMoneyBackText = (value: number) => {
    if (value >= 1 && value <= 1.5) {
      return "1-2 months";
    } else if (value > 1.5 && value <= 2) {
      return "2-3 months";
    } else if (value > 2) {
      return "More than 3 months";
    } else if (value < 1) {
      return "Less than 1 month";
    }

    return value.toFixed(2);
  };

  return (
    <div className={styles.result}>
      <div className="flex flex-col items-start justify-center">
        <span className={styles.result__money_back}>Make money back:</span>
        <span className={styles.result__money_back_amount}>
          {getMoneyBackText(moneyBack)}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
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
