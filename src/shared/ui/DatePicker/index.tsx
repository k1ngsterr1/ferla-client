"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.scss";

interface IDatePickerProps {
  placeholder: string;
  margin: string;
}

export const DatePickerInput: React.FC<IDatePickerProps> = ({
  placeholder,
  margin,
}) => {
  const [startDate, setStartDate] = useState<null | Date>(new Date());

  return (
    <DatePicker
      className={`${styles.input} ${margin} hoverable `}
      placeholderText={placeholder}
      selected={startDate}
      required
      onChange={(date) => setStartDate(date)}
    />
  );
};
