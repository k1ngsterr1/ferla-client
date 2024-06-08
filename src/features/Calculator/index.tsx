"use client";
import React, { useEffect, useState } from "react";
import { Counter } from "@shared/ui/Counter";
import { CalculatorInput } from "@shared/ui/CalculatorInput";
import { options } from "@shared/lib/content/options";
import { CalculatorRange } from "@shared/ui/CalculatorRange";
import { DayCounter } from "@shared/ui/DayCounter";
import Selector from "@shared/ui/CalculatorSelector";

import styles from "./styles.module.scss";
import { Result } from "@features/Result";

export const Calculator = () => {
  const [averageOrderPrice, setAverageOrderPrice] = useState<number>(0);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(0);
  const [ordersPerDay, setOrdersPerDay] = useState<number>(0);
  const [bikePrice, setBikePrice] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [makeMoneyBack, setMakeMoneyBack] = useState<number>(0);
  const [estimatedEarnings, setEstimatedEarnings] = useState<number>(0);

  const handleSelectorChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleSetBike = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBikePrice(Number(event.target.value));
  };

  const handleIncrementAverageOrderPrice = () => {
    setAverageOrderPrice(averageOrderPrice + 1);
  };

  const handleDecrementAverageOrderPrice = () => {
    setAverageOrderPrice(averageOrderPrice - 1);
  };

  const handleIncrementDaysPerWeek = () => {
    setDaysPerWeek(daysPerWeek + 1);
  };

  const handleDecrementDaysPerWeek = () => {
    setDaysPerWeek(daysPerWeek - 1);
  };

  const handleDecrementOrders = () => {
    setOrdersPerDay((currentOrders) => Math.max(0, Number(currentOrders) - 1));
  };

  const handleIncrementOrders = () => {
    setOrdersPerDay((currentOrders) => Number(currentOrders) + 1);
  };

  useEffect(() => {
    if (averageOrderPrice && ordersPerDay && daysPerWeek && bikePrice) {
      const newMakeMoneyBack =
        bikePrice / (averageOrderPrice * ordersPerDay * 4 * daysPerWeek);
      console.log("make money back:", makeMoneyBack);
      setMakeMoneyBack(newMakeMoneyBack);
    }
  }, [bikePrice, averageOrderPrice, ordersPerDay, daysPerWeek]);

  useEffect(() => {
    if (averageOrderPrice && ordersPerDay && daysPerWeek) {
      const newEstimatedEarnings =
        averageOrderPrice * ordersPerDay * daysPerWeek * 12;
      console.log("estimated earnings", estimatedEarnings);
      setEstimatedEarnings(newEstimatedEarnings);
    }
  }, [averageOrderPrice, ordersPerDay, daysPerWeek]);

  return (
    <>
      <div className={styles.calculator}>
        <div className="flex items-start justify-between">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <span className={styles.calculator__counter_text}>
                Average order price
              </span>
              <Counter
                averageOrderPrice={averageOrderPrice}
                handleDecrement={handleDecrementAverageOrderPrice}
                handleIncrement={handleIncrementAverageOrderPrice}
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <span className={styles.calculator__counter_text}>
                Approximate orders per day
              </span>
              <CalculatorRange
                ordersPerDay={ordersPerDay}
                handleOrdersDecrement={handleDecrementOrders}
                handleOrdersIncrement={handleIncrementOrders}
                onChange={(changeEvent) =>
                  setOrdersPerDay(changeEvent.target.value)
                }
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <span className={styles.calculator__counter_text}>
                How many days per week
              </span>
              <DayCounter
                daysPerWeek={daysPerWeek}
                handleIncrementDayPerWeek={handleIncrementDaysPerWeek}
                handleDecrementDayPerWeek={handleDecrementDaysPerWeek}
              />
            </div>
            <div className="flex flex-col items-center mt-4">
              <span className={styles.calculator__counter_text}>
                Bike price
              </span>
              <CalculatorInput onChange={handleSetBike} bikePrice={bikePrice} />
            </div>
          </div>
        </div>
        <span className={styles.separator} />
        <div className="flex items-center justify-center">
          <Selector
            margin="mt-4"
            placeholder="Ferla X"
            options={options}
            value={selectedOption}
            onChange={handleSelectorChange}
          />
        </div>
      </div>
      <Result moneyBack={makeMoneyBack} estimatedEarnings={estimatedEarnings} />
    </>
  );
};
