import React from "react";
import styles from "./styles.module.scss";

interface ICalculatorInput {
  bikePrice: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Specify the type for onChange
}

export const CalculatorInput: React.FC<ICalculatorInput> = ({
  bikePrice,
  onChange,
}) => {
  return (
    <input
      className={`${styles.calculator_input} hoverable`}
      value={bikePrice}
      onChange={onChange}
      placeholder="Bike Price"
    />
  );
};
