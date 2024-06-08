"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import styles from "../Counter/styles.module.scss";

interface IDayCounter {
  daysPerWeek: number;
  handleIncrementDayPerWeek: () => void;
  handleDecrementDayPerWeek: () => void;
}

export const DayCounter: React.FC<IDayCounter> = ({
  daysPerWeek,
  handleDecrementDayPerWeek,
  handleIncrementDayPerWeek,
}) => {
  return (
    <div className={`${styles.counter} hoverable`}>
      <FontAwesomeIcon
        icon={faMinus}
        className={`${styles.counter__decrement} hoverable`}
        onClick={handleDecrementDayPerWeek}
      />
      <span className={`${styles.counter__count} hoverable`}>
        {daysPerWeek}
      </span>
      <div className="flex flex-col items-center hoverable">
        <FontAwesomeIcon
          icon={faPlus}
          className={`${styles.counter__increment} hoverable`}
          onClick={handleIncrementDayPerWeek}
        />
      </div>
    </div>
  );
};
