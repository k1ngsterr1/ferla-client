"use client";
import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

interface ICalculatorRange {
  ordersPerDay: number;
  handleOrdersIncrement: () => void;
  handleOrdersDecrement: () => void;
  onChange: (changeEvent: any) => void;
}

export const CalculatorRange: React.FC<ICalculatorRange> = ({
  ordersPerDay,
  onChange,
  handleOrdersIncrement,
  handleOrdersDecrement,
}) => {
  return (
    <div className={`${styles.calculator_range} hoverable gap-4 text-red mt-3`}>
      <FontAwesomeIcon
        icon={faMinus}
        onClick={handleOrdersDecrement}
        className={`${styles.calculator_range__button__icon} hoverable`}
      />
      <RangeSlider
        value={ordersPerDay}
        color="#E33A3A"
        size="lg"
        min={0}
        max={350}
        step={1}
        variant="danger"
        style={{
          width: "100%",
        }}
        className={`${styles.calculator_range__input} hoverable`}
        tooltip="on"
        tooltipPlacement="top"
        onChange={onChange}
      />
      <FontAwesomeIcon
        icon={faPlus}
        onClick={handleOrdersIncrement}
        className={`${styles.calculator_range__button__icon} hoverable`}
      />
    </div>
  );
};
