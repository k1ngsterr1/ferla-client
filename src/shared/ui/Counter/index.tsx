"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

interface ICounter {
  averageOrderPrice: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const Counter: React.FC<ICounter> = ({
  averageOrderPrice,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <div className={`${styles.counter} hoverable`}>
      <span className={`${styles.counter__dollar} hoverable`}>$</span>
      <span className={`${styles.counter__count} hoverable`}>
        {averageOrderPrice}
      </span>
      <div className="flex flex-col items-center hoverable">
        <FontAwesomeIcon
          icon={faCaretUp}
          className={`${styles.counter__increment} hoverable`}
          onClick={handleIncrement}
        />
        <FontAwesomeIcon
          icon={faCaretDown}
          className={`${styles.counter__decrement} hoveralbe`}
          onClick={handleDecrement}
        />
      </div>
    </div>
  );
};
